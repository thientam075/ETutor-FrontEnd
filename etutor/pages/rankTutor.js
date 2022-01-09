import Navbar from "../components/navbar";
import ListGroup from "../components/listgroup";
import { API } from "../configs";
import { useState, useEffect } from "react";
export default function Ranktutor() {
  const [rankTutor, setRankTutor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fechtRankTutor = async () => {
    await fetch(API.TinQuangBa.RANKTUTOR, {
      headers: { "Content-Type": "application/json" },
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
  useEffect(() => {
    fechtRankTutor();
  },[loading]);
  return (
    <>
      <Navbar />
      <ListGroup typeList={"rankTutor"} listData={rankTutor} loading = {loading}/>
    </>
  );
}
