import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// halaman untuk menyesuaikan navbar
function NavBar() {
  const Navigate = useNavigate();
  const handleClickUser = () => {
    Navigate("/user");
  };

  //   untuk konfirmasi halaman yang active
  const [activedNav, setActiveNav] = useState("/");

  const handleClickNav = (pages) => {
    setActiveNav(pages);
    Navigate(pages);
  };

  return (
    <>
      <div class="flex flex-wrap">
        <section class="relative mx-auto">
          <nav class="flex justify-between bg-gray-100  w-screen h-14 dark:bg-slate-800 dark:text-white">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <a class="text-3xl font-bold font-heading" href="#">
                {/* <!-- <img class="h-9" src="logo.png" alt="logo"> --> */}
                Adingfo
              </a>
              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a class="hover:text-gray-200" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-200" href="#">
                    Catagory
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-200" href="#">
                    Collections
                  </a>
                </li>
                <li>
                  <a class="hover:text-gray-200" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div class="hidden xl:flex items-center space-x-5 ">
                <a class="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
                <a class="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="flex absolute -mt-5 ml-4">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
                <a class="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <a class="xl:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="flex absolute -mt-5 ml-4">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
      <div class="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              class="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
            />
          </a>
        </div>
      </div>
      {/* untuk halaman dashboard */}
      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 h-screen bg-gray-100 fixed dark:bg-slate-800 dark:text-white">
          <ul className="mt-5">
            <div
              className={`flex items-center ml-5 justify-center w-60 h-12 rounded-lg hover:bg-slate-300 hover:dark:bg-slate-900 duration-200 *:${
                activedNav === "/"
                  ? "dark:shadow-lg dark:shadow-slate-900 dark:bg-slate-700"
                  : "bg-transparent"
              }`}
              onClick={() => handleClickNav("/")}
            >
              <FontAwesomeIcon
                icon="house"
                className=" text-black text-xs dark:text-white w-[15px] h-[15px]z mr-2 p-[9px] rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.5)] drop-shadow-xl transition duration-300 ease-in-out ml-3"
              />

              <li className=" p-4 transition cursor-pointer flex-1 text-sm">
                Home
              </li>
            </div>

            <div
              className={`flex items-center ml-5 justify-center w-60 h-12 rounded-lg hover:bg-slate-300 hover:dark:bg-slate-900 duration-200 mt-1 ${
                activedNav === "/user"
                  ? "dark:shadow-lg dark:shadow-slate-900 dark:bg-slate-700"
                  : "bg-transparent"
              }`}
              onClick={() => handleClickNav("/user")}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-user"
                className="text-black dark:text-white text-xs mr-2 w-[15px] h-[15px] p-[9px] rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.5)] drop-shadow-xl transition duration-300 ease-in-out ml-3"
              />

              <li className=" p-4 transition cursor-pointer flex-1 text-sm">
                User
              </li>
            </div>
            <div
              className={`flex items-center ml-5 justify-center w-60 h-12 rounded-lg hover:bg-slate-300 hover:dark:bg-slate-900 duration-200 mt-1 ${
                activedNav === "/add"
                  ? "dark:shadow-lg dark:shadow-slate-900 dark:bg-slate-700"
                  : "bg-transparent"
              }`}
              onClick={() => handleClickNav("/add")}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-plus"
                className="text-black dark:text-white text-xs mr-2 w-[15px] h-[15px] p-[9px] rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.5)] drop-shadow-xl transition duration-300 ease-in-out ml-3"
              />

              <li className=" p-4 transition cursor-pointer flex-1 text-sm">
                New Student
              </li>
            </div>
          </ul>
        </nav>

        {/* Main Content Area */}
        <div className="ml-64 flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default NavBar;
