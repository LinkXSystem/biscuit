import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import gui from './gui';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    gui
  });
}
