import Image from "next/image"
import Link from "next/link"

const menuList = [
    {
        id:1,
        name:"HomePage",
        link:"/",
        icon:"home.svg"
    },
    {
        id:2,
        name:"Explore",
        link:"/",
        icon:"explore.svg"
    },
    {
        id:3,
        name:"Notification",
        link:"/",
        icon:"notification.svg"
    },
    {
        id:4,
        name:"Messages",
        link:"/",
        icon:"message.svg"
    },
    {
        id:5,
        name:"BookMarks",
        link:"/",
        icon:"bookmarks.svg"
    },
    {
        id:6,
        name:"Jobs",
        link:"/",
        icon:"job.svg"
    }
]
const LeftBar = () => {
    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
            {/*LOGO MENU BUTTON*/}
            <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
                {/*LOGO */}
                <Link href="/">
                    <Image src="icons/logo.svg" alt="logo" width={24} height={24} />
                </Link>
                {/*MENU LIST */}
                <div className="flex flex-col" >
                    {menuList.map((item) => (
                        <Link key={item.id} href={item.link} className="p-2 rounded-full hover:bg-[#181818] flex item-center gap-4">
                            <Image 
                                src={`icons/${item.icon}`}
                                alt=""
                                width={24}
                                height={24}
                            />
                            <span className="hidden xxl:inline">{item.name}</span>
                        </Link>
                    ))}
                </div>
                {/* POST BUTTON */}
                <Link 
                    href='/compose/post' 
                    className="bg-white text-black rounded-full h-12 w-12 flex items-center justify-center xxl:hidden"
                >
                    <Image src="icons/post.svg" alt="new post" height={24} width={24}/>
                </Link>
                  <Link 
                    href='/compose/post' 
                    className="hidden xxl:block rounded-full bg-white text-black font-bold py-2 px-20"
                >
                    Post
                </Link>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image src="/general/avatar.png" alt="" fill/>
                    </div>
                    <div className="hidden xxl:flex flex-col">
                        <span className="font-bold">Lama dev</span>
                        <span className="text-sm text-textGray">@lama web dev</span>
                    </div>
                </div>
                <div className="hidden xxl:block cursor-pointer font-bold">...</div>
            </div>
        </div>
    )
}

export default LeftBar