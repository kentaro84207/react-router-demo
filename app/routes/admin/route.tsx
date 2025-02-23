// import { isRouteErrorResponse } from "react-router";
// import { Link } from "react-router";
// import { getUserSession } from "~/sessions.server";
// import type { Route } from "./+types/route";

export function meta() {
  return [
    { title: "Cats | Admin" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// export async function loader({ request }: Route.LoaderArgs) {
//   const userId = await getUserSession(request);
//   if (!userId) {
//     throw new Response("Forbidden", { status: 403 });
//   }
//   return null;
// }

export default function Admin() {
  return <div>Admin</div>;
}

// export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
//   if (isRouteErrorResponse(error)) {
//     return (
//       <>
//         <h1>
//           {error.status} {error.statusText}
//         </h1>
//         <p>{error.data}</p>
//         <Link to="/login">ログイン</Link>
//       </>
//     );
//   }
// }
