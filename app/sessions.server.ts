import { createCookieSessionStorage } from "react-router";

type SessionData = {
  token: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    // `createCookie` からの Cookie または Cookie を作成するための CookieOptions
    cookie: {
      name: "__session__cats",

      // これらはすべてオプションです
      domain: "localhost",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: true,
    },
  });

export { getSession, commitSession, destroySession };

const findSession = async (token: string) => {
  if (token === "123456") {
    return {
      userId: "123456",
    };
  }
  return {
    userId: null,
  };
};

// export async function createUserSession(redirectTo: string) {
//   const session = await getSession();

//   session.set("token", "123456");

//   return redirect(redirectTo, {
//     headers: {
//       "Set-Cookie": await commitSession(session),
//     },
//   });
// }

export async function getUserSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  const sessionToken = session.get("token");

  if (!sessionToken) return null;

  const storedSession = await findSession(sessionToken);

  return storedSession.userId;
}

// export async function logout(request: Request) {
//   const session = await getSession(request.headers.get("Cookie"));

//   return redirect("/login", {
//     headers: {
//       "Set-Cookie": await destroySession(session),
//     },
//   });
// }
