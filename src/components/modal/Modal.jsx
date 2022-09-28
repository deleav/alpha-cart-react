import PropTypes from 'prop-types';

import styles from './modal.module.css';

export default function Modal({ children, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer}>
        <div className={styles.modal}>{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
