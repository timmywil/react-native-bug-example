import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import penguin from './penguin@2x.png'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={penguin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
