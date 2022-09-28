import { createContext, useContext } from 'react';

export const initialValues = {
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

const FormContext = createContext({
  form: initialValues,
  handleFormChange: (name, value) => {},
});

export function useFormContext() {
  return useContext(FormContext);
}

export default FormContext;
