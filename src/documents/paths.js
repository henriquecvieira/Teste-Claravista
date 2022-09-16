import insert from './paths/insert.js'
import searchBySessionId from './paths/searchBySessionId.js'
import searchByHashUser from './paths/searchByHashUser.js'
import Delete from './paths/Delete.js'
const paths = Object.assign(
  insert,
  searchBySessionId,
  searchByHashUser,
  Delete

)

export default paths
