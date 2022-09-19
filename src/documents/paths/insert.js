export default
{
  '/v1/insert/home': {
    post: {
      summary: 'Action registration',
      description: 'Register a Action',
      tags: ['Insert'],
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Action registration',
          required: true,
          schema: {
            type: 'object',
            properties: {
              session_id: {
                type: 'string',
                example: '6'
              },
              url: {
                type: 'string',
                example: 'HTTPS://ECOMMERCE.COM.BR/HOME'
              },
              url_base: {
                type: 'string',
                example: 'HTTPS://ECOMMERCE.COM.BR'
              },
              endpoint: {
                type: 'string',
                example: '/home'
              },
              hash_user: {
                type: 'string',
                example: '15'
              },
              created_at: {
                type: 'string',
                example: '15/09/2022'
              }
            }
          }
        }
      ],
      responses: {
        201: {
          description: 'Action successfully registered'
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
}
