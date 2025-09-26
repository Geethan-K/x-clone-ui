"use client"
import Image from "next/image"
const PostFooter = () => {
    return (
        <div className="flex items-center justify-between my-2 gap-4 lg:gap-8 xl:gap-16 text-textGray">
            <div className="flex items-center justify-between flex-1">
                {/** COMMENTS */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <Image className="hover:fill-iconBlue" src="/svg/comment.svg" alt="" height={24} width={24}/>
                    143
                </div>
                {/** LIKE */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <Image className="hover:fill-iconPink" src="/svg/like.svg" alt="" height={24} width={24}/>
                    143
                </div>
                {/** REPOST */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <Image className="hover:fill-iconGreen" src="/svg/repost.svg" alt="" height={24} width={24}/>
                    143
                </div>
                {/** COMMENTS */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <Image className="hover:fill-iconBlue" src="/svg/comment.svg" alt="" height={24} width={24}/>
                    143
                </div>
            </div>
            <div className="flex items-center justify-between">
              <Image className="hover:fill-iconBlue" src="/svg/share.svg" alt="" height={24} width={24}/>
            </div>
        </div>
    )
}
export default PostFooter