import { isRouteErrorResponse } from "react-router";
import { Link, Outlet } from "react-router";
import { getUserSession } from "~/sessions.server";
import type { Route } from "./+types/route";

export async function loader({ request }: Route.LoaderArgs) {
  const userId = await getUserSession(request);
  if (!userId) {
    throw new Response("Forbidden", { status: 403 });
  }
  return null;
}

export default function Auth() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
        <Link to="/login">ログイン</Link>
      </>
    );
  }
}
