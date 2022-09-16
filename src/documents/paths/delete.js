export default {
  '/v1/navigationDelete': {
    delete: {
      tags: ['Delete'],
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
