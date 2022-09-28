import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const LandingScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('RegisterScreen')}
        title='Register'
      />
      <Button
        onPress={() => navigation.navigate('LoginScreen')}
        title='Login'
      />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
