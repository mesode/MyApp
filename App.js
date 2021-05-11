
import React from 'react';
import { StyleSheet, View } from 'react-native';

const MyApp = (props) => {
  return (
    <View style={styles.container}>
          <View style = {styles.redbox} />
          <View style = {styles.bluebox} />
          <View style = {styles.blackbox} />
    </View>
  )
}
export default MyApp

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ff0',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 600,
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
})
