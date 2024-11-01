import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LoadingElementsss } from "../loading";

// halaman untuk detail information
export const PrivateDetail = ({ updateModal }) => {
  const [detail, setDetail] = useState(null);
  //   ambil detail berdasarkan parameternya

  const [detailModal, setDetailModal] = useState(false);
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
        <div className="dark:text-white mt-6">
          <button
            onClick={() => updateModal(true)}
            className="bg-gradient-to-r from-slate-700 to-slate-700 py-2 px-4 shadow-xl shadow-slate-950 rounded-xl"
          >
            Add New Detail
          </button>
          <div className="mt-3">
            <p>NIM:</p>
            {detail.nim ? (
              <p>{detail.nim}</p>
            ) : (
              <p className="text-red-600">Please update Data</p>
            )}
            <p>Birthday: </p>
            {detail.birth ? (
              <p>{detail.birth}</p>
            ) : (
              <p className="text-red-600">Please update Data</p>
            )}
            <p>Jenis Kelamin: </p>
            {detail.sex ? (
              <p>{detail.sex}</p>
            ) : (
              <p className="text-red-600">Please update Data</p>
            )}
            <p>Alamat Lengkap:</p>
            {detail.adress ? (
              <p>{detail.adress}</p>
            ) : (
              <p className="text-red-600">Please update Data</p>
            )}
          </div>
        </div>
      ) : (
        <LoadingElementsss />
      )}
    </>
  );
};
