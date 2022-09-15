import Navigation from '../../../models/Navigation.js'
// import passwordHash from '../../../useCases/passwordHash.js'
// import token from '../../../middleware/token/token.js'
// import { v4 as uuidv4 } from 'uuid'
// import randomInteger from 'random-int'

export default {
  execute: async (nav) => {
    try {
      // const search = await Navigation.findOne( nav[0].session_id )
      const search = await Navigation.find({ session_id: 3 })
      if (!search) {
        return (search.status).json(search)
      }
      return search
    } catch (error) {
      return { error, status: 500 }
    }
  }
}
