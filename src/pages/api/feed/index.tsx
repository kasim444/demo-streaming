import { sampleFeedData } from '@/utils/sample-data'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!sampleFeedData || Object.keys(sampleFeedData).length === 0) {
      throw new Error('Cannot find feed data')
    }

    res.status(200).json(sampleFeedData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
