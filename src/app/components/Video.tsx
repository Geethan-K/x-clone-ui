"use client"
import { Video } from '@imagekit/next';

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoType = {
    path: string,
    className?: string
}
const VideoPage = ({ path, className }: VideoType) => {
    return (
        <Video
            urlEndpoint={urlEndpoint}
            className={className}
            src={path}
            controls
            transformation={[{ width: '1920', height: '1080', quality: 90 }]}
        // width={500}
        // height={500}
        />
    )
}

export default VideoPage