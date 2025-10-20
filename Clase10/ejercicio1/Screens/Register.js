import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function Register({ navigation }) {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const onSubmit = () => {
    console.log('Datos ingresados:');
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Text style={styles.description}>
        Completá el formulario para registrarte.
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
        keyboardType="default"
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <TextInput
        style={styles.field}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text style={styles.submitText}>Registrate</Text>
      </Pressable>

      <View style={styles.dataPreview}>
        <Text style={styles.previewTitle}>Vista previa de tus datos:</Text>
        <Text>Email: {email}</Text>
        <Text>Usuario: {username}</Text>
        <Text>Contraseña: {password}</Text>
      </View>

      {/* --- NAVEGACIÓN CRUZADA A LOGIN --- */}
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Ya tengo cuenta</Text>
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
    color: '#000',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
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
  submitButton: {
    backgroundColor: '#4db8ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitText: {
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
  loginButton: {
    marginTop: 10,
    backgroundColor: '#ffa500',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});





