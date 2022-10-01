import { UserData } from './User.interface';

export interface RegisterState {
  username: string;
  email: string;
  password: string;
}

export interface RegisterReducerAction {
  type: string;
  payload: string;
}

export interface LoginState {
  email: string;
  password: string;
}

export interface LoginReducerAction {
  type: string;
  payload: string;
}

export interface ReduxLoginInitState {
  user: UserData | undefined;
  error: boolean;
  isFetching: boolean;
}

export interface LoginPayload {
  id: string;
  email: string;
  username: string | null;
}
