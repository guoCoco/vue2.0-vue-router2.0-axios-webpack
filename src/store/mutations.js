const increment = state => {
  state.count++
  state.history.push('increment')
}

const decrement = state => {
  state.count--
  state.history.push('decrement')
}

export default {
  increment: increment,
  decrement: decrement
}
