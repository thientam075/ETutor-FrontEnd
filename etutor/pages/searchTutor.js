import Navbar from "../components/navbar";
import ListGroup from "../components/listgroup";
import { API } from "../configs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function SearchTutor() {
  const router = useRouter();
  const { name } = router.query;
  const [listSearches, setListSearches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fechtSearchTutor = async (name) => {
    await fetch(API.TinQuangBa.SEARCH_TUTOR(name), {
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (!res.ok) {
        setError(true);
      } else {
        res.json().then((result) => {
          if (result.rowCount !== 0) {
            setListSearches(result.rows);
            setLoading(true);
          }
        });
      }
    });
  };
  useEffect(() => {
    console.log(router.query);
    if (name) {
      fechtSearchTutor(name);
    }
  }, [name, loading]);
  return (
    <>
      <Navbar />
      <ListGroup typeList={"Search"} listData={listSearches} loading={loading}/>
    </>
  );
}
