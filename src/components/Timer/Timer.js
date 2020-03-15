import React from "react";
import { format } from "date-fns";

import styles from "./styles.module.css";

const Timer = ({ currentTime }) => {
  return (
    <div>
      <p className={styles.timer}>
        <span>{format(currentTime, "mm:ss")}</span>
      </p>
    </div>
  );
};

export default Timer;
