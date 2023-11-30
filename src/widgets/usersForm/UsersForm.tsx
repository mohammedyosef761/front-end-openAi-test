import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../style/form.css";

import {
  FormInput,
  FormUserInput,
  User,
  UserFormPorps,
  WebsiteFormProps,
} from "../../types";
import Spinner from "../../components/spinner/Spinner";

const UsersForm: React.FC<UserFormPorps> = ({
  onSubmit,
  isLoading,
  isError,
  isSuccess,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormUserInput>();

  const handleFormSubmit: SubmitHandler<FormUserInput> = (data) => {
    onSubmit(data);
  };

  return (
    <form className="parent-form " onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="form-group">
        <label htmlFor="name">User Name:</label>
        <input {...register("name", { required: "user name is required" })} />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">password:</label>
        <input
          {...register("password", {
            required: "password is required",
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      {isLoading ? (
        <Spinner show={isLoading} />
      ) : (
        <button type="submit">Submit</button>
      )}

      {isSuccess && (
        <p style={{ color: "green", marginTop: "10px" }}>
          your information is saved
        </p>
      )}
      {isError && (
        <p style={{ color: "red", marginTop: "10px" }}>
          faild to save your information
        </p>
      )}
    </form>
  );
};

export default UsersForm;
