const initialState = { text: 'Hello World!', value: 1 };

const test = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE': {
      return Object.assign({}, state, { value: action.value + 1 });
    }
    default:
      return state;
  }
};

export default test;
