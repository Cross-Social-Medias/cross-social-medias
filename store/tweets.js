export const state = () => ({
  tweets: null
})

export const mutations = {
  getTweets(state, tweets) {
    state.tweets = tweets.slice();
  }
}
