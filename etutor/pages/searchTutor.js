import Navbar from "../components/navbar";
import ListGroup from '../components/listgroup';

const listSearches = [
  {
    name: "Nguyễn Hoàng Trung",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    star: 4.5,
    total_rating: 70,
  },
  {
    name: "Nguyễn Văn B",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    star: 4.3,
    total_rating: 130,
  },
  {
    name: "Trần Thị H",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    star: 3.5,
    total_rating: 60,
  },
  {
    name: "Nguyễn Hoàng Văn",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    star: 5,
    total_rating: 2,
  },
  {
    name: "Lê Thị Huyền",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    star: 4.1,
    total_rating: 140,
  },
  {
    name: "Nguyễn Minh Nhựt",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    star: 4.6,
    total_rating: 138,
  },
  {
    name: "Đặng Minh Hoàng",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    star: 4.9,
    total_rating: 141,
  },
  {
    name: "Hoàng Văn Y",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    star: 3.7,
    total_rating: 72,
  },
  {
    name: "Nguyễn Thị Huyền Linh",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    star: 4,
    total_rating: 73,
  },
  {
    name: "Trần Đại Công",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    star: 4.2,
    total_rating: 123,
  },
];
export default function searchTutor() {
  return (
    <>
      <Navbar />
      <ListGroup typeList = {"Search"} listData = {listSearches}/>
    </>
  );
}
