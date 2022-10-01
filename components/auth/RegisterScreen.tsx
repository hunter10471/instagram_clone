import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useReducer } from 'react';
import {
  RegisterReducerAction,
  RegisterState,
} from '../../interfaces/Auth.interface';
import { registerUser } from '../../redux/apiCalls/user/auth';
import { useDispatch } from 'react-redux';

const ReducerInitialState = {
  username: '',
  email: '',
  password: '',
};

const reducer = (state: RegisterState, action: RegisterReducerAction) => {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    default:
      return { ...state, password: action.payload };
  }
};

const RegisterScreen = () => {
  const [state, dispatch] = useReducer(reducer, ReducerInitialState);
  const dispatchUser = useDispatch();
  const onSignUp = async () => {
    const { email, username, password } = state;
    await registerUser({ email, username, password }, dispatchUser);
  };

  return (
    <View>
      <TextInput
        placeholder='Username'
        onChangeText={(payload) => dispatch({ type: 'username', payload })}
      />
      <TextInput
        placeholder='Email'
        onChangeText={(payload) => dispatch({ type: 'email', payload })}
      />
      <TextInput
        placeholder='Password'
        secureTextEntry
        onChangeText={(payload) => dispatch({ type: 'password', payload })}
      />
      <Button onPress={onSignUp} title='Sign Up' />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
