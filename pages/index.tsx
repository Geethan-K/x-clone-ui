import Link from "next/link"
import Feed from "../components/Feed"
import MediaPage from "../components/MediaPage"
import Shared from "../components/Shared"

const Homepage = () => {
  return (
    <div className=''>
      <div className="px-4 pt-4 flex justify-between text-gray font-bold border-b-[1px] border-borderGray">
        <Link className="pb-3 flex items-center border-b-4 border-iconBlue" href="/">
          For You
        </Link>
        <Link className="pb-3 flex items-center" href="/">Following</Link>
        <Link className="hidden md:flex pb-3 flex items-center" href="/">Following</Link>
        <Link className="hidden md:flex pb-3 flex items-center" href="/">Following</Link>
      </div>
      <Shared />
      <Feed />
    </div>
  )
}

export default Homepage