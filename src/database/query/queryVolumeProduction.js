export default {
  execute: async (dateYear, dateMonth, farmCod) => {
    return [
      {
        _id: UUID("48b17b87-0254-413d-9371-35e74b1955ee")
    },
    {
        $push: {
            testePush: 
            {
                name: 'Henrique'
            }
        },
        $set : {
          updated_at : 'HOJE'
        }
    }
    ]
  }
}
