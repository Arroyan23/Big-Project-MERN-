// halaman untuk konfigurasi

export const Card = ({ poster, nama, email, phone, city }) => {
  return (
    <>
      <div className="flex dark:text-white space-x-8 bg-slate-700 max-w-lg p-5 rounded-xl shadow-lg shadow-slate-900">
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
