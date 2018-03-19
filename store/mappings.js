import axios from 'axios';

export const state = () => ({
  mappings: null,
  error: "res"
});

export const mutations = {
  FETCH_MAPPINGS(state, mappings) {
    state.mappings = mappings.slice();
  },
  ADD_MAPPING(state, mapping) {
    if (!state.mappings) {
      state.mappings = [mapping];
    } else {
      state.mappings = [...state.mappings, mapping];
    }
  },
  ADD_ERROR(state, error) {
    state.error = error;
  }
};

export const actions = {
  fetchMappings({ commit }) {
    axios.get(`${process.env.serverUrl}/api/v1/social_media_mappings`)
      .then(response => {
        const { mappings } = response.data;
        commit('FETCH_MAPPINGS', mappings);
      })
      .catch(e => {
        commit('ADD_ERROR', "Something went wrong. The mappings does not exist or there is a network issue. Please Try again !");
      });
  },
  fetchMappingsMock({ commit }) {
    const mock = [
      { "twitterUsername": "AnthonyLastellaMock", "mappingName": "Anthony Lastella", "instagramUsername": "anthonyLastella" },
      { "twitterUsername": "BerMock", "mappingName": "Bertrand Dupond", "instagramUsername": "fake_insta" },
      { "twitterUsername": "zemog_emualluigMock", "mappingName": "Guillaume Gomez", "instagramUsername": "fake_insta2" }
    ];
    commit('FETCH_MAPPINGS', mock);
  },
  addMapping({ commit }, { mapping }) {
    axios.post(`${process.env.serverUrl}/api/v1/social_media_mappings`, mapping)
      .then(response => {
        const { data } = response.data;
        commit('ADD_MAPPING', data);
      })
      .catch(e => {
        commit('ADD_ERROR', "Something went wrong. The mappings does not exist or there is a network issue. Please Try again !");
      });
  },
  addMappingMock({ commit }, { mapping }) {
    commit('ADD_MAPPING', mapping);
  }
}
