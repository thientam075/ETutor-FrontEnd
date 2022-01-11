import styles from "./home.module.css";
const Header = () => {
  return (
    <>
   
      <header className={`${styles[`masthead`]}`}>
        <div className={`${styles[`container`]}`}>
          <div className={`${styles[`masthead-subheading`]}`}>
            Chào mừng bạn đến với ETutor
          </div>
          <div
            className={`${styles[`masthead-heading`]} ${
              styles[`text-uppercase`]
            }`}
          style={{lineHeight: 'normal'}}
          >
            Sứ mệnh của chúng tôi là &quot;Kết nối kiến thức&quot;
          </div>
          <a
            className={`${styles[`btn`]} ${styles[`btn-primary`]} ${
              styles[`btn-xl`]
            } ${styles[`text-uppercase`]}`}
            href="#services"
          >
            Tìm hiểu ngay
          </a>
        </div>
      </header> 
    </>
  );
};

export default Header;
