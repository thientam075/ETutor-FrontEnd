import ShortInfo from "./shortinfo";

export default function ListGroup({ typeList, listData, error, loading }) {
  const ErrorMessage =
    typeList === "Search"
      ? "Không tìm thấy gia sư phù hợp"
      : "Danh sách hiện đang cập nhật";

  return (
    <>
      {loading && listData && listData.length === 0 ? (
        <h5 className="text-center mt-3">{ErrorMessage}</h5>
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <h5 className="m-4">
              {typeList === "Search" ? "KẾT QUẢ TÌM KIẾM" : "BẢNG XẾP HẠNG"}
            </h5>
          </div>
          <ul className="list-group">
            {listData.map((data, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <ShortInfo
                    index={index + 1}
                    id={data.id}
                    name={data.fullname}
                    avatar={data.avatar}
                    star={data.star}
                    total_rating={data.total_rating}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
