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
  UPDATE (state, {search, mapping}) {
    state.research = search;
    const { twitter_username, youtube_channel_id } = mapping;
    state.mapping = Object.assign({}, {twitterUsername: twitter_username || "", youtubeId: youtube_channel_id || ""});
    console.log(Object.assign({}, {twitterUsername: twitter_username || "", youtubeId: youtube_channel_id || ""}));
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
        const mapping = mappings[0] || [];
        console.log("mapping ", mapping)
        commit('UPDATE', { search, mapping });
      })
      .catch(e => {
        commit('ADD_ERROR', e.response.data.error.message);
      });
  }
};
