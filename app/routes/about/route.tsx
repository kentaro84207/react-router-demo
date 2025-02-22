import { Form } from "react-router";

export function meta() {
  return [
    { title: "Cats | About" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return (
    <div>
      猫について
      <Form method="post" action="/logout">
        <button type="submit">ログアウト</button>
      </Form>
    </div>
  );
}
