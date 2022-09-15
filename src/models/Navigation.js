import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const { model, Schema } = mongoose

const schema = new Schema({

  session_id: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  url_base: {
    type: String,
    required: true
  },
  endpoint: {
    type: String,
    required: true
  },
  hash_user: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  navigated_in: {
    type: Date,
    default: () => Date.now()
  },
  navigations: [{
    url: {
      type: String
    },
    url_base: {
      type: String
    },
    endpoint: {
      type: String
    },
    navigated_in: {
      type: String
    }
  }],
  _id: {
    type: String,
    default: () => uuidv4()
  }

})

export default model('testeClaravista', schema, 'testeClaravista')
