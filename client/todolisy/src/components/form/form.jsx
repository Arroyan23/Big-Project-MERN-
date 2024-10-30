// halaman untuk mengatur form di dalam halaman
import "../../style/input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forms() {
  // menset useState
  const [poster, setPoster] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  // halaman untuk menambahkan fungsi ke dalam database
  const Navigate = useNavigate();
  const addMahasiswa = async () => {
    try {
      // ambil dulu dari body
      const newMhs = { poster, nama, email, phone, city };
      const responses = await axios.post(
        "http://localhost:5000/add/8753",
        newMhs
      );
      console.log(responses);
      Navigate("/user");
    } catch {
      console.log("Gagal menambahkan ke database...");
    }
  };
  return (
    <>
      <div className="text-white mt-4">
        <form>
          <div className="flex items-center space-x-3 border-2 px-2 py-1 rounded-xl border-slate-600 mt-3">
            <label
              htmlFor="images"
              className="block text-white text-sm font-bold"
            >
              <div className="bg-slate-600 w-12 h-12 flex items-center justify-center p-2 rounded-lg">
                <FontAwesomeIcon
                  icon="fa-solid fa-image"
                  className="text-2xl"
                />
              </div>
            </label>
            <input
              type="text"
              id="images"
              placeholder="Masukkan link Gambar Profile"
              onChange={(e) => setPoster(e.target.value)}
              className="mt-4 border-opacity-40 mb-4 w-full py-1 bg-transparent  border-gray-300 focus:outline-none transition duration-200 ease-in-out pb-2"
            />
          </div>
          <div className="flex items-center space-x-3 border-2 px-2 py-1 rounded-xl border-slate-600 mt-3">
            <label
              htmlFor="nama"
              className="block text-white text-sm font-bold"
            >
              <div className="bg-slate-600 w-12 h-12 flex items-center justify-center p-2 rounded-lg">
                <FontAwesomeIcon
                  icon="fa-solid fa-signature"
                  className="text-2xl"
                />
              </div>
            </label>
            <input
              type="text"
              id="nama"
              placeholder="Masukkan nama"
              onChange={(e) => setNama(e.target.value)}
              className="mt-4 border-opacity-40 mb-4 w-full py-1 bg-transparent  border-gray-300 focus:outline-none transition duration-200 ease-in-out pb-2"
            />
          </div>
          <div className="flex items-center space-x-3 border-2 px-2 py-1 rounded-xl border-slate-600 mt-3">
            <label
              htmlFor="Email"
              className="block text-white text-sm font-bold"
            >
              <div className="bg-slate-600 w-12 h-12 flex items-center justify-center p-2 rounded-lg">
                <FontAwesomeIcon
                  icon="fa-solid fa-envelope-open-text"
                  className="text-2xl"
                />
              </div>
            </label>
            <input
              type="text"
              id="Email"
              placeholder="Masukkan Email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-4 border-opacity-40 mb-4 w-full py-1 bg-transparent  border-gray-300 focus:outline-none transition duration-200 ease-in-out pb-2"
            />
          </div>
          <div className="flex items-center space-x-3 border-2 px-2 py-1 rounded-xl border-slate-600 mt-3">
            <label
              htmlFor="phone"
              className="block text-white text-sm font-bold"
            >
              <div className="bg-slate-600 w-12 h-12 flex items-center justify-center p-2 rounded-lg">
                <FontAwesomeIcon
                  icon="fa-solid fa-phone"
                  className="text-2xl"
                />
              </div>
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Masukkan Nomor Telepon"
              onChange={(e) => setPhone(e.target.value)}
              className="mt-4 border-opacity-40 mb-4 w-full py-1 bg-transparent  border-gray-300 focus:outline-none transition duration-200 ease-in-out pb-2"
            />
          </div>
          <div className="flex items-center space-x-3 border-2 px-2 py-1 rounded-xl border-slate-600 mt-3">
            <label
              htmlFor="city"
              className="block text-white text-sm font-bold"
            >
              <div className="bg-slate-600 w-12 h-12 flex items-center justify-center p-2 rounded-lg">
                <FontAwesomeIcon icon="fa-solid fa-city" className="text-2xl" />
              </div>
            </label>
            <input
              type="text"
              id="city"
              placeholder="Masukkan Kota Domisili"
              onChange={(e) => setCity(e.target.value)}
              className="mt-4 border-opacity-40 mb-4 w-full py-1 bg-transparent  border-gray-300 focus:outline-none transition duration-200 ease-in-out pb-2"
            />
          </div>
          <div className="flex items-center space-x-3 border-2 px-2 py-1 rounded-xl border-slate-600 mt-3">
            <label
              htmlFor="Token"
              className="block text-white text-sm font-bold"
            >
              <div className="bg-slate-600 w-12 h-12 flex items-center justify-center p-2 rounded-lg">
                <FontAwesomeIcon
                  icon="fa-solid fa-arrow-up-1-9"
                  className="text-2xl"
                />
              </div>
            </label>
            <input
              type="number"
              id="Token"
              placeholder="Masukkan Token"
              className="mt-4 border-opacity-40 mb-4 w-full py-1 bg-transparent  border-gray-300 focus:outline-none transition duration-200 ease-in-out pb-2"
            />
          </div>

          <button
            onClick={addMahasiswa}
            className="animate-pulse hover:animate-none bg-gradient-to-tr from-slate-900 to-sky-800 w-full mt-5 py-3 rounded-full shadow-lg shadow-slate-900 focus:outline-none active:shadow-sm active:translate-y-1 transition-transform duration-150"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Forms;
