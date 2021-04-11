import { FunctionComponent } from "react";
import { Button } from "../button/Button";
import arrowLeft from "./arrowLeft.svg";
import arrowRight from "./arrowRight.svg";

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
      <img className={styles.icon} src={arrowLeft} alt="arrow left" />
      <div>Back</div>
    </Button>
    <Button onClick={() => onClickNext}>
      <div>Next</div>
      <img className={styles.icon} src={arrowRight} alt="arrow left" />
    </Button>
  </div>
);
