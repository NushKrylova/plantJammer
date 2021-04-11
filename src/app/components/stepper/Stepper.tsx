import { FunctionComponent } from "react";
import styles from "./Stepper.module.css";
import minusIcon from "./minusIcon.svg";
import plusIcon from "./plusIcon.svg";

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
        className={styles.iconContainer}
        onClick={onClickDecrement}
        disabled={value <= 0}
      >
        <img className={styles.icon} src={minusIcon} alt="minus" />
      </button>
      <div className={styles.text}>{valueFormat(value)}</div>
      <button className={styles.iconContainer} onClick={onClickIncrement}>
        <img className={styles.icon} src={plusIcon} alt="plus" />
      </button>
    </div>
  </div>
);
