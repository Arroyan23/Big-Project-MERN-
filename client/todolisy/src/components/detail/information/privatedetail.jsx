import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LoadingElementsss } from "../loading";

// halaman untuk detail information
export const PrivateDetail = () => {
  const [detail, setDetail] = useState(null);
  //   ambil detail berdasarkan parameternya
  const { id } = useParams();
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // ambil id dari params

        const detail = await axios.get(`http://localhost:5000/detail/${id}`);
        setDetail(detail.data);
      } catch {
        console.log("Gagal mengambil halaman detail");
      }
    };
    fetchDetail();
  }, [id]);

  return (
    <>
      {detail ? (
        <div className="dark:text-white">
          <h1>Halo dunia</h1>
          <p>{detail.profile}</p>
        </div>
      ) : (
        <LoadingElementsss />
      )}
    </>
  );
};
