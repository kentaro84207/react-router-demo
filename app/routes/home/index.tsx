import { getCats } from "~/features/cats/api/getCats";
import type { Route } from "./+types";
import HomePage from "./page";

export function meta() {
  return [{ title: "Cats | Home" }];
}

export async function loader() {
  const cats = await getCats();
  if (!cats) {
    throw new Error("Failed to load cats");
  }
  return { cats };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { cats } = loaderData;

  return <HomePage cats={cats} />;
}
