import PropTypes from 'prop-types';

import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import getPriceText from '../../utils/getPriceText';
import Item from './Item';
import PriceRow from './PriceRow';

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

export default function Cart({ shippingFee, onChange }) {
  const priceText = getPriceText(0 + shippingFee);
  const shippingFeeText = getPriceText(shippingFee);

  function increaseAmount(index) {
    console.log('increaseAmount');
  }

  function decreaseAmount(index) {
    console.log('decreaseAmount');
  }

  return (
    <div id="cart-main">
      <div className="title-container">購物籃</div>
      <div className="items-container">
        {defaultItems.map((item, index) => (
          <Item
            key={index}
            index={index}
            {...item}
            onIncrease={increaseAmount}
            onDecrease={decreaseAmount}
          />
        ))}
      </div>
      <div className="footer-container">
        <PriceRow title="運費" price={shippingFeeText} />
        <PriceRow title="小計" price={priceText} />
      </div>
    </div>
  );
}

Cart.propTypes = {
  shippingFee: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
