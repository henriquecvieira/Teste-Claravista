export default {
  '/v1/navigationhash': {
    get: {
      tags: ['Search By Hash_User'],
      description: '',
      parameters: [
        {
          in: 'query',
          name: 'hash_user',
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
