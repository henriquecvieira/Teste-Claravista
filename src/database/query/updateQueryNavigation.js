export default {
  execute: async (url, url_base, endpoint, created_at, session_id) => {
    return [
      {
        session_id
      },
      {
        $push: {
          navigations:
            {
              url,
              url_base,
              endpoint,
              navigated_in: created_at
            }
        },
        $set: {
          updated_at: Date.now()
        }
      }
    ]
  }
}
