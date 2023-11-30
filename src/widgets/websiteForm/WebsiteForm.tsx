// WebsiteForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./WebsiteForm.css"; // Import the CSS file for styling

import { FormInput, User, WebsiteFormProps } from "../../types";
import Spinner from "../../components/spinner/Spinner";

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
        <select
          {...register("targetUser", {
            required: "please select a target user",
          })}
        >
          <option selected></option>
          {data &&
            data?.length > 0 &&
            data?.map((item: User) => {
              return (
                <option key={item?.id} value={item?.id}>
                  {item?.name}
                </option>
              );
            })}
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

export default WebsiteForm;
