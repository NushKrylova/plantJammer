import { FunctionComponent } from "react";

import styles from "./Button.module.scss";

type ButtonProps = {
  onClick: () => void;
};

export const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  children,
}) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
