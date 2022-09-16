export default {
  '/v1/navigationsession': {
    get: {
      tags: ['Search By Session_Id'],
      description: '',
      parameters: [
        {
          in: 'query',
          name: 'session_id',
          required: true
        }
      ],
      responses: {
        200: {
          description: 'OK'
        }
      },
      400: {
        description: 'Error: bad request'
      },
      500: {
        description: 'Internal server Error'
      }
    }
  }
}
