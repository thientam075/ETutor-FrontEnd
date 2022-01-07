import Navbar from "../components/navbar";
import ListGroup from '../components/listgroup';
const listRank = [];
export default function rankTutor(){
    return(<>
        <Navbar />
        <ListGroup typeList = {"rankTutor"} listData={listRank}/>
      </>);
}