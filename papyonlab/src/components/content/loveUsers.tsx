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
    { id: 7, x: "50%", y: "80%", width: 80, height: 80, src: "/box1.png" },
  ];
  const profiles2 = [
    { id: 1, x: "0%", y: "50%", width: 130, height: 130, src: "/box1.png" },
    { id: 2, x: "30%", y: "30%", width: 100, height: 100, src: "/box1.png" },
    { id: 3, x: "60%", y: "50%", width: 80, height: 80, src: "/box1.png" },
    { id: 4, x: "80%", y: "70%", width: 50, height: 50, src: "/box1.png" },
    { id: 5, x: "4%", y: "40%", width: 100, height: 100, src: "/box1.png" },
    { id: 6, x: "30%", y: "60%", width: 100, height: 100, src: "/box1.png" },
    { id: 7, x: "50%", y: "80%", width: 80, height: 80, src: "/box1.png" },
  ];

  return (
    <div className="w-full  flex justify-center items-center">
      <div className="w-full h-[500px] relative">
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
      <div className="w-full h-[500px] ">
        <h1 className="text-[100px] leading-[100px] font-[600] text-center bg-gradient-to-r from-[#8753F2] to-[#C276FE] text-transparent bg-clip-text underline decoration-skip-ink decoration-underline from-font">
          Loved by Users
        </h1>
        <h5 className="text-white text-center text-[20px] leading-[28px] font-[400]">
          Our apps are loved globally, allowing us to make an impact. We started
          as a startup, but aim to grow beyond limits.
        </h5>
        <div className="mt-6 flex justify-center items-center bg-[#1E1E21] text-white rounded-lg p-6 space-x-8">
          <div className="text-center">
            <p className="text-3xl font-bold">15</p>
            <p className="text-sm">Apps</p>
          </div>
          <div className="flex ">
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
          <div className="text-center">
            <p className="text-3xl font-bold">1M+</p>
            <p className="text-sm">Downloads</p>
          </div>
          <div className="flex ">
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
          <div className="text-center">
            <p className="text-3xl font-bold">100K+</p>
            <p className="text-sm">Users</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] relative">
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
