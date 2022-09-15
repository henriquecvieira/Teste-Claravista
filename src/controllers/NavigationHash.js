import navigationHashRepository from '../database/repository/user/navigationHashRepository.js'

export default {
  navigationHash: async (req, res) => {
    try {
      const nav = req.body
      const result = await navigationHashRepository.execute(nav)
      if (result.error) {
        return res.status(result.status).json(result)
      }
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}
