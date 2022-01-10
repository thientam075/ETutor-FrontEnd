import Navbar from "../components/navbar";
import ListGroup from "../components/listgroup";
import withAuth from "../hoc/withAuth";
import {TinQuangBaService} from "../serviceAPI/TinQuangBaService";
import { useAppSelector } from "../context";
import { useState, useEffect } from "react";

function Ranktutor() {
  const [rankTutor, setRankTutor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { jwt, user } = useAppSelector((state) => state.auth);
  const fechtRankTutor = async (jwt) => {
    TinQuangBaService.rankTutor(jwt)
    .then((res) => {
      if (!res.ok) {
        setError(true);
      } else {
        res.json().then((result) => {
          if (result.rowCount !== 0) {
            setRankTutor(result.rows);
            setLoading(true);
          }
        });
      }
    });
  };

  const updateIndex = async () => {
    await TinQuangBaService.updateIndex().then((response) => {
      console.log(response);
    });
  };
  useEffect(() => {
    fechtRankTutor(jwt);
    updateIndex();
  },[loading]);
  return (
    <>
      <Navbar />
      <ListGroup
        typeList={"rankTutor"}
        listData={rankTutor}
        loading={loading}
      />
    </>
  );
}

export default withAuth(Ranktutor);
