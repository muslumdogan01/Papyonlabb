"use client";

// components/LovedByUsers.js
const LovedByUsers = () => {
  const profiles = [
    { id: 1, x: "0%", y: "0%", width: 130, height: 130, src: "/box1.png" },
    { id: 2, x: "30%", y: "30%", width: 100, height: 100, src: "/box1.png" },
    { id: 3, x: "60%", y: "50%", width: 80, height: 80, src: "/box1.png" },
    { id: 4, x: "80%", y: "70%", width: 50, height: 50, src: "/box1.png" },
    { id: 5, x: "4%", y: "40%", width: 100, height: 100, src: "/box1.png" },
    { id: 6, x: "30%", y: "60%", width: 100, height: 100, src: "/box1.png" },
    { id: 7, x: "70%", y: "20%", width: 50, height: 50, src: "/box1.png" },
    { id: 8, x: "40%", y: "5%", width: 80, height: 80, src: "/box1.png" },
    { id: 9, x: "10%", y: "90%", width: 50, height: 50, src: "/box1.png" },
    { id: 10, x: "70%", y: "35%", width: 50, height: 50, src: "/box1.png" },
  ];
  const profiles2 = [
    { id: 1, x: "70%", y: "50%", width: 130, height: 130, src: "/box1.png" },
    { id: 2, x: "10%", y: "10%", width: 50, height: 50, src: "/box1.png" },
    { id: 3, x: "20%", y: "50%", width: 80, height: 80, src: "/box1.png" },
    { id: 4, x: "10%", y: "30%", width: 50, height: 50, src: "/box1.png" },
    { id: 5, x: "60%", y: "0%", width: 100, height: 100, src: "/box1.png" },
    { id: 6, x: "40%", y: "30%", width: 100, height: 100, src: "/box1.png" },
    { id: 7, x: "50%", y: "80%", width: 80, height: 80, src: "/box1.png" },
    { id: 8, x: "40%", y: "5%", width: 80, height: 80, src: "/box1.png" },
    { id: 9, x: "10%", y: "90%", width: 20, height: 20, src: "/box1.png" },
    { id: 10, x: "70%", y: "20%", width: 120, height: 120, src: "/box1.png" },
  ];

  return (
    <div className="w-full mt-[250px] flex justify-center items-center relative">
      <div className="w-full h-[700px] relative">
        <div className="absolute inset-0 overflow-hidden">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="absolute w-16 h-16 rounded-full bg-cover bg-center animate-floating"
              style={{
                top: profile.y,
                left: profile.x,
                width: `${profile.width}px`,
                height: `${profile.height}px`,
                backgroundImage: `url(${profile.src})`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="w-full h-[700px] ">
            <div className="flex flex-col justify-center items-center mt-[100px] space-y-5">
            <h1 className="text-[100px] leading-[100px] font-[600] text-center bg-gradient-to-r from-[#8753F2] to-[#C276FE] text-transparent bg-clip-text underline decoration-skip-ink decoration-underline from-font">
          Loved by users
        </h1>
        <h5 className="text-white text-center text-[20px] leading-[28px] font-[400]">
          Our apps are loved globally, allowing us to make an impact. We started
          as a startup, but aim to grow beyond limits.
        </h5>
            </div>
        <div className="absolute top-[75%] left-1/2 px-[110px] transform -translate-x-1/2 -translate-y-1/2 mt-6 flex  items-center  z-30 bg-[#1E1E21] text-white rounded-lg ">
          <div className="text-left font-medium text-[40px] leading-[40px] my-[60px]">
            <p className=" font-bold">15</p>
            <p className="">Apps</p>
          </div>
          <div className="flex px-[90px]">
            <svg
              width="1"
              height="70"
              viewBox="0 0 1 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499997"
                y2="70"
                stroke="white"
                strokeOpacity="0.1"
                strokeDasharray="3 3"
              />
            </svg>
          </div>
          <div className="text-left font-medium text-[40px] leading-[40px] my-[60px] ">
            <p>1M+</p>
            <p>Downloads</p>
          </div>
          <div className="flex px-[90px]">
            <svg
              width="1"
              height="70"
              viewBox="0 0 1 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499997"
                y2="70"
                stroke="white"
                strokeOpacity="0.1"
                strokeDasharray="3 3"
              />
            </svg>
          </div>
          <div className="text-left font-medium text-[40px] leading-[40px] my-[60px]">
            <p>100K+</p>
            <p>Users</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[700px] relative">
        <div className="absolute inset-0 overflow-hidden">
          {profiles2.map((profil) => (
            <div
              key={profil.id}
              className="absolute w-16 h-16 rounded-full bg-cover bg-center animate-floating"
              style={{
                top: profil.y,
                left: profil.x,
                width: `${profil.width}px`,
                height: `${profil.height}px`,
                backgroundImage: `url(${profil.src})`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LovedByUsers;
