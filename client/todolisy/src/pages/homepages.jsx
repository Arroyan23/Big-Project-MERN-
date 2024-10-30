// halaman untuk menampilkan homepages
import Chart from "../components/homepage/chart";
import News from "../components/homepage/news";
function HomePages() {
  return (
    <>
      {/* data di atasnya untuk client dan sebagainya */}
      <div className="mr-3 max-w-full ">
        <div className="">
          {/* membuat halaman card */}
          {/* untuk meneliti kasus yang ada di dalam */}
          <News />
        </div>
      </div>
    </>
  );
}

export default HomePages;
