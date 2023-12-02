import React from "react";
import HeroSection from "../../widgets/hero-section/HeroSection";
import Introduction from "../../widgets/introdnuction/Introduction";
import KeyPoint from "../../widgets/key-point/KeyPoint";
import FAQ from "../../widgets/faq/Faq";
import useGetData from "../../hooks/getData/useGetData";
import Fade from "react-reveal/Fade";
import { keyPointData } from "../../mock-data";
import { cashData, endPoint } from "../../constants";

const Home = () => {
  const { data } = useGetData(
    cashData.websiteInformation,
    endPoint.websiteUserByid
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
          {keyPointData?.map((item, index) => {
            return <KeyPoint {...item} key={index + 1} />;
          })}
        </Fade>
      </section>
      <FAQ />
    </>
  );
};

export default Home;
