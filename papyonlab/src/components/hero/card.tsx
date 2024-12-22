export default function Card({ text }: { text: string }) {
  return (
    <div className="w-[350px] h-[190px] bg-[#1E1E21] rounded-[30px] text-white p-6 flex items-center shadow-lg">
      <p className="text-lg font-semibold">{text}</p>
    </div>
  );
}






// import React from "react";

// const Boxes = () => {
//   return (
// <div className="flex flex-col items-start gap-4 p-4 bg-black min-h-screen">
//   {/* İlk Box */}
//   <div className="px-[350px] py-[190px] bg-[#1E1E21] rounded-[30px] text-white p-6 flex items-center">
//     <p className="text-lg font-semibold">I’m eager to see your creative work.</p>
//   </div>

//   {/* İkinci Box */}
//   <div className="px-[350px] py-[190px] bg-[#1E1E21] rounded-[30px] text-white p-6 flex items-center">
//     <p className="text-lg font-semibold">I have a web/app idea.</p>
//   </div>

//   {/* Üçüncü Box */}
//   <div className="px-[350px] py-[190px] bg-[#1E1E21] rounded-[30px] text-white p-6 flex items-center">
//     <p className="text-lg font-semibold">Software & design support.</p>
//   </div>
// </div>

//   );
// };

// export default Boxes;
