import Navigation from '../../../models/Navigation.js'
// import passwordHash from '../../../useCases/passwordHash.js'
// import token from '../../../middleware/token/token.js'
// import { v4 as uuidv4 } from 'uuid'
// import randomInteger from 'random-int'

export default {
  execute: async (nav) => {
    try {
      const search = await Navigation.find({ $and: [{ hash_user: nav.hash_user }, { isDeleted: { $exists: false } }] })
      if (search.length === 0) {
        return { error: 'hash_user não existe', status: 404 }
      }
      return search
    } catch (error) {
      return { error, status: 500 }
    }
  }
}
