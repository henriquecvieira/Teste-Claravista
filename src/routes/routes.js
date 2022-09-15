import express from 'express'
import Navigation from '../controllers/Navigation.js'
import NavigationSession from '../controllers/NavigationSession.js'
import NavigationHash from '../controllers/NavigationHash.js'
import NavigationDelete from '../controllers/NavigationDelete.js'
// import validateRegister from '../middleware/validateRoutes/validateRegister.js'
// import validateAuth from '../middleware/token/auth.js'

const routes = express.Router()

routes.post('/navigation', Navigation.navigation)
routes.get('/navigation/session_id', NavigationSession.navigationSession)
routes.get('/navigation', NavigationHash.navigationHash)
routes.delete('/navigationdelete', NavigationDelete.navigationDelete)
// routes.get('/navigation?session_id', validateAuth.auth, validateAvgProduction.execute, productionController.averageProduction)
// routes.get('/navigation?hash_user', validateAuth.auth, validateAvgYearProduction.execute, productionController.milkAvgYearProduction)
// routes.delete('/navigation/', validateAuth.auth, validateAvgYearProduction.execute, productionController.milkAvgYearProduction)

export default routes
