import Contact from "../components/home/contact";
import Footer from "../components/home/footer";
import Header from "../components/home/header";
import Intro from "../components/home/intro";
import Team from "../components/home/team";
import Navbar from "../components/navbar";
import withAuth from "../hoc/withAuth";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <Intro/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default withAuth(Home);
