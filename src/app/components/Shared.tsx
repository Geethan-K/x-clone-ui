"use client"
import { shareAction } from "@/actions"
import MediaPage from "./MediaPage"
import { useState } from "react"
import Image from "next/image"
import ImageEditor from "./ImageEditor"




const Shared = () => {
    const [settings, setSettings] = useState<{
        type: "original" | "wide" | "square";
        sensitive: boolean
    }>({
        type: 'original',
        sensitive: false
    })


    const [media, setMedia] = useState<File | null>(null)
    const [isImageEditorOpen, setIsImageEditorOpen] = useState(false)

    const handleMedia = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0])
        }
    }
    const previewURL = media ? URL.createObjectURL(media) : ''





    return (
        <form className="p-4 flex gap-4" action={formData => shareAction(formData, settings)}>
            {/** AVATAR */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <MediaPage path="general/avatar.png" alt="" w={100} h={100} />
            </div>
            {/** OTHERS */}
            <div className="flex-1 flex flex-col gap-4">
                <input type="text" name="desc" placeholder="What's happening?!" className="bg-transparent outline-none placeholder:text-teextGray" />
                {/* PREVIEW IMAGE */}
                {
                    media?.type.includes('image') && previewURL && <div className="relative rounded-xl overflow-hidden">
                        <Image
                            src={previewURL}
                            alt=""
                            width={600}
                            height={600}
                            className={`w-full ${settings.type === "original"
                                ? "h-full object-contain"
                                : settings.type === "square"
                                    ? "aspect-square object-cover"
                                    : "aspect-video object-cover"
                                }`}
                        />
                        <div
                            className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
                            onClick={() => setIsImageEditorOpen(true)}
                        >
                            Edit
                        </div>
                        <div
                            className="absolute flex top-2 right-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full items-center justify-center font-bold text-sm cursor-pointer"
                            onClick={() => setMedia(null)}
                        >
                            X
                        </div>
                    </div>
                }
                {
                    media?.type.includes('video') && previewURL && (
                        <div className="relative">
                            <video src={previewURL} controls></video>
                            <div
                                className="absolute flex top-2 right-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full items-center justify-center font-bold text-sm cursor-pointer"
                                onClick={() => setMedia(null)}
                            >
                                X
                            </div>
                        </div>
                    )
                }
                {
                    isImageEditorOpen && media &&
                    <ImageEditor
                        onClose={() => setIsImageEditorOpen(false)}
                        previewURL={previewURL}
                        settings={settings}
                        setSettings={setSettings}
                    />
                }
                <div className="flex items-center justify-between gap-4 flex-wrap text-xl">
                    <div className="flex flex-wrap gap-4">
                        <input type="file" name="file" className="hidden" id="file" onChange={handleMedia} accept="image/*,video/*" />
                        <label htmlFor="file">
                            <Image src="icons/image.svg" alt="" width={20} height={20} className="cursor-pointer" />
                        </label>
                        <Image src="icons/gif.svg" alt="" width={20} height={20} className="cursor-pointer" />
                        <Image src="icons/poll.svg" alt="" width={20} height={20} className="cursor-pointer" />
                        <Image src="icons/emoji.svg" alt="" width={20} height={20} className="cursor-pointer" />
                        <Image src="icons/schedule.svg" alt="" width={20} height={20} className="cursor-pointer" />
                        <Image src="icons/location.svg" alt="" width={20} height={20} className="cursor-pointer" />
                    </div>
                    <button className="bg-white text-black font-bold rounded-full py-2 px-4">Post</button>
                </div>
            </div>
        </form>
    )
}

export default Shared