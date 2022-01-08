import {
  BsFillPersonFill,
  BsMailbox2,
  BsFillLockFill,
  BsKeyFill,
} from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import ImageRegister from "../public/images/signup_signin/signin.png";
export default function login() {
  return (
    <>
      <div className="main">
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-2 order-lg-2">
                        <img
                          src={ImageRegister.src}
                          className="img-fluid"
                          alt="Sample image"
                        />
                        {/* <a href='https://pngtree.com/so/cartoon'>cartoon png from pngtree.com/</a> */}
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 order-1 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Đăng nhập
                        </p>

                        <form className="mx-1 mx-md-5">
                      

                          <div className="d-flex flex-row align-items-center mb-4">
                            <IoMailSharp
                              size={28}
                              style={{ marginRight: 10 }}
                            />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control"
                                placeholder="Email"
                              />
                              {/* <label className="form-label" htmlFor="form3Example3c">Your Email</label> */}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <BsFillLockFill
                              size={28}
                              style={{ marginRight: 10 }}
                            />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control"
                                placeholder="Mật khẩu"
                              />
                              {/* <label className="form-label" htmlFor="form3Example4c">Password</label> */}
                            </div>
                          </div>

                        

                          <div className="form-check d-flex justify-content-center mb-5">
                            {/* <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            /> */}
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3"
                            >
                          
                          Chưa có tài khoản? <a href="http://localhost:3000/register">Đăng ký ngay!</a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                            >
                              Đăng nhập
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
