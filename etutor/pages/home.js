import Navbar from "../components/navbar";
import styles from "../components/home/home.module.css";

export default function Home() {
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



    </>
  );
}
