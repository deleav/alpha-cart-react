import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './button.module.css';

export default function Button({
  children,
  onClick,
  leftNode,
  rightNode,
  intent = 'text',
}) {
  return (
    <button
      onClick={onClick}
      className={classNames({
        [styles.button]: true,
        [styles.primary]: intent === 'primary',
      })}
    >
      {leftNode}
      {children}
      {rightNode}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  leftNode: PropTypes.node,
  rightNode: PropTypes.node,
  onClick: PropTypes.func,
  intent: PropTypes.oneOf(['primary', 'text']),
};
