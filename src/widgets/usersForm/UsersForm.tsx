import React from "react";
import { SubmitHandler } from "react-hook-form";
import "../../style/form.css";
import GenericForm from "../../components/genericForm/GenericForm";
import { FormWebsiteInput, WebsiteFormProps } from "../../types";
import { UsersFields } from "../../mock-data";

const WebsiteForm: React.FC<WebsiteFormProps> = ({
  onSubmit,
  isLoading,
  isError,
  isSuccess,
  data,
}) => {
  const handleFormSubmit: SubmitHandler<FormWebsiteInput> = (formdata) => {
    onSubmit(formdata);
  };

  return (
    <GenericForm
      formFields={UsersFields}
      onSubmit={handleFormSubmit}
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
      data={data}
    />
  );
};

export default WebsiteForm;
