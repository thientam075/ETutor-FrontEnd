import { useRouter } from "next/router";
import GioiThieuImg from "../../public/home/gioithieu.png";
import DinhHuongImg from "../../public/home/tamnhin.png";
import UuDiemImg from "../../public/home/uudiem.png";
import styles from "./home.module.css";
const Intro = () => {
  const router = useRouter();
  const BXH = () => {
    router.replace('/rankTutor');
  }
  return (
    <>
      {/* Services */}
      <section
        className={`${styles[`page-section`]}`}
        id="services"
        style={{ backgroundColor: "gainsboro" }}
      >
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`text-center`]}`}>
            <h2
              className={`${styles[`section-heading`]} ${styles[`text-uppercase`]
              }`}
            >
              SẢN PHẨM
            </h2>
            <h3
              className={`${styles[`section-subheading`]} ${
                styles[`text-muted`]
              }`}
            >
              Giới thiệu, ưu điểm và tầm nhìn của trang web.
            </h3>
          </div>
          <div className={`${styles[`row`]}`}>
            <div className={`${styles[`col-lg-4`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src={GioiThieuImg.src}
                  alt="..."
                />
                <h4>Giới thiệu</h4>
                <p className={`${styles[`text-muted`]}`}>
                  Trang web là nền tảng giúp mọi học sinh, sinh viên có thể tìm
                  thấy được gia sư như mong muốn của bản thân
                </p>
                
              </div>
            </div>
            <div className={`${styles[`col-lg-4`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src={UuDiemImg.src}
                  alt="..."
                />
                <h4>Ưu điểm</h4>
                <p className={`${styles[`text-muted`]}`}>
                  Dễ sử dụng, đăng ký tài khoản dễ dàng và đặc biệt là hoàn toàn
                  miễn phí
                </p>
                
              </div>
            </div>
            <div className={`${styles[`col-lg-4`]}`}>
              <div className={`${styles[`team-member`]}`}>
                <img
                  className={`${styles[`mx-auto`]} ${styles[`rounded-circle`]}`}
                  src={DinhHuongImg.src}
                  alt="..."
                />
                <h4>Tầm nhìn</h4>
                <p className={`${styles[`text-muted`]}`}>
                  Trong bối cảnh tình hình dịch bệnh còn diễn biến rất phức tạp,
                  việc tìm kiếm 1 gia sư online thật sự cần thiết
                </p>
                
              </div>
            </div>
          </div>
          <div className={`${styles[`text-center`]}`}>
            <div
              className={`${styles[`btn`]} ${styles[`btn-primary`]} ${
                styles[`btn-xl`]
              } ${styles[`text-uppercase`]}`}
          onClick={BXH}    
            >
              Tìm gia sư ngay
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
    </>
  );
};

export default Intro;
