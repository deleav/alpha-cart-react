import PropTypes from 'prop-types';

import Step from './Step';
import styles from './stepContainer.module.css';

const stepIndicators = ['寄送地址', '運送方式', '付款資訊'];
export default function StepContainer({ currentStep = 1 }) {
  return (
    <div className={styles.stepContainer}>
      {stepIndicators.map((stepIndicator, index) => (
        <Step
          key={stepIndicator}
          index={index + 1}
          title={stepIndicator}
          inactive={index + 1 > currentStep}
          checked={index + 1 < currentStep}
        />
      ))}
    </div>
  );
}

StepContainer.propTypes = {
  currentStep: PropTypes.number,
};
