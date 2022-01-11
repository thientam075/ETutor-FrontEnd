import { useEffect, useState } from "react";
import { useAppSelector } from "../context";
import { DanhGiaService } from "../serviceAPI/DanhGiaService";
export default function Comments({ id,loaded }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { jwt, user } = useAppSelector((state) => state.auth);
  const [comments, setComments] = useState([]);
  const feactComment = async (id, jwt) => {
    await DanhGiaService.listComment(id, jwt).then((res) => {
      if (!res.ok) {
        setError(true);
      } else {
        res.json().then((result) => {
          if (result.rowsCount !== 0) {
            setComments(result.rows);
            setLoading(true);
          }
        });
      }
    });
  };
  useEffect(() => {
    feactComment(id, jwt);
  }, [loading,loaded]);
  return (
    <>
      <h6 className="mb-3" style={{ marginLeft: "12.813rem" }}>Bình luận</h6>
      {comments.map((comment, index) => {
        return (
          <div className="mt-2 mb-3" style={{ marginLeft: "12.813rem" }} key={index}>
            <div className="row">
              <div className="col-1">
                <img
                  src={
                    comment.avatar
                      ? comment.avatar
                      : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  }
                  alt="Avatar"
                  className="avatar"
                />
              </div>

              <div className="col-3 mt-3">
                <div>{comment.fullname}</div>
              </div>
              <div className="col-3 mt-3">{comment.comment}</div>
              <div className="col mt-3">{comment.star} Sao</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
