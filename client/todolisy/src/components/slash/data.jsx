// halaman untuk menampilkan data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SlashData() {
  return (
    <>
      <div className="flex space-x-6">
        <div className="flex items-center space-x-5 dark:text-white shadow-lg shadow-slate-900 bg-slate-700 w-96 p-4 rounded-xl max-w-96">
          <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-indigo-800 to-sky-700 via-sky-700 rounded-lg">
            <FontAwesomeIcon
              icon="fa-solid fa-money-check-dollar"
              className="text-white"
            />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Rp 1.500.000</h1>
            <p className="dark:text-slate-400 text-slate-300">
              This Month income
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-5 dark:text-white shadow-lg shadow-slate-900 bg-slate-700 w-96 p-4 rounded-xl max-w-96">
          <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-indigo-800 to-sky-700 via-sky-700 rounded-lg">
            <FontAwesomeIcon
              icon="fa-solid fa-money-check-dollar"
              className="text-white"
            />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Rp 1.500.000</h1>
            <p className="dark:text-slate-400 text-slate-300">
              This Month income
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-5 dark:text-white shadow-lg shadow-slate-900 bg-slate-700 w-96 p-4 rounded-xl max-w-96">
          <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-indigo-800 to-sky-700 via-sky-700 rounded-lg">
            <FontAwesomeIcon
              icon="fa-solid fa-money-check-dollar"
              className="text-white"
            />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Rp 1.500.000</h1>
            <p className="dark:text-slate-400 text-slate-300">
              This Month income
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-5 dark:text-white shadow-lg shadow-slate-900 bg-slate-700 min-w-96 p-4 rounded-xl max-w-96">
          <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-indigo-800 to-sky-700 via-sky-700 rounded-lg">
            <FontAwesomeIcon
              icon="fa-solid fa-money-bill-1-wave"
              className="text-white"
            />
          </div>
          <div className="">
            <h1 className="text-xl font-bold">Rp 20.000</h1>
            <p className="dark:text-slate-400 text-slate-300">Present Income</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlashData;
