import withAuth from "../hoc/withAuth";
import Navbar from "../components/navbar";
import styles from "../components/home/home.module.css";
import TamImg from "../public/home/Tam.jpg";
import ThanhImg from "../public/home/Thanh.jpg";
import ThienImg from "../public/home/Thien.jpg";
import ThinhImg from "../public/home/Thinh.jpg";
import { BsSearch } from "react-icons/bs";
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
      
      {/* Team */}
      <section className={`${styles[`page-section bg-light`]}`} id="team">
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`text-center`]}`}>
            <h2 className={`${styles[`section-heading text-uppercase`]}`}>
              Nhóm phát triển
            </h2>
            <h3 className={`${styles[`section-subheading text-muted`]}`}>
              Chúng tôi đang cố gắng hoàn thiện sản phẩm ngày càng tốt hơn.
            </h3>
          </div>
          <div className={`${styles[`row`]}`}>
            <div className={`${styles[`col-lg-3`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src={TamImg.src}
                  alt="..."
                />
                <h4>Thiện Tâm</h4>
                <p className={`${styles[`text-muted`]}`}>Developer</p>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-twitter`]}`}></i>
                </a>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-facebook-f`]}`}></i>
                </a>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-linkedin-in`]}`}></i>
                </a>
              </div>
            </div>
            <div className={`${styles[`col-lg-3`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src={ThanhImg.src}
                  alt="..."
                />
                <h4>Minh Thành</h4>
                <p className={`${styles[`text-muted`]}`}>Developer</p>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-twitter`]}`}></i>
                </a>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-facebook-f`]}`}></i>
                </a>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-linkedin-in`]}`}></i>
                </a>
              </div>
            </div>
            <div className={`${styles[`col-lg-3`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src={ThienImg.src}
                  alt="..."
                />
                <h4>Huy Thiện</h4>
                <p className={`${styles[`text-muted`]}`}>Developer</p>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-twitter`]}`}></i>
                </a>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-facebook-f`]}`}></i>
                </a>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-linkedin-in`]}`}></i>
                </a>
              </div>
            </div>
            <div className={`${styles[`col-lg-3`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src={ThinhImg.src}
                  alt="..."
                />
                <h4>Hữu Thịnh</h4>
                <p className={`${styles[`text-muted`]}`}>Developer</p>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-twitter`]}`}></i>
                </a>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-facebook-f`]}`}></i>
                </a>
                <a
                  className={`${
                    styles[`btn btn-dark btn-social mx-2" href="#!`]
                  }`}
                >
                  <i className={`${styles[`fab fa-linkedin-in`]}`}></i>
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles[`row`]}`}>
            <div className={`${styles[`col-lg-8 mx-auto text-center`]}`}>
              <p className={`${styles[`large text-muted`]}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(Home);
