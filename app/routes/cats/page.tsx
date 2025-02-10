import { CatDetail } from "~/features/cats/components/CatDetail";
import type { Route } from "./+types";
import styles from "./page.module.scss";

type Props = Route.ComponentProps["loaderData"];

export default function CatPage({ cat }: Props) {
  return (
    <div className={styles.page}>
      <h1>{cat.name}</h1>
      <div>
        <CatDetail cat={cat} />
      </div>
    </div>
  );
}
