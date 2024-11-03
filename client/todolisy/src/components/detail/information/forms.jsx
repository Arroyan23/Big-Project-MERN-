// halaman untuk mengatur form pengubahan mahasiswa
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const FormsData = ({ detail, setUpdateModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const Navigate = useNavigate();
  //   untuk set onChange
  const [nim, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [sex, setSex] = useState("");
  const [adress, setAdress] = useState("");

  const { id } = useParams();
  //   untuk set halaman ketika di render
  useEffect(() => {
    setName(detail.nim || "");
    setBirth(detail.birth || "");
    setSex(detail.sex || "");
    setAdress(detail.adress || "");
  }, []);

  //   untuk halaman men set animasi
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const modalClosed = () => {
    setIsVisible(false);
    setTimeout(() => setUpdateModal(false), 150);
  };

  //   gunakan update untuk melakukan update
  const updateDetail = async () => {
    try {
      const updateDetail = { nim, birth, sex, adress };
      await axios.put(
        `http://localhost:5000/update/detail/${id}`,
        updateDetail
      );
      alert("halaman berhasil di update");
      Navigate(0, { replace: true });
    } catch {
      console.log("Halaman gagal untuk di update: FrontEnd React");
    }
  };

  return (
    <>
      {isVisible && (
        <div className="min-w-screen w-full bg-opacity-65 bg-black z-40 h-screen absolute top-0 right-0 flex items-center justify-center"></div>
      )}

      <div className="absolute transform z-50 max-w-2xl w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div
          className={`bg-slate-800 w-full max-w-lg p-8 rounded-lg shadow-lg mx-4 relative shadow-slate-800 transform transition-all duration-500 ease-out ${
            isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <div
            onClick={modalClosed}
            className="absolute cursor-pointer -top-2 -right-2 shadow-xl shadow-slate-950 bg-slate-600 rounded-full w-8 h-8 flex items-center justify-center"
          >
            {/* untuk tanda silang */}
            <FontAwesomeIcon
              n
              icon="fa-solid fa-xmark"
              className="text-white"
            />
          </div>
          <form className="text-white">
            <label htmlFor="inputField" className="block mb-2 my-3">
              NIM
            </label>
            <input
              type="text"
              id="inputField"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="Masukkan Nim"
              value={nim}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="inputField" className="block mb-2 my-3">
              Birth
            </label>
            <input
              type="text"
              id="inputField"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="Masukkan Kelahiran"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
            <label htmlFor="inputField" className="block mb-2 my-3">
              Jenis Kelamin
            </label>
            <select
              id="sex"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="" disabled>
                Pilih Jenis Kelamin
              </option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <label htmlFor="inputField" className="block mb-2 my-3">
              Alamat Lengkap
            </label>
            <input
              type="text"
              id="inputField"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
              placeholder="Masukkan Nim"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </form>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-600 py-2 px-5 rounded-xl shadow-lg mt-3 text-white"
            onClick={updateDetail}
          >
            Update
          </motion.button>
        </div>
      </div>
    </>
  );
};
