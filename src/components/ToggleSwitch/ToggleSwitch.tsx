import React from "react";
import styles from "../../styles/ToggleSwitch/ToggleSwitch.module.scss";

interface ToggleSwitchProps {
  id: string;
  text: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  id,
  text,
  value,
  onChange,
}) => {
  return (
    <div className={styles.toggleSwitch__content}>
      <div
        className={`${styles.toggleSwitch} ${
          value ? styles["toggleSwitch--checked"] : { text }
        }`}
      >
        <input
          type="checkbox"
          id={id}
          className="toggleSwitch__input"
          checked={value}
          onChange={onChange}
        />
        <label htmlFor={id} className={styles.toggleSwitch__slider}></label>
      </div>
      <p className={styles.toggleSwitch__text}>{text}</p>
    </div>
  );
};

export default ToggleSwitch;
