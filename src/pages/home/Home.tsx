import React from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import Introduction from "../../components/introdnuction/Introduction";
import KeyPoint from "../../components/key-point/KeyPoint";
import FAQ from "../../components/faq/Faq";
import useGetData from "../../api/getData/useGetData";
import Fade from "react-reveal/Fade";

const Home = () => {
  const { data, isLoading, isError, refetch } = useGetData(
    "information-website",
    "website/user_by_id"
  );

  return (
    <>
      <HeroSection
        description={data?.data?.websiteDescription}
        name={data?.data?.websiteName}
      />
      <Introduction aiDescription={data?.data?.ai_description} />
      <section className="key-points">
        <Fade left>
          <KeyPoint
            icon="🚀"
            title="Innovative Solutions"
            description="Explore cutting-edge technology for your business needs."
          />
        </Fade>
        <Fade left>
          <KeyPoint
            icon="🌐"
            title="Global Reach"
            description="Connect with a worldwide audience through our scalable solutions."
          />
        </Fade>
        <Fade left>
          <KeyPoint
            icon="🌈"
            title="Creative Design"
            description="Immerse your audience with visually stunning and user-friendly interfaces."
          />
        </Fade>
      </section>
      <FAQ />
    </>
  );
};

export default Home;
