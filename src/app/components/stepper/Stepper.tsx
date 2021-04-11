import { FunctionComponent } from "react";
import minusIcon from "./minusIcon.svg";
import plusIcon from "./plusIcon.svg";
import classNames from "classnames/bind";

import styles from "./Stepper.module.scss";

type StepperProps = {
  value: number;
  valueFormat: (value: number) => string;
  onClickIncrement: () => void;
  onClickDecrement: () => void;
};

export const Stepper: FunctionComponent<StepperProps> = ({
  value,
  valueFormat,
  onClickIncrement,
  onClickDecrement,
}) => (
  <div className={styles.alignRight}>
    <div className={styles.container}>
      <button
        className={classNames(styles.iconContainer, styles.button)}
        onClick={onClickDecrement}
        disabled={value <= 0}
      >
        <img className={styles.icon} src={minusIcon} alt="minus" />
      </button>
      <div className={styles.text}>{valueFormat(value)}</div>
      <button
        className={classNames(styles.iconContainer, styles.button)}
        onClick={onClickIncrement}
      >
        <img className={styles.icon} src={plusIcon} alt="plus" />
      </button>
    </div>
  </div>
);
