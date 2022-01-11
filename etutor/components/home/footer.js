import styles from "./home.module.css";
const Footer = () => {
  return (
    <>
    <footer className={`${styles[`footer`]} ${styles[`py-4`]}`} style={{backgroundColor: 'gainsboro'}}>
            <div className={`${styles[`container`]}`}>
                <div className={`${styles[`row`]} ${styles[`align-items-center`]}`}>
                    <div className={`${styles[`col-lg-4`]} ${styles[`text-lg-start`]}`}>Xây dựng và phát triển bởi 4T Team</div>
                    <div className={`${styles[`col-lg-4`]} ${styles[`my-3`]} ${styles[`my-lg-0`]}`}>
                        
                    </div>
                    <div className={`${styles[`col-lg-4`]} ${styles[`text-lg-end`]} `}>
                        <a className={`${styles[`link-dark`]} ${styles[`text-decoration-none`]} ${styles[`me-3`]}`} href="#!">11/2021</a>
                        <a className={`${styles[`link-dark`]} ${styles[`text-decoration-none`]}`} href="#!">MHHPM</a>
                    </div>
                </div>
            </div>
        </footer>
     
    </>
  );
};

export default Footer;
