// untuk halaman update information di dalam

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const UpdateDetail = ({ modalBoxLifted }) => {
  // gunakan lifting statement untuk menutup halamannya
  const [isVisible, setIsVisible] = useState(false);

  //   untuk mengatur animasi agar mulus
  //   animasi pada awal menggunakan use Effect karena pertama kali di render harus menentukan kondisi
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  // gunakan logika untuk mengirimkan secara delay dan set time out untuk pengiriman menuju lifting
  // state
  const modalClosed = () => {
    setIsVisible(false);
    setTimeout(() => modalBoxLifted(false), 150);
  };

  return (
    <>
      <div
        onClick={modalClosed}
        className="min-w-screen w-full bg-opacity-65 bg-black z-40 h-screen absolute top-0 right-0 flex items-center justify-center"
      >
        {" "}
      </div>
      <div className="absolute top-24 left-96 right-0 z-50 max-w-xl ">
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
            <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-white" />
          </div>
          <form className="text-white">
            <label htmlFor="inputField" className="block mb-2 my-3">
              NIM
            </label>
            <input
              type="text"
              id="inputField"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Masukkan Nim"
            />
            <label htmlFor="inputField" className="block mb-2 my-3">
              Birth
            </label>
            <input
              type="text"
              id="inputField"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Masukkan Nim"
            />
            <label htmlFor="inputField" className="block mb-2 my-3">
              Jenis Kelamin
            </label>
            <input
              type="text"
              id="inputField"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Masukkan Nim"
            />
            <label htmlFor="inputField" className="block mb-2 my-3">
              Alamat Lengkap
            </label>
            <input
              type="text"
              id="inputField"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Masukkan Nim"
            />
          </form>
          <button className="bg-slate-600 py-2 px-5 rounded-xl shadow-lg mt-3 text-white">
            Update
          </button>
        </div>
      </div>
    </>
  );
};
