import { EditorState } from "draft-js";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Navbar from "../components/navbar";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
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
    { key: "CN", label: "Chủ nhật" },
  ];
  const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
    { ssr: false }
  );
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    fetchData(data);
  };
  const fetchData = async ({ fullname, email, password, role }) => {
    await fetch(API.USER.REGISTER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          Fullname: fullname,
          Email: email,
          Password: password,
          TypeAccount: role,
          IsBan: 0,
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
                    <form>
                      <div className="form-group row mb-5">
                        <label
                          htmlFor="username"
                          className="col-4 col-form-label"
                        >
                          Môn học
                        </label>
                        <div className="col-8">
                          <input
                            id="username"
                            name="username"
                            placeholder="Môn học"
                            className="form-control here"
                            required="required"
                            type="text"
                          />
                        </div>
                      </div>
                

                      <div className="form-group row mb-5">
                        <div className="offset-4 col-8">
                          <button
                            name="submit"
                            type="submit"
                            className="btn btn-primary"
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
