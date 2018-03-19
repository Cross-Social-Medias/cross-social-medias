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
        const { data } = response.data;
        commit('FETCH_MAPPINGS', data);
      })
      .catch(e => {
        commit('ADD_ERROR', "Something went wrong. The mappings does not exist or there is a network issue. Please Try again !");
      });
  },
  fetchMappingsMock({ commit }) {
    const mock = [
      { "twitter_username": "AnthonyLastella", "mapping_name": "Anthony Lastella", "instagram_username": "anthonyLastella", "youtube_channel_id": "UCrurr3qbH0VFCwaoIvXOn-Q" },
      { "twitter_username": "Ber", "mapping_name": "Bertrand Dupond", "instagram_username": "fake_insta", "youtube_channel_id": "jdklgkdgldskd" },
      { "twitter_username": "zemog_emualliug", "mapping_name": "Guillaume Gomez", "instagram_username": "fake_insta2", "youtube_channel_id": "jdfkgd" }
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
