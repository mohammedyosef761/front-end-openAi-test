// ... existing imports ...

import { SubmitHandler } from "react-hook-form";
import WebsiteForm from "../../components/form/Form";
import { FormInput } from "../../types";
import { useMutaionPostData } from "../../api/postData/usePostData";

const Admin: React.FC = () => {
  const { mutate, isLoading, isError, isSuccess, data } =
    useMutaionPostData("website");
  const submitForm: SubmitHandler<FormInput> = async (formData) => {
    mutate(formData);
  };

  return (
    <>
      <WebsiteForm
        onSubmit={submitForm}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />
      ;
    </>
  );
};

export default Admin;
