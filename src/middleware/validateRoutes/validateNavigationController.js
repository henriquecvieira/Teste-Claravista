import Ajv from 'ajv'
import schemaNavigationController from '../validateSchema/schemaNavigationController.js'

const ajv = new Ajv({ allErrors: true })

export default {
  execute: (req, res, next) => {
    const nav = req.body
    const navValidate = ajv.compile(schemaNavigationController)
    const validateNav = navValidate(nav)

    if (!validateNav) {
      return res.status(400).json({ message: navValidate.errors })
    }
    return next()
  }
}
