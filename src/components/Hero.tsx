import React from "react";
interface HeroProp {
    contentText:string
}
export default function Page(props:HeroProp) {
  return (
    <div className="bg-red-400 h-screen text-white relative">
      <div className="absolute inset-0" >
        {/* <Image src={Img1} alt=""/> */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950" ></div>
      </div>
      <div className="flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl font-bold z-20 text-white">{props.contentText}</h1>
      </div>
    </div>
  )
}