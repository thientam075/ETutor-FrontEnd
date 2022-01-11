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
const Home = () => {
  return (
    <>
      <Navbar />
      <header className={`${styles[`masthead`]}`}>
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`masthead-subheading`]}`}>
            Chào mừng bạn đến với ETutor
          </div>
          <div
            className={`${styles[`masthead-heading`]} ${
              styles[`text-uppercase`]
            }`}
          >
            Sứ mệnh của chúng tôi là kết nối kiến thức
          </div>
          <a
            className={`${styles[`btn`]} ${styles[`btn-primary`]} ${
              styles[`btn-xl`]
            } ${styles[`text-uppercase`]}`}
            href="#services"
          >
            Tham gia ngay
          </a>
        </div>
      </header> 
      <Intro/>
      <Team/>
    </>
  );
};

export default withAuth(Home);
