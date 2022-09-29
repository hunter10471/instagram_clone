import {
  ReduxUserInitialState,
  ReduxUserAction,
} from './../../interfaces/User.interface';
import {} from 'redux';

const initialState: ReduxUserInitialState = {
  currentUser: null,
};

export const user = (state = initialState, action: ReduxUserAction) => {
  return {
    ...state,
    currentUser: action.payload,
  };
};
