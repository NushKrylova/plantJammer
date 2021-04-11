import { FunctionComponent } from "react";
import { Button } from "../button/Button";

import styles from "./ButtonNavigation.module.scss";

type ButtonNavigationProps = {
  onClickBack: () => void;
  onClickNext: () => void;
  disabledBack?: boolean;
  disabledNext?: boolean;
};

export const ButtonNavigation: FunctionComponent<ButtonNavigationProps> = ({
  onClickBack,
  onClickNext,
  disabledBack,
  disabledNext,
}) => (
  <div className={styles.buttonNavigation}>
    <Button onClick={() => onClickBack} disabled={disabledBack}>
      <i className="fas fa-arrow-left" />
      <div className={styles.label}>Back</div>
    </Button>
    <Button onClick={() => onClickNext} disabled={disabledNext}>
      <div className={styles.label}>Next</div>
      <i className="fas fa-arrow-right" />
    </Button>
  </div>
);
