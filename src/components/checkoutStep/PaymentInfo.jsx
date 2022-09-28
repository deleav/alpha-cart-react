import { useFormContext } from '../FormContext';
import Input from '../form/Input';
import styles from './paymentInfo.module.css';

export default function PaymentInfo() {
  const { form, handleFormChange } = useFormContext();
  const handleChange = (fieldName) => (value) => {
    handleFormChange(fieldName, value);
  };

  return (
    <div className={styles.paymentInfoMain}>
      <Input
        style={{ gridColumn: '1 / span 4' }}
        label="持卡人姓名"
        type="text"
        name="ccname"
        value={form.ccname}
        placeholder="John Doe"
        onChange={handleChange('ccname')}
      />
      <Input
        style={{ gridColumn: '1 / span 4' }}
        label="卡號"
        type="text"
        name="cardnumber"
        value={form.cardnumber}
        placeholder="1111 2222 3333 4444"
        onChange={handleChange('cardnumber')}
      />
      <Input
        style={{ gridColumn: '1 / span 3' }}
        label="有效期限"
        type="text"
        name="expdate"
        value={form.expdate}
        placeholder="MM/YY"
        onChange={handleChange('expdate')}
      />
      <Input
        style={{ gridColumn: '4 / span 3' }}
        label="CVC / CCV "
        type="text"
        name="cvv"
        value={form.cvv}
        placeholder="123"
        onChange={handleChange('cvv')}
      />
    </div>
  );
}
