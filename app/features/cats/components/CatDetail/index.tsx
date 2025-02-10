import type { FC } from "react";
import type { Breed } from "../../types";
import styles from "./index.module.scss";

type Props = {
  cat: Breed;
};

export const CatDetail: FC<Props> = ({ cat }) => {
  return (
    <div className={styles.module}>
      <img
        src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
        alt={cat.name}
        className={styles.image}
      />
      <dl className={styles.list}>
        <div>
          <dt className={styles.dt}>Name</dt>
          <dd>{cat.name}</dd>
        </div>
        <div>
          <dt className={styles.dt}>Description</dt>
          <dd>{cat.description}</dd>
        </div>
        <div>
          <dt className={styles.dt}>Life Span</dt>
          <dd>{cat.life_span}</dd>
        </div>
        <div>
          <dt className={styles.dt}>Origin</dt>
          <dd>{cat.origin}</dd>
        </div>
        <div>
          <dt className={styles.dt}>Temperament</dt>
          <dd>{cat.temperament}</dd>
        </div>
      </dl>
    </div>
  );
};
