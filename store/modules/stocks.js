import stocks from '../../data/stocks'

const state = {
  main_stocks: []
};

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.main_stocks = stocks
    //console.log(this.main_stocks);
  },
}


const getters = {
  stocks: (state) => {
    return state.main_stocks;
  },

}


const actions = {
  buyStock: ({
    commit
  }, order) => {
    commit();
  },
  initStock: ({
    commit
  }) => {
    commit('SET_STOCKS', stocks)
    //console.log(stocks);
  },
  randomStock: ({
    commit
  }) => {
    commit('RND_STOCKS')
  },
  logData: ({
    commit
  }) => {
    commit('LOAD_DATA')
  }
};



export default {
  state,
  mutations,
  actions,
  getters
}
