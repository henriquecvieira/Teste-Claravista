import repository from '../database/repository/user/searchBySessionIdRepository.js'

export default {
  execute: async (req, res) => {
    try {
      const nav = req.query
      const result = await repository.execute(nav)
      if (result.error) {
        return res.status(result.status).json(result)
      }
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}
