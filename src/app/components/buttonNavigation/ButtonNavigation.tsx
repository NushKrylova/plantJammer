import { FunctionComponent } from "react";
import { Button } from "../button/Button";

import styles from "./ButtonNavigation.module.scss";

type ButtonNavigationProps = {
  onClickBack: () => void;
  onClickNext: () => void;
};

export const ButtonNavigation: FunctionComponent<ButtonNavigationProps> = ({
  onClickBack,
  onClickNext,
}) => (
  <div className={styles.buttonNavigation}>
    <Button onClick={() => onClickBack}>
    <i className="fas fa-arrow-left"/>
      <div className={styles.label}>Back</div>
    </Button>
    <Button onClick={() => onClickNext}>
      <div className={styles.label}>Next</div>
      <i className="fas fa-arrow-right"/>
    </Button>
  </div>
);
