import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const generationToken = (params) => {
  const token = jwt.sign(
    {
      params
    },
    process.env.SECRET,
    { expiresIn: Number(process.env.EXPIRES) }
  )

  return token
}

export default { generationToken }
