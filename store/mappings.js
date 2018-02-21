import axios from 'axios';

export const state = () => ({
  mappings: null,
  error: ""
});

export const mutations = {
  FETCH_MAPPINGS(state, mappings) {
    state.mappings = mappings.slice();
  },
  ADD_MAPPING(state, mapping) {
    state.mappings = [...state.mappings, mapping];
  },
  ADD_ERROR(state, error) {
    state.error = error;
  }
};

export const actions = {
  fetchMappings({ commit }) {
    axios.get(`link_api/api/v1/social_media_mappings`)
      .then(response => {
        const { data } = response.data;
        commit('FETCH_MAPPINGS', data);
      })
      .catch(e => {
        commit('ADD_ERROR', "Something went wrong. The mappings does not exist or there is a network issue. Please Try again !");
      });
  },
  fetchMappingsMock({ commit }) {
    const mock = [
      { "twitter_username": "AnthonyLastella", "mapping_name": "Anthony Lastella", "instagram_username": "anthonyLastella" },
      { "twitter_username": "Ber", "mapping_name": "Bertrand Dupond", "instagram_username": "fake_insta" },
      { "twitter_username": "zemog_emualluig", "mapping_name": "Guillaume Gomez", "instagram_username": "fake_insta2" }
    ];
    commit('FETCH_MAPPINGS', mock);
  },
  addMapping({ commit }, { mapping }) {
    axios.post(`http://8d5d2770.ngrok.io/api/v1/social_media_mappings`, mapping)
      .then(response => {
        const { data } = response.data;
        commit('ADD_MAPPING', data);
      })
      .catch(e => {
        commit('ADD_ERROR', "Something went wrong. The mappings does not exist or there is a network issue. Please Try again !");
      });
  }
}
