import Banner from "./Banner";
import LatestUpdates from "./latestUpdates/LatestUpdates";
import NewsLetter from "./newsLetter/newsletter";
import Services from "./services/Services";
import TestimonialsSlider from "./testimonial/TestimonialsSlider";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <TestimonialsSlider></TestimonialsSlider>
      <LatestUpdates></LatestUpdates>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
