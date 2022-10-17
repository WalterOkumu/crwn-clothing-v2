/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import './FormInput.styles.scss';

const FormInput = ({ label, name, inputOptions }) => (
  <div className="group">
    <input className="form-input" {...inputOptions} />
    {
      label && (
        <label htmlFor={name} className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )
    }
  </div>
);

export default FormInput;
