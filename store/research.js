import axios from 'axios';

export const state = () => ({
  research: "AnthonyLastella",
  mapping: {
    twitterUsername: "AnthonyLastella",
    youtubeId: "UCrurr3qbH0VFCwaoIvXOn-Q"
  },
  error: ""
})

export const getters = {
  getResearch: state => state.research
};

export const mutations = {
  UPDATE (state, {research, mapping}) {
    state.research = research;
    state.mapping = Object.assign({}, {twitterUsername: mapping.twitter_username, youtubeId: mapping.youtube_id});
  },
  ADD_ERROR(state, error) {
    state.error = error;
  }
};

export const actions = {
  update({ commit }, { search }) {
    axios.get(`${process.env.serverUrl}/api/v1/search?mapping_name=${search}`)
      .then(response => {
        const { mappings } = response.data;
        const mapping = mappings[0];
        commit('UPDATE', { search, mapping });
      })
      .catch(e => {
        commit('ADD_ERROR', e.response.data.error.message);
      });
  }
};
