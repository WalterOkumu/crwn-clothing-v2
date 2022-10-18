/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import './FormInput.styles.scss';

const FormInput = ({
  label,
  type,
  required,
  onChange,
  name,
  id,
  value,
}) => (
  <div className="group">
    <input
      className="form-input"
      type={type}
      required={required}
      onChange={onChange}
      name={name}
      id={id}
      value={value}

    />
    {
      label && (
        <label
          className={`${value.length ? 'shrink' : ''} form-input-label`}
          htmlFor={name}
        >
          {label}
        </label>
      )
    }
  </div>
);

export default FormInput;
