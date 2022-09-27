import styles from './app.module.css';
import PaymentInfo from './components/checkoutStep/PaymentInfo';
import ShippingInfo from './components/checkoutStep/ShippingInfo';
import ShippingMethod from './components/checkoutStep/ShippingMethod';
import StepContainer from './components/step/StepContainer';

function App() {
  return (
    <div className={styles.app}>
      <StepContainer />
      <ShippingInfo onFormChange={() => {}} />
      <ShippingMethod />
      <PaymentInfo />
    </div>
  );
}

export default App;
