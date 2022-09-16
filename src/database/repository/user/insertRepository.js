import Navigation from '../../../models/Navigation.js'
// import query from '../../../database/query/updateQueryNavigation.js'
// import passwordHash from '../../../useCases/passwordHash.js'
// import token from '../../../middleware/token/token.js'
// import { v4 as uuidv4 } from 'uuid'

export default {
  execute: async (nav) => {
    try {
      const search = await Navigation.find({ session_id: nav.session_id })
      if (search.length > 0) {
        const refresh = await Navigation.updateOne({
          session_id: nav.session_id
        },
        {
          $push: {
            navigations:
              {
                url: nav.url,
                url_base: nav.url_base,
                endpoint: nav.endpoint,
                navigated_in: nav.created_at
              }
          },
          $set: {
            updated_at: Date.now()
          }
        })
        if (refresh?.modifiedCount === 1) {
          return { message: 'registro cadastrado com sucesso' }
        }
        return { error: 'não foi possivel cadastrar', status: 500 }
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
