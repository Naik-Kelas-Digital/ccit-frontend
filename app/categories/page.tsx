import React from 'react';

const Categories: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-10 bg-gray-100">
      <div className="max-w-[1440px] w-full bg-white flex flex-col justify-center items-center shadow-lg rounded-lg">
        <div className="max-w-[1200px] w-full flex flex-col items-center p-0,5 gap-10">
          <div className="w-full h-[500px] flex gap-10">
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[300px] bg-[url('/bgcardleft1.png')] bg-cover bg-center opacity-100 m-2.5 relative">
                <h6 className="absolute top-[58.5px] left-[49px] text-[14px] font-bold text-customOrange">Ends Today</h6>
                <h3 className="absolute top-[101.5px] left-[49px] text-[24px] font-bold text-black">Elements Of <br/> Style</h3>
                <h3 className="absolute top-[185.5px] left-[49px] text-[14px] font-normal text-black">Top Ten Products of the Week</h3>
                <button className="absolute top-[233.5px] left-[49px] text-[14px] font-semibold text-[#252B42] bg-customBlue rounded underline">Explore Items</button>
                <img src="/applewatch.png" alt="Apple Watch" className="absolute w-[255px] h-[445px] top-[-68px] left-[265px]" />
              </div>
            </div>
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[300px] bg-[url('/bgcardright1.png')] bg-cover bg-center opacity-100 m-2.5 relative">
                <h6 className="absolute top-[58.5px] left-[49px] text-[14px] font-bold text-white">Your Space</h6>
                <h3 className="absolute top-[101.5px] left-[49px] text-[24px] font-bold text-white">Unique Life</h3>
                <h3 className="absolute top-[150.5px] left-[49px] text-[14px] font-normal text-white">Top Ten Products of the Week</h3>
                <button className="absolute top-[210.5px] left-[49px] text-[14px] font-semibold text-white bg-customBlue rounded underline">Explore Items</button>
                <img src="/iphone.png" alt="iPhone" className="absolute w-[207px] h-[414px] top-[-44px] left-[265px]" />
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] flex mr-20">
            <div className="flex-1 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[300px] bg-white bg-cover bg-center opacity-100 m-2.5 relative">
                <h3 className="absolute z-10 top-[36.5px] left-[115px] text-[36px] font-bold  text-black">Elements <br/> Style</h3>
                <h6 className="absolute z-10 top-[150px] left-[115px] text-[14px] font-bold text-customOrange">Ends Today</h6>
                <button className="absolute z-10 top-[200.5px] left-[115px] text-[14px] font-semibold text-[#252B42] bg-customBlue rounded underline">Explore Items</button>
                <img src="/bgcardleft2.png" alt="" className="absolute w-[400px] h-[400px] top-[-44px] left-[150px]" />
              </div>
            </div>
            <div className="flex-1 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[300px] bg-white bg-cover bg-center opacity-100 m-2.5 relative">
                <h6 className="absolute z-10 top-[36.5px] left-[115px] text-[36px] font-bold text-black">Unique <br/> Life</h6>
                <h3 className="absolute z-10 top-[150px] left-[115px] text-[14px] font-bold text-customOrange">Your Space</h3>
                <button className="absolute z-10 top-[200.5px] left-[115px] text-[14px]  font-semibold bg-customBlue rounded underline">Explore Items</button>
                <img src="/bgcardright2.png" alt="" className="absolute w-[400px] h-[400px] top-[-44px] left-[150px]" />
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] flex ">
            <div className="flex-1 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[300px] bg-[url('/bgcardleft3.png')] bg-cover bg-center opacity-100 m-0 relative">
                <h6 className="absolute top-[65px] right-[49px] text-[14px] font-bold text-[#252B42]">Ends Today</h6>
                <h2 className="absolute top-[100px] right-[49px] text-[40px] font-bold text-[#252B42] text-right">Elements <br/> Style </h2>
                <button className="absolute top-[220px] right-[49px] text-[14px] font-semibold text-[#252B42] bg-customBlue rounded underline">Explore Items</button>
              </div>
            </div>
            <div className="flex-1 h-full bg-white flex justify-center items-center relative">
            <div className="w-full h-[300px] bg-[url('/bgcardright3.png')] bg-cover bg-center opacity-100 m-0 relative">
                <h6 className="absolute top-[95px] right-[49px] text-[14px] font-bold text-[#252B42]">Your Space</h6>
                <h3 className="absolute top-[125px] right-[45px] text-[40px] font-bold text-[#252B42]">Unique Life</h3>
                <button className="absolute top-[190px] right-[49px] text-[14px] font-semibold text-[#252B42] bg-customBlue rounded underline">Explore Items</button>
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] flex gap-10">
            <div className="flex-1 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[300px] bg-[url('/bgcardleft4.png')] bg-cover bg-center opacity-100 m-0 relative">
                <h6 className="absolute top-[65px] right-[49px] text-[14px] font-bold text-[#252B42]">Ends Today</h6>
                <h2 className="absolute top-[100px] right-[49px] text-[40px] font-bold text-[#252B42] text-right">Elements <br/> Style </h2>
                <button className="absolute top-[220px] right-[49px] text-[14px] font-semibold text-[#252B42] bg-customBlue rounded underline">Explore Items</button>
              </div>
            </div>
            <div className="flex-1 h-full bg-white flex justify-center items-center relative">
            <div className="w-full h-[300px] bg-[url('/bgcardright4.png')] bg-cover bg-center opacity-100 m-0 relative">
                <h6 className="absolute top-[95px] right-[49px] text-[14px] font-bold text-[#252B42]">Your Space</h6>
                <h3 className="absolute top-[125px] right-[45px] text-[40px] font-bold text-[#252B42]">Unique Life</h3>
                <button className="absolute top-[190px] right-[49px] text-[14px] font-semibold text-[#252B42] bg-customBlue rounded underline">Explore Items</button>
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] flex gap-10">
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[300px] bg-[url('/bgcardleft5.png')] bg-cover bg-center opacity-100 m-0 relative">
              <h6 className="absolute top-[60.5px] left-[49px] text-[14px] font-bold text-customOrange">Ends Today</h6>
                <h3 className="absolute top-[101.5px] left-[49px] text-[24px] font-bold text-white">Elements Of Style</h3>
                <h3 className="absolute top-[150.5px] left-[49px] text-[14px] font-normal text-white">Top Ten Products of the Week</h3>
                <button className="absolute top-[200.5px] left-[49px] text-[14px] font-semibold text-white bg-customBlue rounded underline">Explore Items</button>
              </div>
            </div>
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
            <div className="w-full h-[300px] bg-[url('/bgcardright5.png')] bg-cover bg-center opacity-100 m-0 relative">
                <h6 className="absolute top-[58.5px] left-[49px] text-[14px] font-bold text-customOrange">Your Space</h6>
                <h3 className="absolute top-[101.5px] left-[49px] text-[24px] font-bold text-white">Unique Life</h3>
                <h3 className="absolute top-[150.5px] left-[49px] text-[14px] font-normal text-white">Top Ten Products of the Week</h3>
                <button className="absolute top-[210.5px] left-[49px] text-[14px] font-semibold text-white bg-customBlue rounded underline">Explore Items</button>
              </div>
            </div>
          </div>
          <div className="w-full h-[434px] flex gap-10">
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
              <div className="w-full h-[300px] bg-[url('/bgcardleft6.png')] bg-cover bg-center opacity-100 m-0 relative">
              <h6 className="absolute top-[65px] left-[49px] text-[14px] font-bold text-customOrange">Ends Today</h6>
                <h2 className="absolute top-[100px] left-[49px] text-[40px] font-bold text-[#252B42]">Elements <br/> Style</h2>
                <button className="absolute top-[220px] left-[49px] text-[14px] font-semibold text-[#252B42] bg-customBlue rounded underline">Explore Items</button>
              </div>
            </div>
            <div className="w-1/2 h-full bg-white flex justify-center items-center relative">
            <div className="w-full h-[300px] bg-[url('/bgcardright6.png')] bg-cover bg-center opacity-100 m-0 relative">
                <h6 className="absolute top-[95px] left-[49px] text-[14px] font-bold text-customOrange">Your Space</h6>
                <h3 className="absolute top-[125px] left-[49px] text-[40px] font-bold text-[#252B42]">Unique Life</h3>
                <button className="absolute top-[190px] left-[49px] text-[14px] font-semibold text-[#252B42] bg-customBlue rounded underline">Explore Items</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
