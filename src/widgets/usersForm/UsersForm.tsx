import React from "react";
import { SubmitHandler } from "react-hook-form";
import "../../style/form.css";
import GenericForm from "../../components/genericForm/GenericForm";
import { MyFormUsersData, UserFormPorps } from "../../types";
import { UsersFields } from "../../mock-data";

const WebsiteForm: React.FC<UserFormPorps> = ({
  onSubmit,
  isLoading,
  isError,
  isSuccess,
}) => {
  const handleFormSubmit: SubmitHandler<MyFormUsersData> = (formdata) => {
    onSubmit(formdata);
  };

  return (
    <GenericForm
      formFields={UsersFields}
      onSubmit={handleFormSubmit}
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
    />
  );
};

export default WebsiteForm;
