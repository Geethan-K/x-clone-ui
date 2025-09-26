import { error } from "console"
import ImageKit from "imagekit"
import { arrayBuffer } from "stream/consumers"

export const imagekit = new ImageKit({
    publicKey:process.env.NEXT_PUBLIC_PUBLIC_KEY!,
    privateKey:process.env.PRIVATE_KEY!,
    urlEndpoint:process.env.NEXT_PUBLIC_URL_ENDPOINT!
})

