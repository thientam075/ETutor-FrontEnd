import "@popperjs/core";
import { BsSearch } from "react-icons/bs";
import {useState} from 'react';
import { useRouter } from "next/router";
export default function Navbar() {
  const [name, setName] = useState(null);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex row">
        <div className="col d-flex">
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
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Tìm kiếm gia sư"
              aria-label="Search"
              onChange={(e) => setName(e.target.value)}
            />
            <a className="btn btn-outline-success" href={`/searchTutor?name=${name}`}>
              <BsSearch/>
            </a>
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
