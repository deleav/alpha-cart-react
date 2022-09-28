import { useState } from 'react';

import FormContext, { initialValues } from './FormContext';
import Cart from './cart/Cart';
import PaymentInfo from './checkoutStep/PaymentInfo';
import ShippingInfo from './checkoutStep/ShippingInfo';
import ShippingMethod from './checkoutStep/ShippingMethod';
import Footer from './footer/Footer';
import styles from './main.module.css';
import Modal from './modal/Modal';
import StepContainer from './step/StepContainer';

export default function Main() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialValues);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prettyFormString, setPrettyFormString] = useState('');
  const handleSubmit = () => {
    const str = JSON.stringify(form, null, 2);
    // for console
    console.log(str);
    // for modal
    setPrettyFormString(str);
    setIsModalOpen(true);
    // clean up form
    setForm(initialValues);
  };

  const handleFormChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormContext.Provider value={{ form, handleFormChange }}>
      <div className={styles.main}>
        <div className={styles.titleArea}>結帳</div>
        <div className={styles.stepArea}>
          <StepContainer currentStep={step} />
        </div>
        <div className={styles.routerArea}>
          {(() => {
            switch (step) {
              case 2:
                return <ShippingMethod />;
              case 3:
                return <PaymentInfo />;
              case 1:
              default:
                return <ShippingInfo />;
            }
          })()}
        </div>
        <div className={styles.footerArea}>
          <Footer step={step} onSubmit={handleSubmit} onStepChange={setStep} />
        </div>
        <div className={styles.cartArea}>
          <Cart />
        </div>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <div className={styles.resultJson}>{prettyFormString}</div>
          </Modal>
        )}
      </div>
    </FormContext.Provider>
  );
}
