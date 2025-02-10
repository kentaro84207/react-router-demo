import { getBreed } from "~/features/cats/api/getBreed";
import type { Route } from "./+types";
import BreedPage from "./page";

export function meta() {
  return [{ title: "Cat | Home" }];
}

export async function loader({ params }: Route.LoaderArgs) {
  const breed = await getBreed(params.breedId);
  if (!breed) {
    throw new Error("Failed to load cats");
  }
  return { breed };
}

export default function Breed({ loaderData }: Route.ComponentProps) {
  const { breed } = loaderData;

  return <BreedPage breed={breed} />;
}
