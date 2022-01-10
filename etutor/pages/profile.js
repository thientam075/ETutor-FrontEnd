import { useEffect, useState, useContext } from "react";
import Loader from "react-loader-spinner";

import MyToast from "../components/myToast";
import Navbar from "../components/navbar";

import { useAppSelector, AppContext } from '../context';
import { Actions } from '../context/action';
import withAuth from "../hoc/withAuth";
import { NguoiDungService } from "../serviceAPI/NguoiDungService";

function Profile() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorFullname, setErrorFullname] = useState(false);
  const [errorAvatar, setErrorAvatar] = useState(false);
  const [contentToast, setContentToast] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseToast = () => {
    setShowToast(false);
  }

  const marginInfo = {
    marginLeft: "9rem",
    marginRight: "9rem"
  };

  const {jwt, user} = useAppSelector((state) => state.auth);
  const { setAction } = useContext(AppContext);

  const changeInfo = async () => {
    setIsLoading(true);
    if(fullname !== ""){
      const res = await NguoiDungService.updateInfo(jwt, user, fullname);
      
      if(res){
        const userRes = await res.json();
        setAction(Actions.UPDATE_AUTH, {jwt: jwt, user: userRes});
        setContentToast("Cập nhật thành công");
        setShowToast(true);
        setErrorFullname(false);
        setIsLoaded(false);
      }else {
        setContentToast("Đã xảy ra lỗi");
        setShowToast(true);
      }
    }
    else{
      setErrorFullname(true);
    }
    setIsLoading(false);
    
  };

  const changeAvatar = async () => {
    setIsLoading(true);
    if(avatar){
      const data = new FormData();

      data.append('file', avatar);
      data.append('upload_preset', 'up-avatar-etutor');

      const resUpload = await fetch('https://api.cloudinary.com/v1_1/dangthanh/image/upload', {
        method: 'POST',
        body: data
      }).then(result => result.json());

      if(resUpload.secure_url){
        const res = await NguoiDungService.updateAvatar(jwt, user, resUpload.secure_url);
        if(res){
          const userRes = await res.json();
          setAction(Actions.UPDATE_AUTH, {jwt: jwt, user: userRes});
          setContentToast("Cập nhật thành công");
          setShowToast(true);
          setAvatar(null);
          setErrorAvatar(false);
          setIsLoaded(false);
        }else {
          setContentToast("Đã xảy ra lỗi");
          setShowToast(true);
        }
      } else {
        setContentToast("Đã xảy ra lỗi");
        setShowToast(true);
      }
    }
    else{
      setErrorAvatar(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setFullname(user.Fullname);
    setEmail(user.email);
    setIsLoaded(true);
  },[isLoaded])

  return (
    <>
      <Navbar></Navbar>
      {isLoading && (
        <div className="container">
          <div className="row justify-content-center align-items-center ">
            <Loader className="col-sm-2"
              type="ThreeDots"
              color="#00BFFF"
              height={75}
              width={75}
              timeout={0}
            />
          </div>
        </div>)
      }
      <MyToast content={contentToast} show={showToast} handleClose={handleCloseToast}></MyToast>
      <div className="d-flex justify-content-around m-3">
        <div className="d-flex">
          <img
            src= {user.Avatar ? user.Avatar : "https://res.cloudinary.com/dangthanh/image/upload/v1641804706/AvatarEtutor/user_ryrffo.png"}
            className="avatarDetail"
            placeholder=""
          ></img>
          <div className="m-4 ps-2">
            <h5>{user.TypeAccount === 1 ? "Học sinh" : "Gia sư"}</h5>
          </div>
        </div>
       
        <div className="d-flex align-items-center">
        {user.TypeAccount === 1 ? <></> :
          <button type="button" className="btn btn-primary m-1">
            Thông tin quảng bá
          </button>
        }
        </div>
        
      </div>
      
      
      <div className="container">
        <div style={marginInfo} className="row justify-content-around">
          <h2>Thông tin cơ bản</h2>
        </div>
      
        <form>
          <div style={marginInfo} className="form-group row justify-content-around mb-3 mt-3">
            {errorFullname ? <p style={{color: "red"}}>Họ tên không được rỗng</p> : <></>}
            <label htmlFor="fullname" class="col-sm-2 col-form-label"><h6>Họ tên:</h6></label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="fullname" value={fullname} placeholder="Họ và tên" onChange={(e) => {
                setFullname(e.target.value);
              }}></input>
            </div>
          </div>

          <div style={marginInfo} className="form-group row justify-content-around mb-3 mt-3">
            <label htmlFor="email" class="col-sm-2 col-form-label"><h6>Email:</h6></label>
            <div class="col-sm-10">
              <input type="email" className="form-control" id="email" value={email} placeholder="Địa chỉ email" readOnly></input>
            </div>
          </div>
              
          <div className="form-group row justify-content-around mb-3 mt-3">
            <button type="button" className="btn btn-primary col-sm-2" onClick={changeInfo} disabled={isLoading}>Cập nhật</button>
          </div>
        </form>

        <div style={marginInfo} className="row justify-content-around">
          <h2>Cập nhật ảnh đại diện</h2>
        </div>

        <form >
          <div style={marginInfo} className="form-group row justify-content-around mb-3 mt-3">
            {errorAvatar ? <p style={{color: "red"}}>Chưa chọn hình ảnh</p> : <></>}  
            <div class="col-sm-12">
              <input type="file" className="form-control" id="avatar" accept="image/*" value={avatar ? avatar.filemane : ""} onChange={(e) => {
                setAvatar(e.target.files[0]);
              }}></input>
            </div>
          </div>

          <div className="form-group row justify-content-around mb-3 mt-3">
            <button type="button" className="btn btn-primary col-sm-2" onClick={changeAvatar} disabled={isLoading}>Cập nhật</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default withAuth(Profile);