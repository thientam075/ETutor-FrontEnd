import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import MyToast from "../components/myToast";
import Navbar from "../components/navbar";
import { useAppSelector } from "../context";
import { TinQuangBaService } from "../serviceAPI/TinQuangBaService";
import withAuth from "../hoc/withAuth";
function PostAdvertise() {
  const [showToast, setShowToast] = useState(false);
  const { jwt, user } = useAppSelector((state) => state.auth);
  const [contentToast, setContentToast] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const optionsArray = [
    { key: "2", label: "Thứ 2" },
    { key: "3", label: "Thứ 3" },
    { key: "4", label: "Thứ 4" },
    { key: "5", label: "Thứ 5" },
    { key: "6", label: "Thứ 6" },
    { key: "7", label: "Thứ 7" },
    { key: "8", label: "Chủ nhật" },
  ];
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const handleShowToast = (content) => {
    setContentToast(content);
    setShowToast(true);
  };
  const handleCloseToast = () => {
    setShowToast(false);
  };
  const onSubmit = (data) => {
    fetchData(user.id, data);
  };
  const fetchData = async (teacherId, data) => {
    setIsLoading(true);
    const res = await TinQuangBaService.postAdvertise(teacherId, data);
    if (res && res.ok) {
      handleShowToast("Đăng tin thành công");
    } else {
      handleShowToast("Đã xảy ra lỗi");
    }
    setIsLoading(false);
  };
  return (
    <>
      <Navbar />
      <MyToast
        content={contentToast}
        show={showToast}
        handleClose={handleCloseToast}
      ></MyToast>
      <div className="container">
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={75}
            width={75}
            timeout={0}
          />
        )}
        <div className="row">
          <div className="">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <h2>THÔNG TIN QUẢNG BÁ</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group row mt-5">
                        <label
                          htmlFor="subjects"
                          className="col-4 col-form-label"
                        >
                          Môn học:
                        </label>
                        <div className="col-8">
                          <input
                            id="subjects"
                            name="subjects"
                            placeholder="Môn học(vd: Toán, Lý...)"
                            className="form-control here"
                            type="text"
                            {...register("subject", {
                              required: "*Vui lòng nhập các môn học",
                            })}
                          />
                        </div>
                      </div>
                      {errors.subject && (
                        <div
                          className="mb-4 d-flex justify-content-center"
                          style={{ color: "#fa3434", fontSize: "12px" }}
                        >
                          {errors.subject && errors.subject.message}
                        </div>
                      )}
                      <div className="form-group row mt-5">
                        <label htmlFor="cost" className="col-4 col-form-label">
                          Chi phí(nghìn/giờ):
                        </label>
                        <div className="col-8">
                          <input
                            id="cost"
                            name="cost"
                            placeholder="Chi phí(vd:100)"
                            className="form-control here"
                            type="number"
                            {...register("cost", {
                              required:
                                "*Vui lòng nhập chi phí mỗi giờ học(vd: 100)",
                            })}
                          />
                        </div>
                      </div>
                      {errors.cost && (
                        <div
                          className="mb-4 d-flex justify-content-center"
                          style={{ color: "#fa3434", fontSize: "12px" }}
                        >
                          {errors.cost && errors.cost.message}
                        </div>
                      )}
                      <div className="form-group row mt-5">
                        <label htmlFor="time" className="col-4 col-form-label">
                          Thời gian dạy:
                        </label>
                        <div className="col-8">
                          <Controller
                            name="time"
                            defaultValue={false}
                            control={control}
                            rules={{ required: "Vui lòng chọn thời gian" }}
                            render={({ field }) => (
                              <DropdownMultiselect
                                {...field}
                                options={optionsArray}
                                name="time"
                                handleOnChange={(selected) => {
                                  if (selected.length !== 0) {
                                    errors.time = false;
                                  }
                                  setValue("time", selected.toString());
                                }}
                              />
                            )}
                          />
                        </div>
                      </div>
                      {errors.time &&
                        (watch("time") !== "" ||
                          getValues("time").length === 0) && (
                          <div
                            className="mb-4 d-flex justify-content-center"
                            style={{ color: "#fa3434", fontSize: "12px" }}
                          >
                            {errors.time && errors.time.message}
                          </div>
                        )}
                      <div className="form-group row mt-5">
                        <label
                          htmlFor="profile"
                          className="col-4 col-form-label"
                        >
                          Thông tin quảng bá(kinh nghiệm, thành tích...):
                        </label>
                        <div className="col-8">
                          <textarea
                            id="profile"
                            name="profile"
                            cols="40"
                            rows="4"
                            className="form-control"
                            {...register("profile", {
                              required: "*Vui lòng nhập thông tin quảng bá",
                            })}
                          ></textarea>
                        </div>
                      </div>
                      {errors.profile && (
                        <div
                          className="mb-4 d-flex justify-content-center"
                          style={{ color: "#fa3434", fontSize: "12px" }}
                        >
                          {errors.profile && errors.profile.message}
                        </div>
                      )}
                      <div className="form-group row mt-5">
                        <div className="d-flex justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onSubmit={handleSubmit(onSubmit)}
                          >
                            Đăng thông tin quảng bá
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(PostAdvertise);
