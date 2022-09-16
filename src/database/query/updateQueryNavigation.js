export default {
  execute: async (nav) => {
    return (
      {
        session_id: { $eq: nav.session_id }
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
      }
    )
  }
}
