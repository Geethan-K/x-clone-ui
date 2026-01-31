import PostPage from "../../../components/Post";
import Comments from "../../../components/Comments";
import Image from "next/image";

import Link from "next/link";

const StatusPage = () => {
  return (
    <div className="">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image src="icons/back.svg" alt="back" width={24} height={24} />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      <PostPage/>
      <Comments/>
    </div>
  );
};

export default StatusPage;