export const state = () => ({
  research: "AnthonyLastella",
  mapping: {
    twitterUsername: "AnthonyLastella",
    youtubeId: "UCrurr3qbH0VFCwaoIvXOn-Q"
  }
})

export const getters = {
  getResearch: state => state.research
}

export const mutations = {
  update (state, text) {
    state.research = text;
  }
}
