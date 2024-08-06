import React from "react";

const Blogs: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-10 bg-gray-100">
      <div className="max-w-[1440px] w-full bg-white flex flex-col justify-center items-center shadow-lg rounded-lg">
        <div className="max-w-[1440px] w-full flex flex-col items-center p-10">
          {/*Card 1*/}
          <div className="w-full h-[1000px] flex gap-10">
            {/* Left Content Card */}
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[600px] bg-[url('/cardblog1.png')] bg-cover bg-center opacity-100 m-10 relative">
                <span className="absolute bg-red-600 text-white font-semibold px-2 py-0.5 rounded mx-5 my-5">NEW</span>
                {/* Content Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex text-gray-400 mb-2.5">
                    <span className="mr-5 text-blue-400">Google</span>
                    <span className="mr-5">Trending</span>
                    <span>New</span>
                  </div>
                  <h2 className="text-xl font-bold mb-5">
                    Koudetat à la Maison #1<br/>(L'intégrale)
                  </h2>
                  <p className="text-gray-600 mb-5">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </p>
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="flex items-center">
                      <img src="icondate.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>22 April 2021
                    </span>
                    <span className="flex items-center">
                      <img src="vector.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>10 comments
                    </span>
                  </div>
                  <button className="text-blue-600 font-semibold mt-4 inline-block">
                    Learn More
                  </button>
                </div>
                {/* End Content Card */}
              </div>
            </div>
            {/* Right Content Card */}
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[600px] bg-[url('/cardblog2.png')] bg-cover bg-center opacity-100 m-10 relative">
                <span className="absolute bg-red-600 text-white font-semibold px-2 py-0.5 rounded mx-5 my-5">NEW</span>
                {/* Content Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex text-gray-400 mb-2.5">
                    <span className="mr-5 text-blue-400">Google</span>
                    <span className="mr-5">Trending</span>
                    <span>New</span>
                  </div>
                  <h2 className="text-xl font-bold mb-5">
                    Koudetat à la Maison #1<br/>(L'intégrale)
                  </h2>
                  <p className="text-gray-600 mb-5">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </p>
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="flex items-center">
                      <img src="icondate.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>22 April 2021
                    </span>
                    <span className="flex items-center">
                      <img src="vector.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>10 comments
                    </span>
                  </div>
                  <button className="text-blue-600 font-semibold mt-4 inline-block">
                    Learn More
                  </button>
                </div>
                {/* End Content Card */}
              </div>
            </div>
          </div>
          {/*Card 2*/}
          <div className="w-full h-[1000px] flex gap-10">
            {/* Left Content Card */}
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[600px] bg-[url('/cardblog3.png')] bg-cover bg-center opacity-100 m-10 relative">
                <span className="absolute bg-red-600 text-white font-semibold px-2 py-0.5 rounded mx-5 my-5">NEW</span>
                {/* Content Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex text-gray-400 mb-2.5">
                    <span className="mr-5 text-blue-400">Google</span>
                    <span className="mr-5">Trending</span>
                    <span>New</span>
                  </div>
                  <h2 className="text-xl font-bold mb-5">
                    Koudetat à la Maison #1<br/>(L'intégrale)
                  </h2>
                  <p className="text-gray-600 mb-5">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </p>
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="flex items-center">
                      <img src="icondate.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>22 April 2021
                    </span>
                    <span className="flex items-center">
                      <img src="vector.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>10 comments
                    </span>
                  </div>
                  <button className="text-blue-600 font-semibold mt-4 inline-block">
                    Learn More
                  </button>
                </div>
                {/* End Content Card */}
              </div>
            </div>
            {/* Right Content Card */}
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[600px] bg-[url('/cardblog4.png')] bg-cover bg-center opacity-100 m-10 relative">
                <span className="absolute bg-red-600 text-white font-semibold px-2 py-0.5 rounded mx-5 my-5">NEW</span>
                {/* Content Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex text-gray-400 mb-2.5">
                    <span className="mr-5 text-blue-400">Google</span>
                    <span className="mr-5">Trending</span>
                    <span>New</span>
                  </div>
                  <h2 className="text-xl font-bold mb-5">
                    Koudetat à la Maison #1<br/>(L'intégrale)
                  </h2>
                  <p className="text-gray-600 mb-5">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </p>
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="flex items-center">
                      <img src="icondate.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>22 April 2021
                    </span>
                    <span className="flex items-center">
                      <img src="vector.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>10 comments
                    </span>
                  </div>
                  <button className="text-blue-600 font-semibold mt-4 inline-block">
                    Learn More
                  </button>
                </div>
                {/* End Content Card */}
              </div>
            </div>
          </div>
          {/*Card 3*/}
          <div className="w-full h-[1000px] flex gap-10">
            {/* Left Content Card */}
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[600px] bg-[url('/cardblog5.png')] bg-cover bg-center opacity-100 m-10 relative">
                <span className="absolute bg-red-600 text-white font-semibold px-2 py-0.5 rounded mx-5 my-5">NEW</span>
                {/* Content Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex text-gray-400 mb-2.5">
                    <span className="mr-5 text-blue-400">Google</span>
                    <span className="mr-5">Trending</span>
                    <span>New</span>
                  </div>
                  <h2 className="text-xl font-bold mb-5">
                    Koudetat à la Maison #1<br/>(L'intégrale)
                  </h2>
                  <p className="text-gray-600 mb-5">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </p>
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="flex items-center">
                      <img src="icondate.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>22 April 2021
                    </span>
                    <span className="flex items-center">
                      <img src="vector.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>10 comments
                    </span>
                  </div>
                  <button className="text-blue-600 font-semibold mt-4 inline-block">
                    Learn More
                  </button>
                </div>
                {/* End Content Card */}
              </div>
            </div>
            {/* Right Content Card */}
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[600px] bg-[url('/cardblog6.png')] bg-cover bg-center opacity-100 m-10 relative">
                <span className="absolute bg-red-600 text-white font-semibold px-2 py-0.5 rounded mx-5 my-5">NEW</span>
                {/* Content Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex text-gray-400 mb-2.5">
                    <span className="mr-5 text-blue-400">Google</span>
                    <span className="mr-5">Trending</span>
                    <span>New</span>
                  </div>
                  <h2 className="text-xl font-bold mb-5">
                    Koudetat à la Maison #1<br/>(L'intégrale)
                  </h2>
                  <p className="text-gray-600 mb-5">
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </p>
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="flex items-center">
                      <img src="icondate.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>22 April 2021
                    </span>
                    <span className="flex items-center">
                      <img src="vector.png" alt="date icon" className="mr-1" />
                      <i className="far fa-clock mr-1"></i>10 comments
                    </span>
                  </div>
                  <button className="text-blue-600 font-semibold mt-4 inline-block">
                    Learn More
                  </button>
                </div>
                {/* End Content Card */}
              </div>
            </div>
          </div>
          {/* End of Cards */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
