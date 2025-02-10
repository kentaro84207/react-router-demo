import { Link, Outlet } from "react-router";
import styles from "./index.module.scss";

export default function DefaultLayout() {
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
          </ul>
        </nav>
      </header>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
