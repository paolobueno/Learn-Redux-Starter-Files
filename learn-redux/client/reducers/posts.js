// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of the state

export default function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0,i), // previous posts
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1) // previous posts
      ];
    default:
      return state;
  }
}
