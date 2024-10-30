// halaman untuk konfirmasi murid baru

import Forms from "../components/form/form";

function NewStudent() {
  return (
    <>
      {/* halaman untuk menambahkan siswa ke dalam database */}
      <div className="max-w-3xl mx-auto bg-slate-700 shadow-xl shadow-slate-900 rounded-xl mt-12 px-16 py-10">
        <h1 className="text-white font-lexendca text-xl font-bold text-center">
          Add Student
        </h1>
        <Forms />
      </div>
    </>
  );
}

export default NewStudent;
