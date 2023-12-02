import HeroSection from "../../widgets/hero-section/HeroSection";
import Introduction from "../../widgets/introdnuction/Introduction";
import KeyPoint from "../../widgets/key-point/KeyPoint";
import useGetData from "../../hooks/getData/useGetData";
const Fade = require("react-reveal/Fade");
import { keyPointData } from "../../mock-data";
import { cashData, endPoint } from "../../constants";
import FaqContainer from "../../widgets/faqContainer/FaqContainer";

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
      <FaqContainer />
    </>
  );
};

export default Home;
