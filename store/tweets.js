import axios from 'axios';

export const state = () => ({
  tweets: null,
  title: null,
  error: ""
});

export const mutations = {
  FETCH_TWEETS(state, { tweets, title, error }) {
    state.tweets = tweets.slice();
    state.title = title;
    state.error = "";
  },
  ADD_ERROR(state, error) {
    state.error = error;
  },
  CLEAR(state) {
    state.tweets = null;
    state.title = null;
    state.error = "";
  }
};

export const actions = {
  fetchTweets({ commit }, { search }) {
    commit('CLEAR');
    axios.get(`${process.env.baseUrl}/twitter_entry_point?username=${search}`)
      .then(response => {
        const { tweets, title, error } = response.data;
        commit('FETCH_TWEETS', { tweets, title, error });
      })
      .catch(e => {
        commit('ADD_ERROR', "Something went wrong. The user does not exist or there is a network issue. Please Try again !");
      });
  }
}
