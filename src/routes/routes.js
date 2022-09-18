import express from 'express'
import insertController from '../controllers/Insert.js'
import searchBySessionIdController from '../controllers/SearchBySessionId.js'
import searchByHashUserController from '../controllers/SearchByHashUser.js'
import deleteController from '../controllers/Delete.js'
import validateNavigationController from '../middleware/validateRoutes/validateNavigationController.js'

const routes = express.Router()

routes.post('/navigation', validateNavigationController.execute, insertController.execute)
routes.get('/navigationsession', searchBySessionIdController.execute)
routes.get('/navigationhash', searchByHashUserController.execute)
routes.delete('/navigationdelete', deleteController.execute)

export default routes