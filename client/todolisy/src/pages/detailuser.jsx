// halaman untuk detail pada user
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DetailCard } from "../components/detail/detail";
import { LoadingElementsss } from "../components/detail/loading";

export const DetailUser = () => {
  const [userDetail, setUserDetail] = useState(null);

  const { id } = useParams();

  // ambil detail dengan axios
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // ambil id dari params

        const detail = await axios.get(`http://localhost:5000/detail/${id}`);
        setUserDetail(detail.data);
      } catch {
        console.log("Gagal mengambil halaman detail");
      }
    };
    fetchDetail();
  }, [id]);

  return (
    <>
      {userDetail ? (
        <>
          <DetailCard id={id} />
        </>
      ) : (
        <>
          <LoadingElementsss />
        </>
      )}
    </>
  );
};
