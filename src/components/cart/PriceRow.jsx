import PropTypes from 'prop-types';

import styles from './priceRow.module.css';

export default function PriceRow({ title, price }) {
  return (
    <div className={styles.priceRowMain}>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>{price}</div>
    </div>
  );
}

PriceRow.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
