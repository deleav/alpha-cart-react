import styles from "./app.module.css";
import PaymentInfo from "./components/checkoutStep/PaymentInfo";
import ShippingInfo from "./components/checkoutStep/ShippingInfo";
import ShippingMethod from "./components/checkoutStep/ShippingMethod";

function App() {
  return (
    <div className={styles.app}>
      <ShippingInfo />
      <ShippingMethod />
      <PaymentInfo />
    </div>
  );
}

export default App;
