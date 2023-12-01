import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../style/form.css";

import { FormUserInput, UserFormPorps } from "../../types";
import Spinner from "../../components/spinner/Spinner";
import GenericInput from "../../components/genericInput/Input";
import { alertMessages } from "../../constants";

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
      <GenericInput
        name={"name"}
        title="user name"
        register={register}
        errors={errors}
        validationRules={{ required: "Name is required" }}
        inputProps={{ placeholder: "Enter username" }}
      />

      <GenericInput
        name={"password"}
        title="password"
        register={register}
        errors={errors}
        validationRules={{ required: "Password is required" }}
        inputProps={{ type: "password", placeholder: "Enter password" }}
      />

      {isLoading ? (
        <Spinner show={isLoading} />
      ) : (
        <button type="submit">Submit</button>
      )}

      {isSuccess && (
        <p style={{ color: "green", marginTop: "10px" }}>
          {alertMessages.succes}
        </p>
      )}
      {isError && (
        <p style={{ color: "red", marginTop: "10px" }}>{alertMessages.faild}</p>
      )}
    </form>
  );
};

export default UsersForm;
