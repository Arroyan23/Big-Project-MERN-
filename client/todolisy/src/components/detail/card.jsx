// halaman untuk konfigurasi
import "../../style/animation.css";

export const Card = ({ poster, nama, email, phone, city }) => {
  return (
    <>
      <div className="flex dark:text-white space-x-8 dark:bg-slate-700 max-w-lg p-5 rounded-xl shadow-lg shadow-slate-200 dark:shadow-slate-900 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:animate-floating">
        <div className="">
          <img
            src={poster}
            alt=""
            className="h-32 w-32 rounded-lg object-cover"
          />
        </div>
        <div className="">
          <p>Nama: {nama}</p>
          <h2>Email : {email}</h2>
          <h2>Phone : {phone}</h2>
          <p>City: {city}</p>
        </div>
      </div>
    </>
  );
};
