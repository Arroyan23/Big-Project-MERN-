// halaman untuk mengatur tampilan
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";

function News() {
  // masukkan ke use state
  const [mhsData, setMhsData] = useState([]);
  // ambil datanya menggunakan use Effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/student/18369si"
        );
        setMhsData(response.data);
      } catch {
        console.log("Something when error...");
      }
    };

    fetchData();
  }, []);

  // membuat function delete
  const deleteUser = async (id) => {
    const deleteConfirm = confirm(
      "Apakah anda yakin ingin menghapus User ini?"
    );
    if (deleteConfirm) {
      try {
        await axios.delete(`http://localhost:5000/user/${id}`);
        setMhsData(mhsData.filter((u) => u._id !== id));
      } catch {
        console.log("Failed to delete data...");
      }
    }
  };
  return (
    <>
      <div className="max-w-full custom-scrollbar shadow-xl dark:text-white shadow-slate-900 rounded-xl dark:bg-slate-700">
        <table className="min-w-full ">
          <thead>
            <tr className=" rounded-t-xl ">
              <th className="p-4 text-left">Function</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">City</th>

              <th className="p-4 text-left">Employed</th>
            </tr>
          </thead>
          <tbody>
            {/* batas contoh untuk konfirmasi ke dalam mongo db */}

            {/* Tambahkan baris lain jika diperlukan */}
            {mhsData.map((e, i) => {
              return (
                <>
                  <tr className=" cursor-pointer transition hover:bg-slate-300 hover:rounded-xl border-t-2 dark:border-slate-500">
                    <td className="p-4 flex space-x-3">
                      <img
                        src={e.poster}
                        alt=""
                        className="h-14 object-cover w-14 rounded-full"
                      />
                      <div className="">
                        {e.nama}
                        <p className="text-slate-400">{e.email}</p>
                      </div>
                    </td>
                    <td className="p-4">{e.phone}</td>
                    <td className="p-4">{e.city}</td>
                    <td>
                      <button className="bg-slate-300 w-24 h-9 text-center rounded-lg mr-4">
                        <FontAwesomeIcon
                          icon="fa-solid fa-pen-to-square"
                          className="mr-3"
                        />
                        Edit
                      </button>
                      <button
                        className="bg-red-500 w-24 h-9 rounded-lg text-white"
                        onClick={() => deleteUser(e._id)}
                      >
                        <FontAwesomeIcon
                          icon="fa-solid fa-trash"
                          className="mr-3"
                        />
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default News;
