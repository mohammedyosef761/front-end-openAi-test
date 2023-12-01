import { SubmitHandler } from "react-hook-form";

export interface FormWebsiteInput {
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
  onSubmit: SubmitHandler<FormWebsiteInput>;
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

export interface FormFieldConfig<T> {
  name: keyof T;
  title: string;
  type: "input" | "select";
  validationRules: Record<string, string>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
}

export interface GenericFormProps<T> {
  formFields: FormFieldConfig<T>[];
  onSubmit: (data: T) => void;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  data?: any;
}

export interface MyFormWebsiteData {
  websiteName: string;
  websiteDescription: string;
  targetUser: string;
}
