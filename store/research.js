import axios from 'axios';

export const state = () => ({
  research: "AnthonyLastella",
  mapping: {
    twitterUsername: "AnthonyLastella",
    youtubeId: "UCrurr3qbH0VFCwaoIvXOn-Q"
  },
  suggestionMappings: [],
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
  },
  RESEARCH(state, {mappings}) {
    state.suggestionMappings = mappings.slice();
  }
};

export const actions = {
  update({ commit }, { search, mapping }) {
    commit('UPDATE', { search, mapping });
  },
  search({ commit }, { search }) {
    axios.get(`${process.env.serverUrl}/api/v1/search?mapping_name=${search}`)
      .then(response => {
        const { mappings } = response.data;
        commit('RESEARCH', { mappings });
      })
      .catch(e => {
        commit('ADD_ERROR', e.response.data.error.message);
      });
  },
  searchMock({ commit }, { search }) {
    const mappings = [
      {mapping_name: "test", twitter_username: "test", youtube_channel_id: "123456"},
      {mapping_name: "test2", twitter_username: "test2", youtube_channel_id: "123456"},
      {mapping_name: "other", twitter_username: "other", youtube_channel_id: "123456"},
      {mapping_name: "other2", twitter_username: "other2", youtube_channel_id: "123456"},
      {mapping_name: "test3", twitter_username: "test3", youtube_channel_id: "123456"},
      {mapping_name: "test4", twitter_username: "test4", youtube_channel_id: "123456"}
    ];
    return mappings.filter(mapping => mapping.mapping_name.toLowerCase().includes(search.toLowerCase()));
  }
};
