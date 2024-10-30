// halaman untuk mengatur form di dalam halaman
import "../../style/input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Forms() {
  return (
    <>
      <div className="text-white mt-4">
        <form>
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

          <button className="animate-pulse hover:animate-none bg-gradient-to-tr from-slate-900 to-sky-800 w-full mt-5 py-3 rounded-full shadow-lg shadow-slate-900 focus:outline-none active:shadow-sm active:translate-y-1 transition-transform duration-150">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Forms;
