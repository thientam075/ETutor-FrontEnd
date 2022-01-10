import { useForm } from "react-hook-form";
import { BsFillLockFill, BsFillPersonFill, BsKeyFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { API } from '../configs';
import ImageRegister from "../public/images/signup_signin/signup.png";
import { useContext, useState } from "react";
import { AppContext } from "../context";
import { Actions } from "../context/action";
import { ToastHelper } from '../utils/Toast';
import { useRouter } from "next/router";
import Loader from "react-loader-spinner";
import { NguoiDungService } from "../serviceAPI/NguoiDungService";

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetchData(data);
  };

  const router = useRouter();
  const { setAction } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async ({ fullname, email, password, role }) => {
    setIsLoading(true);
    try {
      const response = await NguoiDungService.register(fullname, email, password, role);
      const result = await response.json();
      if (response.status === 200) {
        setAction(Actions.UPDATE_AUTH, result);
        router.replace('/');
      } else {
        ToastHelper.error(result.error.message);
      }
    } catch (e) {}
    setIsLoading(false);
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="d-flex flex-column justify-content-center align-items-center h-100 pt-4">
            {isLoading && (
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={75}
                width={75}
                timeout={0}
              />
            )}
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-2">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Đăng ký
                      </p>

                      <form
                        className="mx-1 mx-md-5"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="d-flex flex-row align-items-center ">
                          <BsFillPersonFill
                            size={28}
                            style={{ marginRight: 10 }}
                          />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Họ tên"
                              {...register("fullname", {
                                required: "*Vui lòng nhập họ tên",
                                minLength: {
                                  value: 5,
                                  message: "*Vui lòng nhập ít nhất 5 ký tự",
                                },
                              })}
                            />
                          </div>
                        </div>
                        {errors.fullname && (
                          <div
                            className="mb-4 d-flex justify-content-center"
                            style={{ color: "#fa3434", fontSize: "12px" }}
                          >
                            {errors.fullname && errors.fullname.message}
                          </div>
                        )}

                        <div className="d-flex flex-row align-items-center mt-4">
                          <IoMailSharp size={28} style={{ marginRight: 10 }} />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Email"
                              {...register("email", {
                                required: "*Vui lòng nhập email",
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message:
                                    "*Vui lòng nhập đúng định dạng email",
                                },
                              })}
                            />
                          </div>
                        </div>
                        {errors.email && (
                          <div
                            className="mb-4 d-flex justify-content-center"
                            style={{ color: "#fa3434", fontSize: "12px" }}
                          >
                            {errors.email && errors.email.message}
                          </div>
                        )}

                        <div className="d-flex flex-row align-items-center mt-4">
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
                              {...register("password", {
                                required: "*Vui lòng nhập mật khẩu",
                                minLength: {
                                  value: 5,
                                  message: "*Vui lòng nhập ít nhất 5 ký tự",
                                },
                              })}
                            />
                          </div>
                        </div>
                        {errors.password && (
                          <div
                            className="mb-4 d-flex justify-content-center"
                            style={{ color: "#fa3434", fontSize: "12px" }}
                          >
                            {errors.password && errors.password.message}
                          </div>
                        )}

                        {/* <div className="d-flex flex-row align-items-center mb-4">
                          <BsKeyFill size={28} style={{ marginRight: 10 }} />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Nhập lại mật khẩu"
                            />
                          </div>
                        </div> */}

                        <div className="d-flex flex-row align-items-center mt-4">
                          <div className="input-group flex-fill mb-0">
                            <FaChalkboardTeacher
                              size={28}
                              style={{
                                marginRight: 10,
                                marginTop: "auto",
                                marginBottom: "auto",
                              }}
                            />
                            <select
                              className="form-select" //custom-select
                              id="inputGroupSelect01"
                              {...register("role", {
                                required: "*Vui lòng chọn nghề nghiệp",
                              })}
                            >
                              <option value="" disabled selected>
                                Bạn là...
                              </option>
                              <option value="1">Học sinh</option>
                              <option value="2">Gia sư</option>
                            </select>
                          </div>
                          <br />
                        </div>
                        {errors.role && (
                          <div
                            className="mb-4 d-flex justify-content-center"
                            style={{ color: "#fa3434", fontSize: "12px" }}
                          >
                            {errors.role && errors.role.message}
                          </div>
                        )}

                        <div className="form-check d-flex justify-content-center mb-5 mt-5">
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
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onSubmit={handleSubmit(onSubmit)}
                          >
                            Đăng ký
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-1">
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
    </>
  );
}
