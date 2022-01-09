import { EditorState } from "draft-js";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Navbar from "../components/navbar";
import dynamic from "next/dynamic";
import { useForm, Controller } from "react-hook-form";
import { API } from "../configs";
export default function PostAdvertise() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const optionsArray = [
    { key: "2", label: "Thứ 2" },
    { key: "3", label: "Thứ 3" },
    { key: "4", label: "Thứ 4" },
    { key: "5", label: "Thứ 5" },
    { key: "6", label: "Thứ 6" },
    { key: "7", label: "Thứ 7" },
    { key: "8", label: "Chủ nhật" },
  ];
  const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
    { ssr: false }
  );
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    fetchData(data);
  };
  const fetchData = async ({ subject, cost, time, profile }) => {
    await fetch(API.TinQuangBa.CREATE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          Subject: subject,
          Cost: cost,
          Time: time,
          Profile: profile,
        },
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Thanh cong: ", result);
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      {console.log("selected2222", watch("time"))}
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h4>Thông tin quảng bá:</h4>
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
                          Môn học
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
                      
                      <div className="form-group row mt-5">
                        <div className="offset-4 col-8">
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
