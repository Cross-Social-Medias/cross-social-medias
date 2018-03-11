import axios from 'axios'
export default {
  auth: {
    me: () => axios.get(`fakeUrl`),
    login: (data) => axios.post(`${process.env.serverUrl}/api/v1/sign_in`, data)
  }
}
