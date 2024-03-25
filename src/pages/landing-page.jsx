import { Box } from "@chakra-ui/react";
import Navbar from "../component/navbar";
import Header from "../component/header";
import Kegiatan from "../component/kegiatan";
import Langkah from "../component/langkah";
import CardCarousel from "../component/cardCarousel";
import CommentCarousel from "../component/commentCarousel";
import Cooperation from "../component/cooperation";
import Footer from "../component/footer";
import Cards from "../assets/psikolog";
import Comments from "../assets/comment";
import lambang from "../assets/img";

const LandingPage = () => {
  return (
    <>
      <Box position={"fixed"} w={"100%"} zIndex={999}>
        <Navbar />
      </Box>
      <Box pt={"7em"}>
        <Header />
      </Box>
      <Kegiatan />
      <Langkah />
      <CardCarousel cards={Cards}/>
      <CommentCarousel cards={Comments}/>
      <Cooperation image={lambang}/>
      <Footer/>
    </>
  );
};

export default LandingPage;
