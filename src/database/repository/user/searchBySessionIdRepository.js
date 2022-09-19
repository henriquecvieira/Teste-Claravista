import Navigation from '../../../models/Navigation.js'


export default {
  execute: async (nav) => {
    try {
      const search = await Navigation.find({ $and: [{ session_id: nav.session_id }, { isDeleted: { $exists: false } }] })
      if (search.length === 0) {
        return { error: 'session_id não existe', status: 404 }
      }
      return search
    } catch (error) {
      return { error, status: 500 }
    }
  }
}

