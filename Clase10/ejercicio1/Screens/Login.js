import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar</Text>

      <Text style={styles.description}>
        Esta es la pantalla donde debe ir el formulario de login.{"\n"}
        Navegación cruzada a Register:
      </Text>
      
      <Pressable
        onPress={() => navigation.navigate('Register')}
        style={[styles.button, styles.registerButton]}
      >
        <Text style={styles.buttonText}>No tengo cuenta</Text>
      </Pressable>

      <Text style={styles.description}>
        Navegación cruzada a ingresar a la app. Este paso se hará
        automáticamente cuando veamos la funcionalidad de login
      </Text>

      <Pressable
        onPress={() => navigation.navigate('HomeMenu')}
        style={[styles.button, styles.enterButton]}
      >
        <Text style={styles.buttonText}>Entrar en la app.</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  registerButton: {
    backgroundColor: '#4db8ff',
  },
  enterButton: {
    backgroundColor: '#ffb300',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});




