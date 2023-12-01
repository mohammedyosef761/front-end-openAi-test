// ... existing imports ...

import { SubmitHandler } from "react-hook-form";
import { FormUserInput } from "../../types";
import { useMutaionPostData } from "../../hooks/postData/usePostData";
import { endPoint } from "../../constants";
import UsersForm from "../../widgets/usersForm/UsersForm";

const Users: React.FC = () => {
  const { mutate, isLoading, isError, isSuccess } = useMutaionPostData(
    endPoint.user
  );
  const submitForm: SubmitHandler<FormUserInput> = async (formData) => {
    mutate(formData);
  };

  return (
    <>
      <UsersForm
        onSubmit={submitForm}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />
    </>
  );
};

export default Users;
