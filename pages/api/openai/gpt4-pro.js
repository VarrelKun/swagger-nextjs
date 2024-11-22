import axios from "axios"

export default async function handler(req, res) {
  const { q } = req.query  
  if (!q) {
    return res.status(400).json({
      error: "Text nya mana kocak?"
    })
  }

 if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  let url = `https://aemt.uk.to/gpt4?text=${q}`

  try {
    const response = await axios.get(url)
    const videoUrl = response.data.data.url_list[0]
    res.status(200).json({
      videoUrl
    })
  } catch (e) {
    res.status(500).json({
      error: "Ada masalah, coba lagi nanti"
    })
  }
}