// halaman untuk tampil di bagian utama
import SlashData from "../components/slash/data";
import LineGraph from "../components/slash/line";

function HomeSlash() {
  return (
    <>
      <div className="mr-3 max-w-full ml-3">
        {/* untuk menampilkan data */}
        <SlashData />
        <LineGraph />
      </div>
    </>
  );
}

export default HomeSlash;
