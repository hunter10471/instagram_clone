import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/apiCalls/user/misc';
import { logout } from '../redux/apiCalls/user/auth';

type Props = {};

const MainScreen = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async () => {
      await fetchCurrentUser();
    };
  }, []);
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <Button title='Logout' onPress={() => logout(dispatch)} />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
