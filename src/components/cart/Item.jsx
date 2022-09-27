import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './item.module.css';

export default function Item({
  imgSrc,
  title,
  price,
  amount,
  index,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className={styles.itemMain}>
      <div className={styles.imgArea}>
        <img src={imgSrc} alt="" className={styles.img} />
      </div>
      <div className={styles.titleArea}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div className={styles.amountArea}>
        <div
          className={classNames(styles.counter, styles.minus)}
          onClick={() => onDecrease(index)}
        />
        {amount}
        <div
          className={classNames(styles.counter, styles.plus)}
          onClick={() => onIncrease(index)}
        />
      </div>
    </div>
  );
}

Item.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
};
