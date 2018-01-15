import Vuex from 'vuex'

import research from './research'

const createStore = () => {
  return new Vuex.Store({
    state: {
      research: ""
    },
    research
  })
}

export default createStore
