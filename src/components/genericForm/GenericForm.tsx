import React from "react";
import { useForm } from "react-hook-form";
import GenericInput from "../genericInput/GenericInput";
import GenericSelectInput from "../genericSelectInput/GenericSelectInput";
import "../../style/form.css";
import Spinner from "../spinner/Spinner";
import { alertMessages } from "../../constants";
import { GenericFormProps } from "../../types";

const GenericForm = <T extends Record<string, any>>({
  formFields,
  onSubmit,
  isLoading,
  isError,
  isSuccess,
  data,
}: GenericFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="parent-form">
      {formFields.map((field) => (
        <React.Fragment key={field.name as string}>
          {field.type === "input" && (
            <GenericInput
              name={field.name as string}
              title={field.title}
              register={register}
              errors={errors}
              validationRules={field.validationRules}
              inputProps={field.inputProps}
            />
          )}
          {field.type === "select" && (
            <GenericSelectInput<any>
              name={field.name as string}
              title={field.title}
              register={register}
              errors={errors as any}
              data={data || []}
            />
          )}
        </React.Fragment>
      ))}
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

export default GenericForm;
