import express from 'express'
import insertController from '../controllers/Insert.js'
import searchBySessionIdController from '../controllers/SearchBySessionId.js'
import searchByHashUserController from '../controllers/SearchByHashUser.js'
import deleteController from '../controllers/Delete.js'
// import validateRegister from '../middleware/validateRoutes/validateRegister.js'
// import validateAuth from '../middleware/token/auth.js'

const routes = express.Router()

routes.post('/navigation', insertController.execute)
routes.get('/navigationsession', searchBySessionIdController.execute)
routes.get('/navigationhash', searchByHashUserController.execute)
routes.delete('/navigation', deleteController.execute)

export default routes
