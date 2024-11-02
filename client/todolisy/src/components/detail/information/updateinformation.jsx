// untuk halaman update information di dalam

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, useParams } from "react-router-dom";
import { FormsData } from "./forms";

export const UpdateDetail = ({ modalBoxLifted }) => {
  // gunakan lifting statement untuk menutup halamannya
  const [isVisible, setIsVisible] = useState(false);
  const [detail, setDetail] = useState(null);

  const modalClosed = () => {
    setIsVisible(false);
    setTimeout(() => modalBoxLifted(false), 150);
  };

  // untuk memanggil kembali
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

  // untuk melakukan update

  return <>{detail ? <FormsData detail={detail} /> : <p>Loading...</p>}</>;
};
