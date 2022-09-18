import express from 'express'
import insertController from '../controllers/Insert.js'
import searchBySessionIdController from '../controllers/SearchBySessionId.js'
import searchByHashUserController from '../controllers/SearchByHashUser.js'
import deleteController from '../controllers/Delete.js'
import validateNavigationController from '../middleware/validateRoutes/validateNavigationController.js'
import auth from '../middleware/token/auth.js'

const routes = express.Router()

routes.post('/insert/home', validateNavigationController.execute, insertController.execute, auth.validateToken)
routes.get('/session_id', searchBySessionIdController.execute)
routes.get('/hash_user', searchByHashUserController.execute)
routes.delete('/delete', deleteController.execute)

export default routes
