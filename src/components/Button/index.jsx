/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import './Button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ buttonType, children, ...otherProps }) => (
  <button
    className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}
  >
    {
      children
    }
  </button>
);

export default Button;
