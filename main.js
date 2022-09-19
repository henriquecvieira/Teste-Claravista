import express from 'express'
import Routes from './src/routes/routes.js'
import dotenv from 'dotenv'
import database from './src/database/database.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './src/documents/swagger.js'
import cors from 'cors'

database.connectToDatabase()

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())
app.use('/v1', Routes)

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  swaggerOptions: {
    defaultModelsExpandDepth: -1,
    docExpansion: 'none'
  }
}))

app.route('/healthcheck').get((_, res) => res.status(200).json({ msg: 'OK' }))

app.all('*', (_, res) => res.status(404).json({ message: 'Not found!' }))

app.listen(process.env.URL, () => {
  console.log('⚡️ URL DOCERIA')
})
app.listen(process.env.PORT, () => {
  console.log('⚡️ Server is running at https://localhost:3000!')
})
