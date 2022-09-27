import PropTypes from 'prop-types';

import Input from '../form/Input';
import Select from '../form/Select';
import Subtitle from '../shared/Subtitle';
import styles from './shippingInfo.module.css';

export default function ShippingInfo({
  salutation,
  username,
  phone,
  email,
  city,
  addr,
  onFormChange,
}) {
  const handleChange = (fieldName) => (e) => {
    onFormChange(fieldName, e.target.value);
  };
  return (
    <div>
      <Subtitle>運送方式</Subtitle>
      <div className={styles.shippingInfoMain}>
        <Select
          style={{ gridColumn: '1 / span 2' }}
          label="稱謂"
          name="salutation"
          value={salutation}
          options={[
            { name: '先生', value: 'Mr.' },
            { name: '小姐', value: 'Ms.' },
          ]}
          onChange={handleChange('salutation')}
        />
        <Input
          style={{ gridColumn: '3 / span 4' }}
          label="姓名"
          type="text"
          name="username"
          value={username}
          placeholder="請輸入姓名"
          onChange={handleChange('username')}
        />
        <Input
          style={{ gridColumn: '1 / span 3' }}
          label="電話"
          type="tel"
          name="phone"
          value={phone}
          placeholder="請輸入行動電話"
          onChange={handleChange('phone')}
        />
        <Input
          style={{ gridColumn: '4 / span 3' }}
          label="Email"
          type="email"
          name="email"
          value={email}
          placeholder="請輸入電子郵件"
          onChange={handleChange('email')}
        />
        <Select
          style={{ gridColumn: '1 / span 2' }}
          label="縣市"
          name="city"
          value={city}
          options={[{ name: '台北', value: 'Taipei' }]}
          disabledOption="請選擇縣市"
          onChange={handleChange('city')}
        />
        <Input
          style={{ gridColumn: '3 / span 4' }}
          label="地址"
          type="text"
          name="addr"
          value={addr}
          placeholder="請輸入地址"
          onChange={handleChange('addr')}
        />
      </div>
    </div>
  );
}

ShippingInfo.propTypes = {
  salutation: PropTypes.string,
  username: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  city: PropTypes.string,
  addr: PropTypes.string,
};
