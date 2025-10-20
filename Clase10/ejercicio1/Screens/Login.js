import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmit = () => {
    console.log('Datos de login:');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar</Text>

      <Text style={styles.description}>
        Esta es la pantalla donde debe ir el formulario de login.
      </Text>


      <TextInput
        style={styles.field}
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.field}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Pressable onPress={onSubmit} style={[styles.button, styles.enterButton]}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>


      <View style={styles.dataPreview}>
        <Text style={styles.previewTitle}>Vista previa de tus datos:</Text>
        <Text>Email: {email}</Text>
        <Text>Contraseña: {password}</Text>
      </View>


      <Text style={styles.description}>
        Navegación cruzada a Register:
      </Text>

      <Pressable
        onPress={() => navigation.navigate('Register')}
        style={[styles.button, styles.registerButton]}
      >
        <Text style={styles.buttonText}>No tengo cuenta</Text>
      </Pressable>

      <Text style={styles.description}>
        Navegación cruzada a ingresar a la app. Este paso se hará automáticamente
        cuando veamos la funcionalidad de login.
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
  field: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
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
  dataPreview: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  previewTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});




