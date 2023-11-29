import { SubmitHandler } from "react-hook-form";

export interface FormInput {
  id: number | string;
  websiteName: string;
  websiteDescription: string;
  targetUser: string;
  ai_description: string;
}
export type User = {
  name: string;
  id: number | string;
};

export interface WebsiteFormProps {
  onSubmit: SubmitHandler<FormInput>;
  isLoading: boolean;
}
