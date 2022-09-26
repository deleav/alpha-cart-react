import getPriceText from "../../utils/getPriceText";
import styles from "./radio.module.css";
import PropTypes from "prop-types";

export default function Radio({
  group = "group",
  price,
  checked,
  title,
  style,
  subtitle,
  onChange,
}) {
  const priceText = getPriceText(price);

  return (
    <label className={styles.radioContainer} style={style}>
      <input
        type="radio"
        className={styles.radio}
        name={group}
        checked={checked}
        onChange={() => onChange(price)}
      />
      <div className={styles.inner} />
      <div className={styles.checkCircle} />
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
        {priceText}
      </div>
      <div className={styles.subtitle}>{subtitle}</div>
    </label>
  );
}

Radio.propTypes = {
  group: PropTypes.string,
  price: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
