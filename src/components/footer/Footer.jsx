import PropTypes from 'prop-types';

import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import Button from './Button';
import styles from './footer.module.css';

export default function Footer({ step, finalStep, onSubmit, onStepChange }) {
  function handlePrevious() {
    if (!Number.isNaN(step) && step > 1) {
      onStepChange(step - 1);
    }
  }
  function handleNext() {
    if (finalStep) return onSubmit();
    if (!Number.isNaN(step) && step < 3) {
      onStepChange(step + 1);
    }
  }
  return (
    <div className={styles.footerMain}>
      <Button onClick={handlePrevious} leftNode={<ArrowLeft />}>
        上一步
      </Button>
      <Button
        onClick={handleNext}
        intent="primary"
        rightNode={
          !finalStep && <ArrowLeft style={{ transform: 'rotate(180deg)' }} />
        }
      >
        {finalStep ? '確認下單' : '下一步'}
      </Button>
    </div>
  );
}

Footer.propTypes = {
  step: PropTypes.number,
  finalStep: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onStepChange: PropTypes.func.isRequired,
};
