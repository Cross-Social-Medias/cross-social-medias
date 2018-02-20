import axios from 'axios';

export const state = () => ({
  mappings: null,
  error: ""
});

export const mutations = {
  FETCH_MAPPINGS(state, mappings) {
    state.mappings = mappings.slice();
  },
  ADD_ERROR(state, error) {
    state.error = error;
  }
};

export const actions = {
  fetchMappings({ commit }) {
    axios.get(`http://localhost:4000/api/v1/social_media_mappings`)
      .then(response => {
        const { mappings } = response.data;
        commit('FETCH_MAPPINGS', mappings);
      })
      .catch(e => {
        commit('ADD_ERROR', "Something went wrong. The mappings does not exist or there is a network issue. Please Try again !");
      });
  }
}
