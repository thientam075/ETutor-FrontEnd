import Navbar from "../components/navbar";
import ListGroup from "../components/listgroup";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAppSelector } from "../context";
import withAuth from "../hoc/withAuth";
import {TinQuangBaService} from "../serviceAPI/TinQuangBaService";
function SearchTutor() {
  const router = useRouter();
  const { name } = router.query;

  const { jwt, user } = useAppSelector((state) => state.auth);
  const [listSearches, setListSearches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fechtSearchTutor = async (name,jwt) => {
    TinQuangBaService.searchTutor(name,jwt)
    .then((res) => {
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
    if (name) {
      fechtSearchTutor(name,jwt);
    }
  }, [name, loading]);
  return (
    <>
      <Navbar />
      <ListGroup
        typeList={"Search"}
        listData={listSearches}
        loading={loading}
      />
    </>
  );
}

export default withAuth(SearchTutor);