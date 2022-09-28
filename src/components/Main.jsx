import PaymentInfo from './checkoutStep/PaymentInfo';
import ShippingInfo from './checkoutStep/ShippingInfo';
import ShippingMethod from './checkoutStep/ShippingMethod';
import Footer from './footer/Footer';
import styles from './main.module.css';
import StepContainer from './step/StepContainer';

export default function Main() {
  const step = 1;

  const handleFormChange = (name, value) => {
    console.log('handleFormChange');
  };

  return (
    <div className={styles.main}>
      <div className={styles.titleArea}>結帳</div>
      <div className={styles.stepArea}>
        <StepContainer currentStep={step} />
      </div>
      <div className={styles.routerArea}>
        {(() => {
          switch (step) {
            case 2:
              return (
                <ShippingMethod
                  shippingFee={0}
                  onFormChange={handleFormChange}
                />
              );
            case 3:
              return (
                <PaymentInfo
                  ccname=""
                  cardnumber=""
                  expdate=""
                  cvv=""
                  onFormChange={handleFormChange}
                />
              );
            case 1:
            default:
              return (
                <ShippingInfo
                  salutation=""
                  username=""
                  phone=""
                  email=""
                  city=""
                  addr=""
                  onFormChange={handleFormChange}
                />
              );
          }
        })()}
      </div>
      <div className={styles.footerArea}>
        <Footer step={step} onSubmit={() => {}} onStepChange={() => {}} />
      </div>
    </div>
  );
}
