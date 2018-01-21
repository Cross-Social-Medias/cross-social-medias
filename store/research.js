export const state = () => ({
  research: "AnthonyLastella"
})

export const getters = {
  getResearch: state => state.research
}

export const mutations = {
  update (state, text) {
    state.research = text;
  }
}
