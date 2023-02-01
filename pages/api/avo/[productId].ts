import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const getIdByProduct = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const db = new DB()

  const id = request?.query?.productId
  const idAvocado = await db.getById(id as string)

  response.status(200).json(idAvocado)
}

export default getIdByProduct
