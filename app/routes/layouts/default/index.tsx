import { Link, Outlet } from "react-router";
import { getUserSession } from "~/sessions.server";
import type { Route } from "./+types/index";
import styles from "./index.module.scss";

export async function loader({ request }: Route.LoaderArgs) {
  const userId = await getUserSession(request);
  return { userId };
}

export default function DefaultLayout({ loaderData }: Route.ComponentProps) {
  const { userId } = loaderData;

  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/">
            <div>Cats Router</div>
          </Link>
          <ul className={styles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>{userId ? userId : <Link to="login">Login</Link>}</li>
          </ul>
        </nav>
      </header>
      <div className={styles.content}>
        <Outlet context={{ userId }}/>
      </div>
    </div>
  );
}
