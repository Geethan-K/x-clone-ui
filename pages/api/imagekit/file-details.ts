import type { NextApiRequest, NextApiResponse } from "next";
import imagekit from "@/lib/imagekit.server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fileId } = req.query;

  if (!fileId || typeof fileId !== "string") {
    return res.status(400).json({ error: "fileId required" });
  }

  try {
    const result = await imagekit.getFileDetails(fileId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "ImageKit error" });
  }
}
