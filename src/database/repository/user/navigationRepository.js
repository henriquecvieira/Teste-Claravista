import Navigation from '../../../models/Navigation.js'
import query from '../../../database/query/updateQueryNavigation.js'
// import passwordHash from '../../../useCases/passwordHash.js'
// import token from '../../../middleware/token/token.js'
// import { v4 as uuidv4 } from 'uuid'
// import randomInteger from 'random-int'

export default {
  execute: async (nav) => {
    try {
      const search = await Navigation.find({ session_id: nav.session_id })
      if (search.length > 0) {
        const x = query.execute(
          nav.session_id,
          nav.url,
          nav.url_base,
          nav.endpoint,
          nav.created_at,
          nav.session_id)
        const refresh = await Navigation.updateOne(x)
        return refresh
      }
      const result = await Navigation.create(nav)
      // const tokenGeneration = token.generationToken({ navigation: result })
      // const resultUser = {
      //   token: tokenGeneration
      // }
      return result
    } catch (error) {
      return { error, status: 500 }
    }
  }
}
