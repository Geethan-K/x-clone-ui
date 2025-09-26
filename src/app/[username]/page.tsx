import Image from "next/image"
import MediaPage from "../components/MediaPage"
import Link from "next/link"
import Feed from "../components/Feed"

const UserProfilePage = () => {
    <div className="">
        {/** PROFILE TITLE */}
        <div className="flex items-center gap-8 sticky backdrop-blur-md p-4 z-10 bg-[#000000084]">
            <Link href="/">
                <Image src="icons/back.svg" alt="" width={24} height={24}/>
            </Link>
            <h1 className="font-bold text-lg">Killer Geethan</h1>
        </div>
        {/** INFO */}
        <div className="">
            {/** COVER */}
            <div className="w-full aspect-[3/1] relative">
                <MediaPage path="general/cover.jpg" alt="" w={600} h={200} tr={true}/>
            </div>
            {/** AVATAR */}
            <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
                <MediaPage path="general/avatar.png" alt="" w={100} h={100} tr={true}/>
            </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
            <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                <Image src="icons/more.svg" alt="" width={20} height={20}/>
            </div>
             <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                <Image src="icons/explore.svg" alt="" width={20} height={20}/>
            </div>
             <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                <Image src="icons/message.svg" alt="" width={20} height={20}/>
            </div>
            <div className="py-2 px-4 bg-white text-black font-bold rounded-full">
                Follow
            </div>
        </div>
        {/** USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
            {/** USERNAME & HANDLE */}
            <div className="">
                <h1 className="text-2xl font-bold">Killer Geethan</h1>
                <span className="text-textGray text-sm">@killer__geethan</span>
            </div>
            <p>Description</p>
            {/**JOB , LOCATION , DATE */}
            <div className="flex gap-4 text-textGray text-[15px]">
                <div className="flex items-center gap-2">
                    <Image src="icons/userLocation.svg" alt="location" width={20} height={20} />
                    <span>USA</span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="icons/date.svg" alt="date" width={20} height={20} />
                    <span>Joined May 2021</span>
                </div>
            </div>
        </div>
        {/** FOLLOWINGS & FOLLOWERS */}
        <div className="flex gap-4">
            <div className="flex items-center gap-2">
                <span className="font-bold">100</span>
                <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-bold">100</span>
                <span className="text-textGray text-[15px]">Followings</span>
            </div>
        </div>
        <Feed />
    </div>
}
export default UserProfilePage