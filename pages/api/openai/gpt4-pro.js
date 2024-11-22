import axios from "axios"

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Aoa Jir' })
  }  
  const { q } = req.query  
  if (!q) {
    return res.status(400).json({ error: "Aoa Jir" })
  }
  let url = `https://aemt.uk.to/gpt4?text=${q}`

  try {
    const response = await axios.get(url)
    const tol = response.result
    res.status(200).json({
      tol
    })
  } catch (e) {
    res.status(500).json({
      error: "Ada masalah, coba lagi nanti"
    })
  }
}