import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

class DynamicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comentario: ''
        };
    }
    onSubmit = () => {
        console.log('Comentario enviado:', this.state.comentario);
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Dejá tu comentario</Text>

                <TextInput
                    style={styles.field}
                    placeholder="Escribí tu comentario aquí..."
                    value={this.state.comentario}
                    onChangeText={text => this.setState({ comentario: text })}
                />
                <Pressable onPress={this.onSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </Pressable>
                <View style={styles.dataPreview}>
                    <Text style={styles.previewTitle}>Vista previa:</Text>
                    <Text>{this.state.comentario}</Text>
                </View>
            </View>
        );
    }
}

export default DynamicForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    padding: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
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
    textAlignVertical: 'top', // mantiene el texto arriba en multiline
  },
  button: {
    backgroundColor: '#4db8ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  dataPreview: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  previewTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
