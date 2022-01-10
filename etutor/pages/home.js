import Navbar from "../components/navbar";
import styles from "../components/home/home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className={`${styles[`masthead`]}`}>
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`masthead-subheading`]}`}>
            Welcome To Our Studio!
          </div>
          <div
            className={`${styles[`masthead-heading`]} ${
              styles[`text-uppercase`]
            }`}
          >
            It Nice To Meet You
          </div>
          <a
            className={`${styles[`btn`]} ${styles[`btn-primary`]} ${
              styles[`btn-xl`]
            } ${styles[`text-uppercase`]}`}
            href="#services"
          >
            Tell Me More
          </a>
        </div>
      </header>


      
    </>
  );
}
