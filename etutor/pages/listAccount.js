import Navbar from "../components/navbar";
import { BsSearch } from "react-icons/bs";

const ThCenter = (props) => <th {...props} class="text-center bg-light" />
const TdCenter = (props) => <td {...props} class="text-center" />

const ListAccount = () => {

  const fields = [
    'UserId',
    'Tên gia sư',
    'Email',
    'Số điện thoại',
    'Số tiền trong ví',
    '',
  ];

  const accounts = [
    {
      id: 1,
      name: 'Thinh',
      email: 'email@gmail.com',
      phone: '0123456789',
      fund: 12345,
      isBan: false,
    }, 
    {
      id: 2,
      name: 'Thinh',
      email: 'email@gmail.com',
      phone: '0123456789',
      fund: 12345,
      isBan: true,
    },
    {
      id: 3,
      name: 'Thinh',
      email: 'email@gmail.com',
      phone: '0123456789',
      fund: 12345,
      isBan: false,
    }, 
    {
      id: 4,
      name: 'Thinh',
      email: 'email@gmail.com',
      phone: '0123456789',
      fund: 12345,
      isBan: true,
    },
    {
      id: 5,
      name: 'Thinh',
      email: 'email@gmail.com',
      phone: '0123456789',
      fund: 12345,
      isBan: false,
    },
  ]

  return (
    <>
      <Navbar />
      <div class="d-flex flex-column align-items-center pt-4">
        <h4 class="text-center">Bảng danh sách các tài khoản người dùng</h4>
        <div style={styles.separated} class="mx-auto bg-dark mt-4"/>
        <form className="d-flex mt-4" action="#" method="post">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Tìm kiếm..."
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            <BsSearch/>
          </button>
        </form>
        <div style={styles.wrapTable}>
          <table class="table table-bordered">
            <thead>
              <tr>
                {fields.map((field, i) => (
                  <ThCenter key={`field_${i}`} scope="col">{field}</ThCenter>
                ))}
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, i) => (
                <tr key={`row_${i}`}>
                  <TdCenter>{account.id}</TdCenter>
                  <TdCenter>{account.name}</TdCenter>
                  <TdCenter>{account.email}</TdCenter>
                  <TdCenter>{account.phone}</TdCenter>
                  <TdCenter>{account.fund}</TdCenter>
                  <TdCenter>
                    {account.isBan ? (
                      <button type="button" class="btn btn-success w-75">Mở khóa</button>
                    ) : (
                      <button type="button" class="btn btn-danger w-75">Khóa</button>
                    )}
                  </TdCenter>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav class="d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default ListAccount; 

const styles = {
  wrapTable: {
    'width': '90%',
    'margin-top': '30px',
    'margin-bottom': '30px',
  },
  separated: {
    'width': '50%',
    'height': '1px',
  }
}