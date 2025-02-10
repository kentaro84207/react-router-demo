import { CatsList } from "~/features/cats/components/CatsList";
import type { Route } from "./+types";
import styles from "./page.module.scss";

type Props = Route.ComponentProps["loaderData"];

export default function HomePage({ cats }: Props) {
  return (
    <div className={styles.page}>
      <h1>Welcome to Cats Router!</h1>
      <CatsList catsList={cats} />
    </div>
  );
}
