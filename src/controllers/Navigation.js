import navigationRepository from '../database/repository/user/navigationRepository.js'

export default {
  navigation: async (req, res) => {
    try {
      const nav = req.body
      const result = await navigationRepository.execute(nav)
      if (result.error) {
        return res.status(result.status).json(result)
      }
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}
