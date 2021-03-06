import cookie from 'cookie';
import {setAuthToken, resetAuthToken} from '~/utils/auth';

export const actions = {
  nuxtServerInit ({dispatch}, context) {
    return new Promise((resolve, reject) => {
      const cookies = cookie.parse(context.req.headers.cookie || '');
      if (cookies.hasOwnProperty('x-access-token')) {
        setAuthToken(cookies['x-access-token']);
        dispatch('auth/fetch')
        // dispatch('auth/fetchMock')
          .then(result => {
            resolve(true);
          })
          .catch(_error => {
            resetAuthToken();
            resolve(false);
          });
      } else {
        resetAuthToken();
        resolve(false);
      }
    })
  }
}
