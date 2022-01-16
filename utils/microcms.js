const { createClient } = require('microcms-js-sdk');
require('dotenv').config();
const { GET_API_KEY, SERVICE_DOMAIN } = process.env;
export const client = createClient({
  serviceDomain: SERVICE_DOMAIN,
  apiKey: GET_API_KEY,
});