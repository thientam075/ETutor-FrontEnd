import Navbar from "../components/navbar";
import ListGroup from "../components/listgroup";
import { API } from "../configs";
import { useState} from "react";

import withAuth from "../hoc/withAuth";
import {useAppSelector} from "../context";

function Ranktutor() {

  const { jwt, user } = useAppSelector((state) => state.auth);
  const [rankTutor, setRankTutor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fechtRankTutor = async (jwt) => {
    await fetch(API.TinQuangBa.RANKTUTOR, {
      headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
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
