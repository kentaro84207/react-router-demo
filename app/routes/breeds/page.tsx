import { Breed } from "~/features/cats/components/Breed";
import type { Route } from "./+types";
import styles from "./page.module.scss";

type Props = Route.ComponentProps["loaderData"];

export default function BreedPage({ breed }: Props) {
  return (
    <div className={styles.page}>
      <h1>{breed.name}</h1>
      <div>
        <Breed breed={breed} />
      </div>
    </div>
  );
}
