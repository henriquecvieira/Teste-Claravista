import navigationSessionRepository from '../database/repository/user/navigationSessionRepository.js'

export default {
  navigationSession: async (req, res) => {
    try {
      const nav = req.body
      const result = await navigationSessionRepository.execute(nav.session_id)
      if (result.error) {
        return res.status(result.status).json(result)
      }
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}
