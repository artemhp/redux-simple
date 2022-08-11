const INITIAL_STATE = {
  loginName: 'Anton',
  counter: 5,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action = {}) => {
  if (action.type === 'PLUS') {
    return {
      ...state,
      counter: state.counter + parseInt(action.payload),
    };
  }
  if (action.type === 'MINUS') {
    return {
      ...state,
      counter: state.counter - parseInt(action.payload),
    };
  }
  return state;
};
