const navigationControllerSchema = {
  type: 'object',
  properties: {
    session_id: { type: 'string' },
    url: { type: 'string' },
    url_base: { type: 'string' },
    endpoint: { type: 'string' },
    hash_user: { type: 'string' },
    created_at: { type: 'string' }
  },
  required: ['session_id', 'url', 'url_base', 'endpoint', 'hash_user', 'created_at'],
  additionalProperties: false
}

export default navigationControllerSchema
