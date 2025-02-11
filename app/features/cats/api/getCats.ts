import type { Cat } from "../types";

export const getCats = async (): Promise<Cat[]> => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=9&has_breeds=true",
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
