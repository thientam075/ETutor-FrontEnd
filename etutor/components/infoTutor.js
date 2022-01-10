
import {useEffect} from 'react';
import { useRouter } from "next/router";


export default function InfoTutor({
  id,
  name,
  description,
  star,
  total_rating,
  subjects,
  Times,
  email,
  avatar,
  cost,
  handleShowReportDialog,
  handleShowRateDialog
}) {

  const router = useRouter();

  const marginInfo = {
    marginLeft: "12.813rem",
  };
  useEffect(() => {
    if(subjects){
      subjects = subjects.split(" ");
    }
  }) 
  const TranferTime = ({times}) => {
    const res = times.split(",");
    return res.map((time, i) => {
      let value = "Thứ";
      if(time === "CN"){
        value = "Chủ nhật";
      }else{
        value = value + " " + time;
      }
      return (<li key={i}>
        {value}
      </li>);
    })
  }
  return (
    <>
      <div className="d-flex justify-content-around m-3">
        <div className="d-flex">
          <img
            src={avatar ? avatar :"https://res.cloudinary.com/dangthanh/image/upload/v1641804706/AvatarEtutor/user_ryrffo.png"}
            className="avatarDetail"
          ></img>
          <div className="m-4 ps-2">
            <h5>{name}</h5>
            <div>
              <div>Lượt đánh giá: {star}</div>
              <div>
                {star} sao trên {total_rating} lượt đánh giá
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <button type="button" className="btn btn-primary m-1" onClick={() => {
            router.push("/chats/" + id);
          }}>
            Nhắn tin
          </button>
          <button type="button" className="btn btn-warning m-1" onClick={handleShowRateDialog}>
            Đánh giá
          </button>
          <button type="button" className="btn btn-danger m-1" onClick={handleShowReportDialog}>
            Báo cáo
          </button>
        </div>
      </div>
      <div style={marginInfo} className="mt-2">
        <div>
          <h6>Giới thiệu</h6>
          <p>{description ? description : "Hiện tại chưa có mô tả nào"}</p>
        </div>
      </div>
      <div style={marginInfo} className="mt-2 d-flex">
        <div className="me-3">
          <h6>Môn học</h6>
          {subjects ? <p>{subjects}</p> : <p>Hiện tại chưa có môn học nào</p>}
        </div>
        <div className = "ms-5">
          <h6>Học phí</h6>
          {cost ? <p>{cost + "VND"}</p> : <p>Hiện tại gia sư chưa cập nhật học phí nào</p>}
        </div>
      </div>
      <div style={marginInfo} className="mt-2 row">
          {Times ? (
            <div className= "p-0">
            <h6>Thời gian</h6>
            <ul>
            <TranferTime times = {Times}/>
          </ul>
          </div>) : "Hiện tại gia sư chưa cung cấp thời gian học"}
      </div>
      <div style={marginInfo} className="mt-2">
        <div>
          <h6>Liên hệ</h6>
          <ul>
            <li>Email : {email ? email : "Không có email"}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
