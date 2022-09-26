import Input from "../form/Input";
import styles from "./paymentInfo.module.css";
import PropTypes from "prop-types";

export default function PaymentInfo({
  ccname,
  cardnumber,
  expdate,
  cvv,
  onFormChange,
}) {
  const handleChange = (fieldName) => (value) => {
    onFormChange(fieldName, value);
  };

  return (
    <div className={styles.paymentInfoMain}>
      <Input
        style={{ gridColumn: "1 / span 4" }}
        label="持卡人姓名"
        type="text"
        name="ccname"
        value={ccname}
        placeholder="John Doe"
        onChange={handleChange("ccname")}
      />
      <Input
        style={{ gridColumn: "1 / span 4" }}
        label="卡號"
        type="text"
        name="cardnumber"
        value={cardnumber}
        placeholder="1111 2222 3333 4444"
        onChange={handleChange("cardnumber")}
      />
      <Input
        style={{ gridColumn: "1 / span 3" }}
        label="有效期限"
        type="text"
        name="expdate"
        value={expdate}
        placeholder="MM/YY"
        onChange={handleChange("expdate")}
      />
      <Input
        style={{ gridColumn: "4 / span 3" }}
        label="CVC / CCV "
        type="text"
        name="cvv"
        value={cvv}
        placeholder="123"
        onChange={handleChange("cvv")}
      />
    </div>
  );
}

PaymentInfo.propTypes = {
  ccname: PropTypes.string,
  cardnumber: PropTypes.string,
  expdate: PropTypes.string,
  cvv: PropTypes.string,
  onFormChange: PropTypes.func.isRequired,
};
