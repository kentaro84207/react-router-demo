import { getCats } from "~/features/cats/api/getCats";
import { CatsList } from "~/features/cats/components/CatsList";
import type { Route } from "./+types/route";
import styles from "./route.module.scss";

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

  return (
    <div className={styles.page}>
      <h1>Welcome to Cats Router!</h1>
      <CatsList catsList={cats} />
    </div>
  );
}
