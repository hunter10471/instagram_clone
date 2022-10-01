export interface UserData {
  id: string;
  username: string | null;
  email: string;
}

export interface ReduxUserInitialState {
  currentUser: UserData | null;
}

export interface ReduxUserAction {
  type: string;
  payload: UserData;
}
