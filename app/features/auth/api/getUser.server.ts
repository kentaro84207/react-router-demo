import type { User } from "../types/user";

export const getUser = async () => {
  const response = await fetch("https://api.example.com/user");

  if (!response.ok) {
    throw new Error("API Error");
  }
  const data: User = await response.json();
  return data;
};

export const login = async (formData: {
  email: string;
  password: string;
  remember?: boolean;
}) => {
  const response = await fetch("https://api.example.com/login", {
    method: "POST",
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("API Error");
  }
  const data = await response.json();
  return data;
};
