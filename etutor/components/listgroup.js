import ShortInfo from "./shortinfo";

export default function ListGroup({ typeList, listData }) {
  const ErrorMessage =
    typeList === "Search"
      ? "Không tìm thấy gia sư phù hợp"
      : "Danh sách hiện đang cập nhật";
  return (
    <>
      <div className="d-flex justify-content-center">
        <h5 className="m-4">KẾT QUẢ TÌM KIẾM</h5>
      </div>
      <ul className="list-group">
        {listData.length !== 0
          ? listData.map((data, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <ShortInfo
                    index={index + 1}
                    name={data.name}
                    avatar={data.avatar}
                    star={data.star}
                    total_rating={data.total_rating}
                  />
                </li>
              );
            })
          : (<div className="d-flex justify-content-center">
        <h5 className="m-4">{ErrorMessage}</h5>
      </div>)}
      </ul>
      {listData.length !== 0 ? (
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center m-4"
        >
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
}
