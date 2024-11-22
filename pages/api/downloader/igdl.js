import axios from "axios"

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }
  const { url } = req.query
  if (!url) {
    return res.status(400).json({ error: q.msg.qUrl })
  }
  const result = await igDl(url)
  if (result.status === "error") {
    return res.status(500).json(result)
  }
  res.status(200).json({
	status: true,
	creator: 'gopalasu',
	result: {
		url: result.url
	}
	})
}

async function igDl(url) {
  let response = await axios.get(`https://aemt.uk.to/download/igdl?url=${url}`)
  return response.data.result
}
