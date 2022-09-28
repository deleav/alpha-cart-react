import { useFormContext } from '../FormContext';
import Radio from '../form/Radio';
import Subtitle from '../shared/Subtitle';
import styles from './shippingMethod.module.css';

export default function ShippingMethod() {
  const { form, handleFormChange } = useFormContext();

  const handleClick = (value) => {
    handleFormChange('shippingFee', value);
  };

  return (
    <div>
      <Subtitle>運送方式</Subtitle>
      <div className={styles.shippingMethodMain}>
        <Radio
          title="標準運送"
          subtitle="約 3~7 個工作天"
          price={0}
          checked={form.shippingFee === 0}
          onChange={handleClick}
        />
        <Radio
          title="DHL 貨運"
          subtitle="48 小時內送達"
          checked={form.shippingFee === 500}
          price={500}
          onChange={handleClick}
        />
      </div>
    </div>
  );
}
