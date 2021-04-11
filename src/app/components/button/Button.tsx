import { FunctionComponent } from "react";

import styles from "./Button.module.scss";

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  disabled,
  children,
}) => (
  <button className={styles.button} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
