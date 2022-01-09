import Navbar from "../components/navbar";


export default function Profile() {
  const marginInfo = {
    marginLeft: "9rem",
    marginRight: "9rem"
  };

  const changeInfo = () => {

  };

  const changePassword = () => {

  };

  return (
    <>
      <Navbar></Navbar>
      <div className="d-flex justify-content-around m-3">
        <div className="d-flex">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            className="avatarDetail"
          ></img>
        </div>
        <div className="d-flex align-items-center">
          <button type="button" className="btn btn-primary m-1">
            Thông tin quảng bá
          </button>
        </div>
      </div>
      
      
      <div className="container">
        <div style={marginInfo} className="row justify-content-around">
          <h2>Thông tin cơ bản</h2>
        </div>
      
        <form onSubmit={changeInfo}>
          <div style={marginInfo} className="form-group row justify-content-around mb-3 mt-3">
            <label for="fullname" class="col-sm-2 col-form-label"><h6>Họ tên:</h6></label>
            <div class="col-sm-10">
              <input type="text" className="form-control" id="fullname" ></input>
            </div>
          </div>

          <div style={marginInfo} className="form-group row justify-content-around mb-3 mt-3">
            <label for="email" class="col-sm-2 col-form-label"><h6>Email:</h6></label>
            <div class="col-sm-10">
              <input type="email" className="form-control" id="email" ></input>
            </div>
          </div>
              
          <div className="form-group row justify-content-around mb-3 mt-3">
            <button type="submit" className="btn btn-primary col-sm-2">Cập nhật</button>
          </div>
        </form>

        <div style={marginInfo} className="row justify-content-around">
          <h2>Cập nhật mật khẩu</h2>
        </div>

        <form onSubmit={changePassword}>
          <div style={marginInfo} className="form-group row justify-content-around mb-3 mt-3">
            <label for="password" class="col-sm-2 col-form-label"><h6>Mật khẩu cũ:</h6></label>
            <div class="col-sm-10">
              <input type="password" className="form-control" id="password" ></input>
            </div>
          </div>

          <div style={marginInfo} className="form-group row justify-content-around mb-3 mt-3">
            <label for="new-password" class="col-sm-2 col-form-label"><h6>Mật khẩu mới:</h6></label>
            <div class="col-sm-10">
              <input type="password" className="form-control" id="new-password" ></input>
            </div>
          </div>

          <div style={marginInfo} className="form-group row justify-content-around mb-3 mt-3">
            <label for="confirm-password" class="col-sm-2 col-form-label"><h6>Nhập lại mật khẩu mới:</h6></label>
            <div class="col-sm-10">
              <input type="password" className="form-control" id="confirm-password" ></input>
            </div>
          </div>

          <div className="form-group row justify-content-around mb-3 mt-3">
            <button type="submit" className="btn btn-primary col-sm-2">Cập nhật</button>
          </div>
        </form>
      </div>
    </>
  );
  
}