export interface RegisterReducerState {
  username: string;
  email: string;
  password: string;
}

export interface RegisterReducerAction {
  type: string;
  payload: string;
}

export interface LoginReducerState {
  email: string;
  password: string;
}

export interface LoginReducerAction {
  type: string;
  payload: string;
}
