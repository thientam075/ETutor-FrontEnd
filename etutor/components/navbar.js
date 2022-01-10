import "@popperjs/core";
import { BsSearch } from "react-icons/bs";
import { useState, useContext } from 'react';
import { useRouter } from "next/router";
import { useAppSelector, AppContext } from '../context';
import { Actions } from "../context/action";

export default function Navbar() {
  const [name, setName] = useState(null);
  const user = useAppSelector((state) => state.auth.user);

  const isAdmin = user.TypeAccount === 0;
  const isTeacher = user.TypeAccount === 2;

  const router = useRouter();
  const { setAction } = useContext(AppContext);

  const onLogOut = () => {
    setAction(Actions.LOG_OUT);
    router.replace('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex row">
        <div className="col d-flex">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!isAdmin && (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Trang chủ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/rankTutor">
                      Bảng xếp hạng
                    </a>
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/listAccount">
                      Danh sách tài khoản
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/listReport">
                      Danh sách report
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item">
                <a className="nav-link">Trợ giúp</a>
              </li>
            </ul>
          </div>
        </div>

        {!isAdmin && (
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
        )}

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
                href="/profile"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.Fullname}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {!isAdmin &&
                  <li>
                    <a className="dropdown-item" href="/profile">
                      Trang cá nhân
                    </a>
                  </li>
                }
                {isTeacher &&
                  <li>
                    <a className="dropdown-item" href="#">
                      Thông tin quảng bá
                    </a>
                  </li>
                }
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={onLogOut}>
                    Đăng xuất
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
