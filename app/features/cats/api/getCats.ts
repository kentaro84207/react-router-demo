import type { Breed } from "../types";

export const getCats = async (): Promise<Breed[]> => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/breeds?limit=9",
    {
      headers: {
        "x-api-key": process.env.API_KEY || "",
      },
    },
  );
  if (!response.ok) {
    throw new Error("API Error");
  }
  const data = await response.json();
  return data;
};
