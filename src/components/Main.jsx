import { useState } from 'react';

import Cart from './cart/Cart';
import PaymentInfo from './checkoutStep/PaymentInfo';
import ShippingInfo from './checkoutStep/ShippingInfo';
import ShippingMethod from './checkoutStep/ShippingMethod';
import Footer from './footer/Footer';
import styles from './main.module.css';
import Modal from './modal/Modal';
import StepContainer from './step/StepContainer';

const initialValues = {
  salutation: 'Mr.',
  username: '',
  phone: '',
  email: '',
  city: '',
  addr: '',
  shippingFee: 0,
  ccname: '',
  cardnumber: '',
  expdate: '',
  cvv: '',
  totalPrice: 0,
};

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
                  shippingFee={form.shippingFee}
                  onFormChange={handleFormChange}
                />
              );
            case 3:
              return (
                <PaymentInfo
                  ccname={form.ccname}
                  cardnumber={form.cardnumber}
                  expdate={form.expdate}
                  cvv={form.cvv}
                  onFormChange={handleFormChange}
                />
              );
            case 1:
            default:
              return (
                <ShippingInfo
                  salutation={form.salutation}
                  username={form.username}
                  phone={form.phone}
                  email={form.email}
                  city={form.city}
                  addr={form.addr}
                  onFormChange={handleFormChange}
                />
              );
          }
        })()}
      </div>
      <div className={styles.footerArea}>
        <Footer step={step} onSubmit={handleSubmit} onStepChange={setStep} />
      </div>
      <div className={styles.cartArea}>
        <Cart
          shippingFee={form.shippingFee}
          onChange={(value) => {
            setForm((prev) => ({ ...prev, totalPrice: value }));
          }}
        />
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className={styles.resultJson}>{prettyFormString}</div>
        </Modal>
      )}
    </div>
  );
}
