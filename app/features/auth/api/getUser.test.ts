import { describe, expect, it } from "vitest";
import { loginHandler, userHandler } from "~/mocks/handlers";
import { server } from "~/mocks/node";
import { getUser, login } from "./getUser.server";

describe("getUser", () => {
  it("成功時にユーザーデータを返すこと", async () => {
    const user = await getUser();

    expect(user).toEqual({
      id: "1",
      name: "テストユーザー",
      email: "test@example.com",
    });
  });

  it("APIエラー時に例外をスローすること", async () => {
    server.use(userHandler(500));
    await expect(getUser()).rejects.toThrow("API Error");
  });
});

describe("login", () => {
  it("正しい認証情報で成功すること", async () => {
    const response = await login({
      email: "test@example.com",
      password: "password123",
    });

    expect(response).toEqual({
      token: "123456",
    });
  });

  it("APIエラー時に例外をスローすること", async () => {
    server.use(loginHandler(401));

    await expect(
      login({
        email: "test@example.com",
        password: "wrong-password",
      }),
    ).rejects.toThrow("API Error");
  });
});
