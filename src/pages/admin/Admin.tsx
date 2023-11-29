// ... existing imports ...

import WebsiteForm from "../../components/form/Form";

const Admin: React.FC = () => {
  const submitForm = async (formData: any) => {
    console.log("formData", formData);
    try {
      const response = await fetch("http://localhost:3000/website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server response:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // useEffect(() => {
  //   const fetchWebsiteInfo = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/website");
  //       const data = await response.json();
  //       setWebsiteInfo(data);
  //     } catch (error) {
  //       console.error("Error fetching website info:", error);
  //     }
  //   };

  //   fetchWebsiteInfo();
  // }, []);

  return <WebsiteForm onSubmit={submitForm} />;
};

export default Admin;
