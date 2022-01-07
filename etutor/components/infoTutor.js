export default function InfoTutor({ name, star, total_rating }) {
  return (
    <>
      <div className="d-flex justify-content-md-around m-4">
        <div>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            className="avatarDetail"
          ></img>
          <h6>{name}</h6>
          <div>
            <div>Lượt đánh giá: {star}</div>
            <div>
              {star} sao trên {total_rating} lượt đánh giá
            </div>
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-primary">
            Nhắn tin
          </button>
          <button type="button" className="btn btn-danger">
            Báo cáo
          </button>
        </div>
      </div>
    </>
  );
}
