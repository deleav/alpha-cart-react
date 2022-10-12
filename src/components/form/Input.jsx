import PropTypes from 'prop-types';

import styles from './input.module.css';

export default function Input({
  value,
  label,
  type = 'text',
  name,
  style,
  placeholder,
  onChange,
}) {
  return (
    <div className={styles.inputContainer} style={style}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.inputText}
        value={value}
        id={name}
        name={name}
        type={type}
        required={true}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
