import styles from "./home.module.css";
import TamImg from "../../public/home/Tam.jpg";
import ThanhImg from "../../public/home/Thanh.jpg";
import ThienImg from "../../public/home/Thien.jpg";
import ThinhImg from "../../public/home/Thinh.jpg";
const Team = () => {
  return (
    <>
      {/* Team */}
      <section className={`${styles[`page-section`]}`} id="team" style={{paddingTop: '0px'}}>
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`text-center`]}`}>
            <h2
              className={`${styles[`section-heading`]} ${
                styles[`text-uppercase`]
              }`}
            >
              Nhóm phát triển
            </h2>
            <h3
              className={`${styles[`section-subheading`]} ${
                styles[`text-muted`]
              }`}
            >
              Chúng tôi đang cố gắng ngày càng phát triển ứng dụng tốt hơn.
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
        </div>
      </section>
    </>
  );
};

export default Team;
