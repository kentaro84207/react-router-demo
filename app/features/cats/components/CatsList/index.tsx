import type { FC } from "react";
import { Card } from "~/components/ui/Card";
import type { Cat } from "../../types";
import styles from "./index.module.scss";

type Props = {
  catsList: Cat[];
};

export const CatsList: FC<Props> = ({ catsList }) => {
  return (
    <div className={styles.module}>
      {catsList.map((cat) => (
        <Card cat={cat} key={cat.id} />
      ))}
    </div>
  );
};
