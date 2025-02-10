import type { FC } from "react";
import { Card } from "~/components/ui/Card";
import type { Breed } from "../../types";
import styles from "./index.module.scss";

type Props = {
  catsList: Breed[];
};

export const CatsList: FC<Props> = ({ catsList }) => {
  return (
    <div className={styles.module}>
      {catsList.map((cat) => (
        <Card card={cat} key={cat.id} />
      ))}
    </div>
  );
};
