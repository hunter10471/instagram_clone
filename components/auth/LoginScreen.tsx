import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useReducer } from 'react';
import {
  LoginReducerAction,
  LoginReducerState,
} from '../../interfaces/Auth.interface';
import { getAuth } from '../../config/firebase/index';
import { signInWithEmailAndPassword } from 'firebase/auth';

type Props = {};

const ReducerInitialState = {
  email: '',
  password: '',
};

const reducer = (state: LoginReducerState, action: LoginReducerAction) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    default:
      return { ...state, password: action.payload };
  }
};

const LoginScreen = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, ReducerInitialState);
  const onSignUp = async () => {
    const { email, password } = state;
    const auth = getAuth();
    try {
      const createUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(createUser.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
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

export default LoginScreen;

const styles = StyleSheet.create({});
