import InfoTutor from "../components/infoTutor";
import Navbar from "../components/navbar";
const infoTutor1 = {
  name: "Ryan Bùi",
  star: 4,
  total_rating: 80,
};
export default function InfoDetailTutor() {
  return (
    <>
      <Navbar />
      <InfoTutor
        name={infoTutor1.name}
        star={infoTutor1.star}
        total_rating={infoTutor1.total_rating}
      />
    </>
  );
}
