import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Contador from '../components/Contador';

class Home extends Component {
  handlePress() {
    console.log('me clickearon');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hola Mundo</Text>

        <Pressable onPress={this.handlePress} style={styles.clickZone}>
          <Text style={styles.clickText}>Clickeame</Text>
        </Pressable>

        <Contador />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  clickZone: {
    padding: 4,
    backgroundColor: '#ccc',
    marginBottom: 10,
    borderRadius: 4,
    alignSelf: 'center',
  },

  clickText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;

