import Navigation from '../../../models/Navigation.js'
// import passwordHash from '../../../useCases/passwordHash.js'
// import token from '../../../middleware/token/token.js'
// import { v4 as uuidv4 } from 'uuid'
// import randomInteger from 'random-int'

export default {
  execute: async (nav) => {
    try {
      const search = await Navigation.find({ session_id: nav.session_id })
      if (search.length > 0) {
        const refresh = await Navigation.updateOne({ session_id: nav.session_id }, {
          $set: { isDeleted: true }
        })
        if (refresh?.modifiedCount === 1) {
          return { message: 'registro deletado com sucesso' }
        }
        return { error: 'não há registro com esse código', status: 404 }
      }
    } catch (error) {
      return { error, status: 500 }
    }
  }
}
