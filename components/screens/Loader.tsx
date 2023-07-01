import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loaders from 'react-native-pure-loaders';

export default function Loader() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.loaderContainer}>
          <Loaders.Ellipses color="#1F41BB" size={128}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
    color: 'white'
  },
  captionContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  loaderContainer: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});