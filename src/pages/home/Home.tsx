import React from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import Introduction from "../../components/introdnuction/Introduction";
import KeyPoint from "../../components/key-point/KeyPoint";
import FAQ from "../../components/faq/Faq";
import useGetData from "../../api/getData/useGetData";
import { Cookies } from "react-cookie";

const Home = () => {
  const { data, isLoading, isError, refetch } = useGetData(
    "information-website",
    "website/user_by_id"
  );
  console.log("data information here", data?.data);

  const cookie = new Cookies();
  console.log("coockie", cookie?.get("user_id"));
  return (
    <>
      <HeroSection
        description={data?.data?.websiteDescription}
        name={data?.data?.websiteName}
      />
      <Introduction aiDescription={data?.data?.ai_description} />
      <section className="key-points">
        <KeyPoint
          icon="🚀"
          title="Innovative Solutions"
          description="Explore cutting-edge technology for your business needs."
        />
        <KeyPoint
          icon="🌐"
          title="Global Reach"
          description="Connect with a worldwide audience through our scalable solutions."
        />
        <KeyPoint
          icon="🌈"
          title="Creative Design"
          description="Immerse your audience with visually stunning and user-friendly interfaces."
        />
      </section>
      <FAQ />
    </>
  );
};

export default Home;
