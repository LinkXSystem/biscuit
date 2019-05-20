import { SET_HEIGHT } from '../actions/gui';

const initial = {
  height: 0
};

export default (state = initial, action) => {
  switch (action.type) {
    case SET_HEIGHT:
      return Object.assign({}, state, {
        height: action.height
      });
    default:
      return state;
  }
};
