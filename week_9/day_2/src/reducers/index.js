import { INCREASE_ONE, DECREASE_ONE } from '../actions/index';
let initState = {
  	counter: 0
}
export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case INCREASE_ONE:
      return {...state, counter:state.counter + 1}
    case DECREASE_ONE:
      return {...state, counter: state.counter - 1}
    default:
      return {...state}
  }
}