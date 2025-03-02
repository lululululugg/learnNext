"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const listData=[
    {
      name:"Pertormance",
      link:"/pertormance"
    },{
      name:"Refliabilitv",
      link:"/refliabilitv"
    },{
      name:"Scale",
      link:"/scale"
    },{
      name:"Blog",
      link:"/blog"
    }
]
// const accessData=['/','/pertormance','/refliabilitv','/scale'];
const Header = () => {
  const pathname = usePathname();
  // if(!accessData.includes(pathname))return null;
    return (
    <div className="absolute w-full z-10" >
        <div className="header flex justify-between container mx-auto items-center text-white p-8" >
        <Link className="text-3xl font-bold" href='/' >Home</Link>
        <div className="text-xl space-x-4">
            {listData.map((item,index)=>(
            <Link className={pathname === item.link ? "text-blue-300" : ""} key={index} href={item.link}>{item.name}</Link>
            ))
            }
        </div>
        </div>
    </div>
    )
}

export default Header;