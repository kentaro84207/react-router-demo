import type { FC } from "react";
import type { Breed as BreedType } from "../../types";
import styles from "./index.module.scss";

type Props = {
  breed: BreedType;
};

export const Breed: FC<Props> = ({ breed }) => {
  return (
    <div className={styles.module}>
      <img
        src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
        alt={breed.name}
        className={styles.image}
      />
      <dl className={styles.list}>
        <div>
          <dt className={styles.dt}>Name</dt>
          <dd>{breed.name}</dd>
        </div>
        <div>
          <dt className={styles.dt}>Description</dt>
          <dd>{breed.description}</dd>
        </div>
        <div>
          <dt className={styles.dt}>Life Span</dt>
          <dd>{breed.life_span}</dd>
        </div>
        <div>
          <dt className={styles.dt}>Origin</dt>
          <dd>{breed.origin}</dd>
        </div>
        <div>
          <dt className={styles.dt}>Temperament</dt>
          <dd>{breed.temperament}</dd>
        </div>
      </dl>
    </div>
  );
};
