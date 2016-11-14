// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of the state

export default function posts(state = [], action) {
  console.log('the post will change');
  console.log(state, action);
  return state;
}
