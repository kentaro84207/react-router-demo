import styles from "./index.module.scss";

export function Welcome() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <p className={styles.navText}>What&apos;s next?</p>
          </nav>
        </div>
      </div>
    </main>
  );
}
