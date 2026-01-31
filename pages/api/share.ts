import type { NextApiRequest, NextApiResponse } from "next";
import imagekit from "@/lib/imagekit.server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { desc, type, sensitive } = req.body;
    const file = req.body.file; // base64 or buffer

    const transformation = `w-600,${
      type === "square" ? "ar-1-1" : type === "wide" ? "ar=16-9" : ""
    }`;

    const result = await imagekit.upload({
      file,
      fileName: "post",
      folder: "/posts",
      transformation: {
        pre: transformation,
      },
      customMetadata: {
        sensitive,
      },
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Upload failed" });
  }
}
