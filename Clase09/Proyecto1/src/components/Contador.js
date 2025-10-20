import React, { Component } from 'react'; 
import { View, Text, Pressable, StyleSheet } from 'react-native'; 

class Contador extends Component { 
    constructor(props) 
    { super(props); 
        this.state = { conteo: 0 }; 
    } 
        
    render() { 
        const { conteo } = this.state; 
        return ( <View style={styles.container}> 
        <Text style={styles.label}>
            Cantidad de clicks: {conteo}
        </Text> 
        <Pressable onPress={() => this.setState(prev => ({ conteo: prev.conteo + 1 }))} style={styles.clickZone} > 
            <Text style={styles.clickText}>Click aquí para contar</Text> 
        </Pressable> </View> ); 
        } } 
        const styles = StyleSheet.create({ container: { marginVertical: 5, alignItems: 'center', }, 
            label: { textAlign: 'center', marginBottom: 10, }, 
            clickZone: { padding: 7, backgroundColor: 'rgba(0, 255, 0, 0.5)', 
            marginBottom: 10, 
            borderRadius: 4, 
            alignSelf: 'center', }, 
            clickText: { fontWeight: 'bold', textAlign: 'center', }, 
        }); 
        
        export default Contador;