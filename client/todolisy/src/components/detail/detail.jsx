import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "./card";
import { PrivateInformation } from "./private";
import { PrivateDetail } from "./information/privatedetail";

export const DetailCard = ({ id }) => {
  const [home, setHome] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const responses = await axios.get(
          "http://localhost:5000/student/18369si"
        );
        console.log("Response data:", responses.data); // Debug data dari server
        // kalao pake id yang _id
        const findByID = responses.data.find((item) => item._id == id);
        setHome(findByID);
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    };
    fetchDetail();
  }, [id]);

  // ambil untuk mengambil data

  return (
    <>
      {home ? (
        <>
          <Card
            poster={home.poster}
            nama={home.nama}
            email={home.email}
            phone={home.phone}
            city={home.city}
          />
          <PrivateInformation />
          <PrivateDetail />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
