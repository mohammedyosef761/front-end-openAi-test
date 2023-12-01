import React from "react";
import {
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
} from "react-hook-form";
import "../../style/form.css";

interface GenericInputProps<T extends FieldValues> {
  name: string;
  title: string;
  register: UseFormRegister<T>;
  errors: DeepMap<T, FieldError>;
  validationRules?: Record<string, any>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const GenericInput: React.FC<GenericInputProps<any>> = ({
  name,
  title,
  register,
  errors,
  validationRules = {},
  inputProps = {},
}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name as string}>{title}:</label>
        <input {...register(name, { ...validationRules })} {...inputProps} />
        {errors?.[name] && <p className="error">{errors[name]?.message}</p>}
      </div>
    </>
  );
};

export default GenericInput;
