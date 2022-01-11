export default function ShortInfo({
  id,
  index,
  name,
  avatar,
  star,
  total_rating,
}) {
  return (
    <div className="row row-cols-auto">
      <div className="col-3 align-content-center text-center mt-3">
        {"#" + index}
      </div>
      <div className="col-1">
        <img
          src={
            avatar
              ? avatar
              : "https://res.cloudinary.com/dangthanh/image/upload/v1641804706/AvatarEtutor/user_ryrffo.png"
          }
          alt="Avatar"
          className="avatar"
        />
      </div>

      <div className="col-3 mt-3">
        <div>{name}</div>
      </div>
      <div className="col-3 mt-3">
        {Math.round(star * 100) / 100} sao trên {total_rating} lượt đánh giá
      </div>
      <div className="col">
        <a
          href={"/infoDetailTutors/" + id}
          className="btn btn-primary"
        >
          Xem Thêm
        </a>
      </div>
    </div>
  );
}
