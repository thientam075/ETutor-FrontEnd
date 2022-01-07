export default function ShortInfo({ index, name, avatar, star, total_rating }) {
  return (
    <div className="row row-cols-auto">
      <div className="col-3 align-content-center text-center mt-3">{"#" + index}</div>
      <div className="col-1">
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>

      <div className="col-3">
        <div>{name}</div>
        <div>Lượt đánh giá: {star}</div>
      </div>
      <div className="col">
        {star} sao trên {total_rating} lượt đánh giá
      </div>
      <div className="col"></div>
    </div>
  );
}
