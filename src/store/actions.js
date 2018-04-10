const increment = ({ commit }) => commit('increment')
const decrement = ({ commit }) => commit('decrement')

const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}

export default {
  increment: increment,
  decrement: decrement,
  incrementIfOdd: incrementIfOdd
}
