import express from 'express'
import insertController from '../controllers/Insert.js'
import searchBySessionIdController from '../controllers/SearchBySessionId.js'
import searchByHashUserController from '../controllers/SearchByHashUser.js'
import deleteController from '../controllers/Delete.js'
import validateNavigationController from '../middleware/validateRoutes/validateNavigationController.js'

const routes = express.Router()

routes.post('/insert', validateNavigationController.execute, insertController.execute)
routes.get('/session_id', searchBySessionIdController.execute)
routes.get('/hash_user', searchByHashUserController.execute)
routes.delete('/delete', deleteController.execute)

export default routes