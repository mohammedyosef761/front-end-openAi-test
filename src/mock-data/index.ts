import { FormFieldConfig, MyFormUsersData, MyFormWebsiteData } from "../types";

export const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a range of services including ...",
  },
  {
    question: "How can I contact support?",
    answer: "You can contact our support team by ...",
  },
  {
    question: "how can we helo you?",
    answer: "We offer a range of services including ...",
  },
];

export const keyPointData = [
  {
    icon: "🚀",
    title: "Innovative Solutions",
    description: "Explore cutting-edge technology for your business needs.",
  },
  {
    icon: "🌐",
    title: "Global Reach",
    description:
      "Connect with a worldwide audience through our scalable solutions.",
  },
  {
    icon: "🌈",
    title: "Creative Design",
    description:
      "Immerse your audience with visually stunning and user-friendly interfaces.",
  },
];

export const WebSiteFields: FormFieldConfig<MyFormWebsiteData>[] = [
  {
    name: "websiteName",
    title: "WebSite Name",
    type: "input",
    validationRules: { required: "WebSite Name is required" },
    inputProps: { placeholder: "Enter website name" },
  },
  {
    name: "websiteDescription",
    title: "Website Description",
    type: "input",
    validationRules: { required: "WebSite Description is required" },
    inputProps: { placeholder: "Enter website description" },
  },
  {
    name: "targetUser",
    title: "Target user",
    type: "select",
    validationRules: { required: "Please select a target user" },
  },
];

export const UsersFields: FormFieldConfig<MyFormUsersData>[] = [
  {
    name: "name",
    title: "User Name",
    type: "input",
    validationRules: { required: "user name is required" },
    inputProps: { placeholder: "Enter user name" },
  },
  {
    name: "password",
    title: "password",
    type: "input",
    validationRules: { required: "password is required" },
    inputProps: { placeholder: "Enter password", type: "password" },
  },
];
