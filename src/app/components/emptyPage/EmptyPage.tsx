import { FunctionComponent } from "react";

import styles from "./EmptyPage.module.scss";

export const EmptyPage: FunctionComponent = () => (
  <div className={styles.emptyPage}>
    <div>&lt;This page is under construction&gt;</div>
    <br/>
    <div>Finish reviewing Anna's task for Plant Jammer?</div>
    <div>
      Contact her :) {" "}
      <a href="mailto:ankkrylova@gmail.com">ankkrylova@gmail.com</a>
      
    </div>
  </div>
);
