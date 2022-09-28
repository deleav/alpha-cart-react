import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as CheckIcon } from './../../assets/check.svg';
import styles from './step.module.css';

export default function Step({ inactive, checked, index, title }) {
  return (
    <div
      className={classNames({
        [styles.step]: true,
        [styles.inactive]: inactive,
      })}
    >
      {checked ? (
        <div className={classNames(styles.stepNumber, styles.checked)}>
          <CheckIcon />
        </div>
      ) : (
        <div className={styles.stepNumber}>{index}</div>
      )}
      {title}
      <div className={styles.dashContainer}>
        <div className={styles.longDash} />
      </div>
    </div>
  );
}

Step.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  inactive: PropTypes.bool.isRequired,
};
