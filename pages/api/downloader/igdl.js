import axios from "axios"
import instagram from "nayan-media-downloader"
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }
  const { url } = req.query
  if (!url) {
    return res.status(400).json({ error: q.msg.qUrl })
  }
  const { data } = await igDl(url)
  if (data.status === "error") {
    return res.status(500).json(data)
  }
  res.status(200).json(data)
}