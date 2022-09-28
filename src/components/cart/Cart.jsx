import { useState } from 'react';

import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import getPriceText from '../../utils/getPriceText';
import { useFormContext } from '../FormContext';
import Item from './Item';
import PriceRow from './PriceRow';
import styles from './cart.module.css';

const defaultItems = [
  {
    imgSrc: product1,
    title: '破壞補丁修身牛仔褲',
    amount: 1,
    price: 3999,
  },
  {
    imgSrc: product2,
    title: '刷色直筒牛仔褲',
    amount: 1,
    price: 1299,
  },
];

function getPrice(items) {
  return items.reduce((acc, cur) => {
    return (acc += cur.amount * cur.price);
  }, 0);
}

export default function Cart() {
  const { form, handleFormChange } = useFormContext();
  const [items, setItems] = useState(defaultItems);
  const price = getPrice(items);
  const priceText = getPriceText(price + form.shippingFee);
  const shippingFeeText = getPriceText(form.shippingFee);

  const handleItemUpdate = (items) => {
    setItems([...items]);
    const price = getPrice(items);
    const total = price + form.shippingFee;

    handleFormChange('totalPrice', total);
  };

  function increaseAmount(index) {
    items[index].amount++;
    handleItemUpdate(items);
  }

  function decreaseAmount(index) {
    if (items[index].amount > 1) {
      items[index].amount--;
      handleItemUpdate(items);
    }
  }

  return (
    <div className={styles.cartMain}>
      <div className={styles.titleContainer}>購物籃</div>
      <div className={styles.itemsContainer}>
        {items.map((item, index) => (
          <Item
            key={index}
            index={index}
            {...item}
            onIncrease={increaseAmount}
            onDecrease={decreaseAmount}
          />
        ))}
      </div>
      <div className={styles.footerContainer}>
        <PriceRow title="運費" price={shippingFeeText} />
        <PriceRow title="小計" price={priceText} />
      </div>
    </div>
  );
}
