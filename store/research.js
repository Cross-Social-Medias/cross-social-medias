export const state = () => ({
  research: ""
})

export const mutations = {
  update (state, text) {
    state.research = text;
  }
}
