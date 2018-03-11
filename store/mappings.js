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
    axios.get(`${process.env.serverUrl}/api/v1/social_media_mappings`)
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
      { "twitter_username": "AnthonyLastellaMock", "mapping_name": "Anthony Lastella", "instagram_username": "anthonyLastella" },
      { "twitter_username": "BerMock", "mapping_name": "Bertrand Dupond", "instagram_username": "fake_insta" },
      { "twitter_username": "zemog_emualluigMock", "mapping_name": "Guillaume Gomez", "instagram_username": "fake_insta2" }
    ];
    commit('FETCH_MAPPINGS', mock);
  }
}
