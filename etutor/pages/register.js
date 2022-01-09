import {
  BsFillPersonFill,
  BsMailbox2,
  BsFillLockFill,
  BsKeyFill,
} from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import {FaChalkboardTeacher} from "react-icons/fa"
import ImageRegister from "../public/images/signup_signin/signup.png";
import { auto } from "@popperjs/core";
export default function register() {
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
                      <div className="col-md-10 col-lg-6 col-xl-7 order-1 order-lg-2">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Đăng ký
                        </p>

                        <form className="mx-1 mx-md-5">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <BsFillPersonFill
                              size={28}
                              style={{ marginRight: "10px" }}
                            />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Họ tên"
                              />
                              {/* <label className="form-label" htmlFor="form3Example1c">Your Name</label> */}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <IoMailSharp
                              size={28}
                              style={{ marginRight: "10px" }}
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
                              style={{ marginRight: "10px" }}
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

                          <div className="d-flex flex-row align-items-center mb-4">
                            <BsKeyFill size={28} style={{ marginRight: "10px" }} />
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control"
                                placeholder="Nhập lại mật khẩu"
                              />
                              {/* <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label> */}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            
                            <div className="input-group mb-3 flex-fill mb-0">
                            <FaChalkboardTeacher size={28} style={{ marginRight: "10px", marginTop: 'auto', marginBottom: 'auto' }} />
                              <select
                                className="form-select"//custom-select
                                id="inputGroupSelect01"
                              >
                                <option selected>Bạn là...</option>
                                <option value="1">Học sinh</option>
                                <option value="2">Gia sư</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-5">
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3"
                            >
                              Đã có tài khoản?{" "}
                              <a href="http://localhost:3000/login">
                                Đăng nhập ngay!
                              </a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                            >
                              Đăng ký
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-2 order-lg-1">
                        <img
                          src={ImageRegister.src}
                          className="img-fluid"
                          alt="Sample image"
                        />
                        {/* <a href='https://pngtree.com/so/cartoon'>cartoon png from pngtree.com/</a> */}
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
