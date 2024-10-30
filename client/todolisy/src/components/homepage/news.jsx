// halaman untuk mengatur tampilan
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function News() {
  return (
    <>
      <div className="max-w-full custom-scrollbar shadow-xl dark:text-white shadow-slate-900 rounded-xl dark:bg-slate-700">
        <table className="min-w-full ">
          <thead>
            <tr className=" rounded-t-xl ">
              <th className="p-4 text-left">Function</th>
              <th className="p-4 text-left">Position</th>
              <th className="p-4 text-left">Country</th>

              <th className="p-4 text-left">Employed</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" cursor-pointer transition hover:bg-slate-300 hover:rounded-xl border-t-2 dark:border-slate-500">
              <td className="p-4 flex space-x-3">
                <img
                  src="https://media.istockphoto.com/id/2175689331/photo/photo-of-successful-positive-entrepreneur-businessman-hold-his-new-macbook-pro-typing-his.webp?a=1&b=1&s=612x612&w=0&k=20&c=u_uuH6AFv0aorO98uKZUwztDIpgfNzaBm8iYkE0nKyQ="
                  alt=""
                  className="h-14 object-cover w-14 rounded-full"
                />
                <div className="">
                  Muhammad Azzam Wartathutra
                  <p className="text-slate-400">azzamwartaputra@gmail.com</p>
                </div>
              </td>
              <td className="p-4">Kasus</td>
              <td className="p-4">Indonesia</td>
              <td>
                <button className="bg-slate-300 w-24 h-9 text-center rounded-lg mr-4">
                  <FontAwesomeIcon
                    icon="fa-solid fa-pen-to-square"
                    className="mr-3"
                  />
                  Edit
                </button>
                <button className="bg-red-500 w-24 h-9 rounded-lg text-white">
                  <FontAwesomeIcon icon="fa-solid fa-trash" className="mr-3" />
                  Delete
                </button>
              </td>
            </tr>
            <tr className=" cursor-pointer transition hover:bg-slate-300 hover:rounded-xl border-t-2 dark:border-slate-500">
              <td className="p-4 flex space-x-3">
                <img
                  src="https://media.istockphoto.com/id/2175689331/photo/photo-of-successful-positive-entrepreneur-businessman-hold-his-new-macbook-pro-typing-his.webp?a=1&b=1&s=612x612&w=0&k=20&c=u_uuH6AFv0aorO98uKZUwztDIpgfNzaBm8iYkE0nKyQ="
                  alt=""
                  className="h-14 object-cover w-14 rounded-full"
                />
                <div className="">
                  Muhammad Azzam Wartathutra
                  <p className="text-slate-400">azzamwartaputra@gmail.com</p>
                </div>
              </td>
              <td className="p-4">Kasus</td>
              <td className="p-4">Indonesia</td>
              <td>
                <button className="bg-slate-300 w-24 h-9 text-center rounded-lg mr-4">
                  <FontAwesomeIcon
                    icon="fa-solid fa-pen-to-square"
                    className="mr-3"
                  />
                  Edit
                </button>
                <button className="bg-red-500 w-24 h-9 rounded-lg text-white">
                  <FontAwesomeIcon icon="fa-solid fa-trash" className="mr-3" />
                  Delete
                </button>
              </td>
            </tr>
            {/* Tambahkan baris lain jika diperlukan */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default News;
