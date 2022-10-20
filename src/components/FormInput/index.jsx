/* eslint-disable react/prop-types */
import { FormInputLabel, CustomInput, GroupDiv } from './FormInput.styles';

const FormInput = ({
  label,
  type,
  required,
  onChange,
  name,
  id,
  value,
}) => (
  <GroupDiv>
    <CustomInput
      type={type}
      required={required}
      onChange={onChange}
      name={name}
      id={id}
      value={value}
    />
    {
      label && (
        <FormInputLabel shrink={value.length} htmlFor={name}>
          {label}
        </FormInputLabel>
      )
    }
  </GroupDiv>
);

export default FormInput;
