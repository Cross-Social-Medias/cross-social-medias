export const state = () => ({
  research: ""
})

export const getters = {
  getResearch: state => state.research
}

export const mutations = {
  update (state, text) {
    console.log(text);
    state.research = text;
  }
}
