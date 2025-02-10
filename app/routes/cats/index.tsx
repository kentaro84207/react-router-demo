import { getCat } from "~/features/cats/api/getCat";
import type { Route } from "./+types";
import CatPage from "./page";

export function meta() {
  return [{ title: "Cat | Home" }];
}

export async function loader({ params }: Route.LoaderArgs) {
  const cat = await getCat(params.breedId);
  if (!cat) {
    throw new Error("Failed to load cats");
  }
  return { cat };
}

export default function Cat({ loaderData }: Route.ComponentProps) {
  const { cat } = loaderData;

  return <CatPage cat={cat} />;
}
