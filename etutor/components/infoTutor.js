export default function InfoTutor({
  name,
  description,
  star,
  total_rating,
  subjects,
  Times,
  email,
  handleShowReportDialog,
  handleShowRateDialog
}) {
  const marginInfo = {
    marginLeft: "12.813rem",
  };
  return (
    <>
      <div className="d-flex justify-content-around m-3">
        <div className="d-flex">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
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
          <button type="button" className="btn btn-primary m-1">
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
      <div style={marginInfo} className="mt-2">
        <div>
          <h6>Môn học</h6>
          <ul>
            {subjects.length !== 0
              ? subjects.map((subject, index) => {
                  return <li key={index}>{subject}</li>;
                })
              : "Hiện tại chưa có mô tả về môn học nào"}
          </ul>
        </div>
      </div>
      <div style={marginInfo} className="mt-2 row">
        {Times.length !== 0
          ? Times.map((Time, index) => {
              return (
                <div className="card col-3" style={{ width: "18rem", marginRight: "10px" }} key={index}>
                  <div className="card-body">
                    <h5 className="card-title">{Time.value}</h5>
                    <p className="card-text">{Time.price}</p>
                    <p className="card-text">{Time.subject}</p>
                  </div>
                </div>
              );
            })
          : "Hiện tại không có lịch học"}
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
