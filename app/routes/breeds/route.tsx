import { getBreed } from "~/features/cats/api/getBreed";
import { Breed } from "~/features/cats/components/Breed";
import type { Route } from "./+types/route";
import styles from "./route.module.scss";

export function meta() {
  return [{ title: "Breed | Home" }];
}

export async function loader({ params }: Route.LoaderArgs) {
  const breed = await getBreed(params.breedId);
  if (!breed) {
    throw new Error("Failed to load cats");
  }
  return { breed };
}

export default function Breeds({ loaderData }: Route.ComponentProps) {
  const { breed } = loaderData;

  return (
    <div className={styles.page}>
      <h1>{breed.name}</h1>
      <div>
        <Breed breed={breed} />
      </div>
    </div>
  );
}
