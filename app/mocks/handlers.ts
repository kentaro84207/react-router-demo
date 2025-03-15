import { http, HttpResponse, graphql } from "msw";

export const userHandler = (status: 200 | 500 = 200) =>
  http.get("https://api.example.com/user", () => {
    if (status === 500) {
      return new HttpResponse(null, { status: 500 });
    }
    return HttpResponse.json({
      id: "1",
      name: "テストユーザー",
      email: "test@example.com",
    });
  });

export const loginHandler = (status: 200 | 401 = 200) =>
  http.post("https://api.example.com/login", async ({ request }) => {
    const token = "123456";
    if (status === 401) {
      return new HttpResponse(null, { status: 401 });
    }
    return HttpResponse.json({
      token,
    });
  });

export const handlers = [
  userHandler(),
  loginHandler(),
  graphql.query("ListMovies", () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            id: "6c6dba95-e027-4fe2-acab-e8c155a7f0ff",
            title: "The Lord of The Rings",
          },
          {
            id: "a2ae7712-75a7-47bb-82a9-8ed668e00fe3",
            title: "The Matrix",
          },
          {
            id: "916fa462-3903-4656-9e76-3f182b37c56f",
            title: "Star Wars: The Empire Strikes Back",
          },
        ],
      },
    });
  }),
];
