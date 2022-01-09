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
              : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          }
          alt="Avatar"
          className="avatar"
        />
      </div>

      <div className="col-3 mt-3">
        <div>{name}</div>
      </div>
      <div className="col-3 mt-3">
        {star} sao trên {total_rating} lượt đánh giá
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
