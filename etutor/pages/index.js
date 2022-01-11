import withAuth from "../hoc/withAuth";
import Navbar from "../components/navbar";
import styles from "../components/home/home.module.css";
import TamImg from "../public/home/Tam.jpg";
import ThanhImg from "../public/home/Thanh.jpg";
import ThienImg from "../public/home/Thien.jpg";
import ThinhImg from "../public/home/Thinh.jpg";
import { BsSearch } from "react-icons/bs";
import Intro from "../components/home/intro";
import Team from "../components/home/team";
import Header from "../components/home/header";
import Contact from "../components/home/contact";
import Footer from "../components/home/footer";
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
