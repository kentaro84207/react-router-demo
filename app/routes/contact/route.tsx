import {
  getFormProps,
  getInputProps,
  getTextareaProps,
  useForm,
} from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import type { ActionFunctionArgs } from "react-router";
import { Form, redirect, useActionData } from "react-router";
import { z } from "zod";
import styles from "./route.module.scss";

export function meta() {
  return [{ title: "Contact | Home" }];
}

const schema = z.object({
  email: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z
      .string({ required_error: "メールアドレスを入力してください" })
      .email("メールアドレスが不正な形式です"),
  ),
  message: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z
      .string({ required_error: "メッセージを入力してください" })
      .min(1, "メッセージが短すぎます")
      .max(100, "メッセージが長すぎます"),
  ),
});

const sendMessage = async (data: { email: string; message: string }) => {
  console.table(data);
  return { sent: true };
};

export default function Contact() {
  const lastResult = useActionData<typeof action>();
  const [form, fields] = useForm({
    lastResult,
    constraint: getZodConstraint(schema),
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });

  return (
    <div className={styles.page}>
      <h1>Contact</h1>
      <Form method="post" {...getFormProps(form)}>
        <div className={styles.formControl}>
          <label htmlFor={fields.email.id}>Email</label>
          <input {...getInputProps(fields.email, { type: "email" })} />
          <div id={fields.email.errorId} className={styles.error}>{fields.email.errors}</div>
        </div>
        <div className={styles.formControl}>
          <label htmlFor={fields.message.id}>Message</label>
          <textarea {...getTextareaProps(fields.message)} />
          <div id={fields.message.errorId} className={styles.error}>{fields.message.errors}</div>
        </div>
        <button type="submit">Send</button>
      </Form>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const submission = parseWithZod(formData, { schema });
  // submission が成功しなかった場合、クライアントに送信結果を報告します。
  if (submission.status !== "success") {
    return submission.reply();
  }

  const message = await sendMessage(submission.value);

  if (!message.sent) {
    return submission.reply({
      formErrors: ["Failed to send the message. Please try again later."],
    });
  }

  return redirect("/contact");
}
