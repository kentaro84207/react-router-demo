import { server } from "~/mocks/node";

server.listen();

// msw intercepts requests to the API and returns the response
export async function loader() {
  const response = await fetch("https://api.example.com/user");
  return response.json();
}
