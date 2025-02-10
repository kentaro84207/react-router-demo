import type { Breed } from "../types";

export const getCat = async (breedId: string): Promise<Breed> => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/breeds/${breedId}`,
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
