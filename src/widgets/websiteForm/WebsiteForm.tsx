// WebsiteForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../style/form.css";

import { FormInput, User, WebsiteFormProps } from "../../types";
import Spinner from "../../components/spinner/Spinner";
import GenericInput from "../../components/genericInput/Input";
import { alertMessages } from "../../constants";

const WebsiteForm: React.FC<WebsiteFormProps> = ({
  onSubmit,
  isLoading,
  isError,
  isSuccess,
  data,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const handleFormSubmit: SubmitHandler<FormInput> = (data) => {
    onSubmit(data);
  };

  return (
    <form className="parent-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <GenericInput
        name={"websiteName"}
        title="WebSite Name"
        register={register}
        errors={errors}
        validationRules={{ required: "WebSite Name is required" }}
        inputProps={{ placeholder: "Enter website name" }}
      />

      <GenericInput
        name={"websiteDescription"}
        title="Website Description"
        register={register}
        errors={errors}
        validationRules={{ required: "WebSite Desciption is required" }}
        inputProps={{ placeholder: "Enter website description" }}
      />

      <div className="form-group">
        <label htmlFor="targetUser">Target user:</label>
        <select
          {...register("targetUser", {
            required: "please select a target user",
          })}
        >
          {data &&
            data?.length > 0 &&
            data?.map((item: User) => {
              return (
                <option key={item?.id} value={item?.id}>
                  {item?.name}
                </option>
              );
            })}
          <option selected></option>
        </select>
        {errors.targetUser && (
          <p className="error">{errors.targetUser.message}</p>
        )}
      </div>
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

export default WebsiteForm;
