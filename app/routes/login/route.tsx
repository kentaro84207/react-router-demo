import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Form, redirect, useActionData } from "react-router";
import type { ActionFunctionArgs } from "react-router";

import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
  remember: z.boolean().optional(),
});

const login = async (data: {
  email: string;
  password: string;
  remember?: boolean;
}) => {
  console.table(data);
  return { logged: true };
};

export default function Login() {
  const lastResult = useActionData<typeof action>();
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldValidate: "onBlur",
  });

  return (
    <Form method="post" {...getFormProps(form)}>
      <div>
        <label htmlFor={fields.email.id}>Email</label>
        <input
          className={!fields.email.valid ? "error" : ""}
          {...getInputProps(fields.email, { type: "email" })}
        />
        <div>{fields.email.errors}</div>
      </div>
      <div>
        <label htmlFor={fields.password.id}>Password</label>
        <input
          className={!fields.password.valid ? "error" : ""}
          {...getInputProps(fields.password, { type: "password" })}
        />
        <div>{fields.password.errors}</div>
      </div>
      <label htmlFor={fields.remember.id}>
        <div>
          <span>Remember me</span>
          <input {...getInputProps(fields.remember, { type: "checkbox" })} />
        </div>
      </label>
      <hr />
      <button type="submit">Login</button>
    </Form>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const loginResult = await login(submission.value);

  if (!loginResult.logged) {
    return submission.reply({
      formErrors: ["Failed to login. Please try again later."],
    });
  }

  return redirect('/');
}
