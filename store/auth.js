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
        commit('SET_USER', response.data.user)
        return response;
      })
  },
  reset ({ commit }) {
    commit('RESET_USER')
    return Promise.resolve()
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
      return Promise.resolve({ response: { data: { message: "You're connected." }, status: 200 } });
    }
    return Promise.reject({ response: { data: { message: "Password or email are invalid." }, status: 403 } });
  }
}
