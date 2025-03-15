import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Form, useActionData } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { data, redirect } from "react-router";
import { z } from "zod";
import { login } from "~/features/auth/api/getUser.server";
import type { Route } from "./+types/route";

import { commitSession, getSession } from "~/sessions.server";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
  remember: z.boolean().optional(),
});

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  return data(
    { error: session.get("error") },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

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
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { token } = await login(submission.value);

  if (!token) {
    // return submission.reply({
    //   formErrors: ["Failed to login. Please try again later."],
    // });
    session.flash("error", "ユーザー名/パスワードが無効です");

    // エラーが発生したログインページにリダイレクトします。
    return redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  session.set("token", token);

  // ログインに成功したので、ホームページに送信します。
  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
