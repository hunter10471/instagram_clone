import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useReducer, useState } from 'react';
import {
  RegisterReducerAction,
  RegisterReducerState,
} from '../../interfaces/Auth.interface';
import {
  collection,
  createUserWithEmailAndPassword,
  doc,
  getAuth,
  getFirestore,
  setDoc,
} from '../../config/firebase/index';

type Props = {};

const ReducerInitialState = {
  username: '',
  email: '',
  password: '',
};

const reducer = (
  state: RegisterReducerState,
  action: RegisterReducerAction
) => {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    default:
      return { ...state, password: action.payload };
  }
};

const RegisterScreen = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, ReducerInitialState);
  const onSignUp = async () => {
    const { email, username, password } = state;
    const auth = getAuth();
    const db = getFirestore();
    const dbRef = doc(collection(db, 'users'), auth.currentUser?.uid);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(dbRef, {
        username,
        email,
      });
    } catch (error) {
      console.log(error);
    }
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
