import type { FC } from "react";
import { Link } from "react-router";
import type { Breed } from "~/features/cats/types";
import styles from "./index.module.scss";

type Props = {
  card: Breed;
};

export const Card: FC<Props> = ({ card }) => {
  return (
    <div className={styles.module}>
      <h2>{card.name}</h2>
      <img
        src={`https://cdn2.thecatapi.com/images/${card.reference_image_id}.jpg`}
        alt={card.name}
        className={styles.image}
      />
      <p className={styles.description}>{card.description}</p>
      <Link to={`/cats/${card.id}`}>View details →</Link>
    </div>
  );
};
