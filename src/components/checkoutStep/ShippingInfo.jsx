import { useFormContext } from '../FormContext';
import Input from '../form/Input';
import Select from '../form/Select';
import Subtitle from '../shared/Subtitle';
import styles from './shippingInfo.module.css';

export default function ShippingInfo() {
  const { form, handleFormChange } = useFormContext();
  const handleChange = (fieldName) => (value) => {
    handleFormChange(fieldName, value);
  };
  return (
    <div>
      <Subtitle>運送方式</Subtitle>
      <div className={styles.shippingInfoMain}>
        <Select
          style={{ gridColumn: '1 / span 2' }}
          label="稱謂"
          name="salutation"
          value={form.salutation}
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
          value={form.username}
          placeholder="請輸入姓名"
          onChange={handleChange('username')}
        />
        <Input
          style={{ gridColumn: '1 / span 3' }}
          label="電話"
          type="tel"
          name="phone"
          value={form.phone}
          placeholder="請輸入行動電話"
          onChange={handleChange('phone')}
        />
        <Input
          style={{ gridColumn: '4 / span 3' }}
          label="Email"
          type="email"
          name="email"
          value={form.email}
          placeholder="請輸入電子郵件"
          onChange={handleChange('email')}
        />
        <Select
          style={{ gridColumn: '1 / span 2' }}
          label="縣市"
          name="city"
          value={form.city}
          options={[{ name: '台北', value: 'Taipei' }]}
          disabledOption="請選擇縣市"
          onChange={handleChange('city')}
        />
        <Input
          style={{ gridColumn: '3 / span 4' }}
          label="地址"
          type="text"
          name="addr"
          value={form.addr}
          placeholder="請輸入地址"
          onChange={handleChange('addr')}
        />
      </div>
    </div>
  );
}
