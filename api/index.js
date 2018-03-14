import axios from 'axios'
import cookies from 'js-cookie';
import {setAuthToken, resetAuthToken} from '~/utils/auth';

export default {
  auth: {
    me: () => axios.get(`fakeUrl`),
    login: (data) => axios.post(`${process.env.serverUrl}/api/v1/sign_in`, data)
  }
}

const token = cookies.get('x-access-token');
const user = cookies.get('user');
if (token) {
  setAuthToken(token);
} else {
  resetAuthToken();
}
