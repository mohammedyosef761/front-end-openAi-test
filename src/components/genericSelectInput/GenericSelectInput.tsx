import {
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
} from "react-hook-form";

import "../../style/form.css";

interface GenericSelectInputProps<T extends FieldValues> {
  name: keyof FieldValues | any;
  title: string;
  register: UseFormRegister<T>;
  errors: DeepMap<T, FieldError>;
  data: any[];
}

const GenericSelectInput = <T extends FieldValues>({
  name,
  title,
  register,
  errors,
  data,
}: GenericSelectInputProps<T>) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={name}>{title}:</label>
        <select
          placeholder="select an option"
          {...register(name, {
            required: `Please select a ${title.toLowerCase()}`,
          })}
        >
          {data &&
            data.length > 0 &&
            data.map((item: any) => (
              <option key={item?.id} value={item?.id}>
                {item?.name}
              </option>
            ))}
          <option value="" disabled hidden selected>
            Select an option
          </option>
        </select>
        {errors?.[name] && <p className="error">{errors?.[name].message}</p>}
      </div>
    </div>
  );
};

export default GenericSelectInput;
