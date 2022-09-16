import repository from '../database/repository/user/deleteRepository.js'

export default {
  execute: async (req, res) => {
    try {
      const nav = req.body
      const result = await repository.execute(nav.session_id)
      if (result.error) {
        return res.status(result.status).json(result)
      }
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}
