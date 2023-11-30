import { SubmitHandler } from "react-hook-form";

export interface FormInput {
  id: number | string;
  websiteName: string;
  websiteDescription: string;
  targetUser: string;
  ai_description: string;
}
export interface FormUserInput {
  name: string;
  password: string;
}
export type User = {
  name: string;
  id: number | string;
};
export interface WebsiteFormPropsAndUserFormProps {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}
export interface WebsiteFormProps extends WebsiteFormPropsAndUserFormProps {
  onSubmit: SubmitHandler<FormInput>;
  data: User[];
}
export interface UserFormPorps extends WebsiteFormPropsAndUserFormProps {
  onSubmit: SubmitHandler<FormUserInput>;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}

export type HeroSectionType = {
  description: string;
  name: string;
};
