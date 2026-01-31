import {  Image , ImageKitProvider } from '@imagekit/react';

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT
type ImgType = {
    path:string;
    w?:number;
    h?:number;
    alt:string;
    className?:string;
    tr?:boolean
}
const MediaPage = ({path,w,h,alt,className,tr}:ImgType) => {
    return (
        <ImageKitProvider 
            urlEndpoint={urlEndpoint}
            
        >
            <Image 
            src={path} 
            width={w}
            height={h}
            alt={alt} 
            {...(tr ? {transformation:[{width:`${w}` , height:`${h}`}]} : {height:h , width:w})}
            
            />
        </ImageKitProvider>
    )
}

export default MediaPage