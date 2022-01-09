const infoTutor1 = {
  name: "Ryan Bùi",
  star: 4,
  total_rating: 80,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  subjects: ["Toán", "Văn", "Sinh học"],
  email: "ryanBui072@gmail.com",
  Times: [
    { value: "Thứ 2 - 8h", price: "100.000 VND", subject: "Sinh Học" },
    { value: "Thứ 3 - 9h", price: "120.000 VND", subject: "Toán" },
    { value: "Thứ 4 - 22h", price: "150.000 VND", subject: "Văn" },
  ],
};

import {useRouter} from "next/router";
import { useEffect, useState } from 'react';

export default function InfoDetailTutor() {
  const router = useRouter();
  const tutorID = router.query.tutorID;
  const [tutor, setTutor] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchTutor = async (tutorID) => {
    await fetch("http://localhost:1337/ET/api/tin-quang-bas/" + tutorID, {
      headers: {'Content-Type':'application/json'},
      })
      .then(res => {
        if (!res.ok) {
          setError(true);
        } else {
          res.json().then((result) => {
            if (result.data) {
              setLoading(true);
              setTutor(result.data);
            }
          });
        }
      }) 
  };
  useEffect(() => {
    fetchTutor();
    if (!error) {
      router.push('/404')
    }
  }, [loading])
  return (
    <>
      {/* <Navbar />
      <InfoTutor
        name={infoTutor1.name}
        star={infoTutor1.star}
        total_rating={infoTutor1.total_rating}
        subjects = {infoTutor1.subjects}
        description = {infoTutor1.description}
        email = {infoTutor1.email}
        Times = {infoTutor1.Times}
      /> */}
      <h5>title</h5>
      <div>Tutor ID: {tutor}</div>
    </>
  );
}

