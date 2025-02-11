import type { FC } from "react";
import { Link } from "react-router";
import type { Cat } from "~/features/cats/types";
import styles from "./index.module.scss";

type Props = {
  cat: Cat;
};

export const Card: FC<Props> = ({ cat }) => {
  const breed = cat.breeds[0];

  return (
    <div className={styles.module}>
      <h2>{breed.name}</h2>
      <img src={cat.url} alt="" className={styles.image} />
      <Link to={`/breeds/${breed.id}`}>View Breed →</Link>
    </div>
  );
};
