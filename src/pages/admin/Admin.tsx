// ... existing imports ...

import { SubmitHandler } from "react-hook-form";
import WebsiteForm from "../../widgets/websiteForm/WebsiteForm";
import { FormInput } from "../../types";
import { useMutaionPostData } from "../../hooks/postData/usePostData";
import { Cookies } from "react-cookie";
import useGetData from "../../hooks/getData/useGetData";
import { cashData, cookieKey, endPoint } from "../../constants";

const Admin: React.FC = () => {
  const cookies = new Cookies();

  const { data: usersData } = useGetData(cashData.users, endPoint.user);
  const { mutate, isLoading, isError, isSuccess } = useMutaionPostData(
    endPoint.webSite
  );
  const submitForm: SubmitHandler<FormInput> = async (formData) => {
    cookies.set(cookieKey.userId, +formData?.targetUser);
    mutate(formData);
  };

  return (
    <>
      <WebsiteForm
        onSubmit={submitForm}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        data={usersData?.data}
      />
      ;
    </>
  );
};

export default Admin;
