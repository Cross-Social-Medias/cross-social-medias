import cookies from 'js-cookie'

import {setAuthToken, resetAuthToken} from '~/utils/auth'
import api from '~/api'

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER (store, data) {
    store.user = data;
  },
  RESET_USER (store) {
    store.user = null;
  }
}

export const actions = {
  fetch ({ commit }) {
    return api.auth.me()
      .then(response => {
        commit('SET_USER', response.data.result)
        return response;
      })
      .catch(error => {
        commit('RESET_USER')
        return error;
      })
  },
  login ({ commit }, data) {
    return api.auth.login(data)
      .then(response => {
        const user = Object.assign({}, response.data.user, { token: response.data.token });
        commit('SET_USER', user);
        setAuthToken(response.data.token);
        cookies.set('x-access-token', response.data.token, {expires: 7});
        return response;
      })
  },
  reset ({ commit }) {
    commit('RESET_USER');
    resetAuthToken();
    cookies.remove('x-access-token');
    return Promise.resolve();
  },
  fetchMock({ commit }) {
    const fakeUser = {id: 1, email: "admin@admin.fr"};
    commit('SET_USER', fakeUser);
    return Promise.resolve({ response: { data: { message: "You're connected." }, status: 200 } });
  },
  loginMock({ commit }, data) {
    const { password, email } = data;
    if (email === "admin@admin.fr" && password === "admin") {
      const fakeUser = {id: 1, email: "admin@admin.fr"};
      commit('SET_USER', fakeUser);
      setAuthToken(data.token);
      cookies.set('x-access-token', data.token, {expires: 7});
      return Promise.resolve({ data: { message: "You're connected." } });
    }
    return Promise.reject({ response: { data: { message: "Password or email are invalid." }, status: 403 } });
  }
}
