export interface UserData {
  username: string;
  email: string;
}

export interface ReduxUserInitialState {
  currentUser: UserData | null;
}

export interface ReduxUserAction {
  type: string;
  payload: Partial<UserData>;
}
