// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { pid } = req.query
  res.status(200).json({ name: 'John Doe' })

  res.end(`Post: ${ pid }`)
}
