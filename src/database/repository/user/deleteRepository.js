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
        const refresh = await Navigation.deleteOne({ session_id: 2 })
        if (refresh?.deletedCount === 1) {
          return { message: 'registro deletado com sucesso' }
        }
        return { error: 'não foi possivel deletar', status: 500 }
      }
    } catch (error) {
      return { error, status: 500 }
    }
  }
}
