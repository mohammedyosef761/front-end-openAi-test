// WebsiteForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.css"; // Import the CSS file for styling
import useGetData from "../../api/getData/useGetData";
import { Cookies } from "react-cookie";

interface FormInput {
  id: number | string;
  websiteName: string;
  websiteDescription: string;
  targetUser: string;
  ai_description: string;
}
type User = {
  name: string;
  id: number | string;
};

interface WebsiteFormProps {
  onSubmit: SubmitHandler<FormInput>;
}

const WebsiteForm: React.FC<WebsiteFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const cookies = new Cookies();

  const handleFormSubmit: SubmitHandler<FormInput> = (data) => {
    console.log("data submit id", data);
    cookies.set("user_id", +data?.targetUser);
    onSubmit(data);
  };

  const { data, isLoading, isError, refetch } = useGetData(
    "information-website",
    "user"
  );
  // console.log("data all FormInput", data);
  return (
    <form className="website-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="form-group">
        <label htmlFor="websiteName">Website Name:</label>
        <input
          {...register("websiteName", { required: "Website Name is required" })}
        />
        {errors.websiteName && (
          <p className="error">{errors.websiteName.message}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="websiteDescription">Website Description:</label>
        <input
          {...register("websiteDescription", {
            required: "Website Description is required",
          })}
        />
        {errors.websiteDescription && (
          <p className="error">{errors.websiteDescription.message}</p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="targetUser">Target user:</label>
        <select {...register("targetUser", { required: true })}>
          {data &&
            data?.data?.length > 0 &&
            data?.data?.map((item: User) => {
              return (
                <option key={item?.id} value={item?.id}>
                  {item?.name}
                </option>
              );
            })}
          {/* Add more options as needed */}
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default WebsiteForm;
