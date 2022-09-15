import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

export default {
  connectToDatabase: () => {
    mongoose.connect(
      process.env.MONGO_URL,
      {},
      error => {
        const message = error
          ? `falha ao conectar no mmongo ${error}`
          : '⚡️ MongoDB connection established successfully'
        console.log(message)
      }
    )
  }
}
