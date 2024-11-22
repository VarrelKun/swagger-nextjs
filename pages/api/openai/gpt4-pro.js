import axios from "axios"

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }
  const { q } = req.query
  if (!q) {
    return res.status(400).json({ error: q.msg.qUrl })
  }
  const result = await openAi(q)
  if (result.status === "error") {
    return res.status(500).json(result)
  }
  res.status(200).json({
	status: true,
	creator: 'gopalasu',
	result: result
	})
}

async function openAi(q) {
  let response = await axios.get(`https://aemt.uk.to/gpt4?text=${q}`)
  return response.data.result
}
