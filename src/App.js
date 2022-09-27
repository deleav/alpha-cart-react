import styles from './app.module.css';
import PaymentInfo from './components/checkoutStep/PaymentInfo';
import ShippingInfo from './components/checkoutStep/ShippingInfo';
import ShippingMethod from './components/checkoutStep/ShippingMethod';
import Footer from './components/footer/Footer';
import StepContainer from './components/step/StepContainer';

function App() {
  return (
    <div className={styles.app}>
      <StepContainer />
      <ShippingInfo onFormChange={() => {}} />
      <ShippingMethod />
      <PaymentInfo />
      <Footer />
    </div>
  );
}

export default App;
