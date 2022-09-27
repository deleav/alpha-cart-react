import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { ReactComponent as TriangleArrowDown } from './../../assets/triangle-arrow-down.svg';
import styles from './select.module.css';

export default function Select({
  value,
  name,
  label,
  options = [],
  style,
  disabledOption,
  onChange,
}) {
  const [selected, setSelected] = useState(value);
  const handleChange = (e) => {
    const name = e.target.getAttribute('name');
    setSelected(name);
    onChange(name);
  };

  return (
    <div className={styles.selectContainer} style={style}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        className={classNames({
          [styles.select]: true,
          [styles.disable]: !selected,
        })}
        onChange={handleChange}
        value={selected}
      >
        {!!disabledOption && (
          <option value="" disabled>
            {disabledOption}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <div className={styles.arrowContainer}>
        <TriangleArrowDown />
      </div>
    </div>
  );
}

Select.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array,
  style: PropTypes.object,
  disabledOption: PropTypes.string,
  onChange: PropTypes.func,
};
