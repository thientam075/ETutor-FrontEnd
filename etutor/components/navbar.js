import "@popperjs/core";
import { BsSearch } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex row">
        <div className="col d-flex">
          {/* <div className="navbar-brand"><img src = "/logoEtutor.png" className="logo"></img></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/rankTutor">
                  Bảng xếp hạng
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Trợ giúp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <form className="d-flex" action="#" method="post">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Tìm kiếm gia sư"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <BsSearch/>
            </button>
          </form>
        </div>

        <div className="col d-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tin nhắn
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tên người dùng
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Trang cá nhân
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something esle
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
