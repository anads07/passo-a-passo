import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      nome: ''
    };
    
    this.gravaNome = this.gravaNome.bind(this);
  }

  async componentDidMount() {
    try {
      const nomeSalvo = await AsyncStorage.getItem('nome');
      if (nomeSalvo !== null) {
        this.setState({ nome: nomeSalvo });
      }
    } catch (e) {
      alert('Erro ao carregar nome: ' + e);
    }
  }

  async componentDidUpdate(_, prevState) {
    const { nome } = this.state;
    if (prevState.nome !== nome) {
      try {
        await AsyncStorage.setItem('nome', nome);
      } catch (e) {
        alert('Erro ao salvar nome: ' + e);
      }
    }
  }

  gravaNome() {
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com sucesso!');
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            value={this.state.input}
            onChangeText={(text) => this.setState({ input: text })}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={this.gravaNome}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.nome}>{this.state.nome}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,          
    alignItems: 'center'    
  },
  viewInput: {
    flexDirection: 'row',   
    alignItems: 'center'    
  },
  input: {
    width: 350,             
    height: 40,             
    borderColor: '#000',   
    borderWidth: 1,        
    padding: 10         
  },
  botao: {
    backgroundColor: '#222', 
    color: '#FFF',      
    height: 40,           
    padding: 10,       
    marginLeft: 3          
  },
  nome: {
    marginTop: 15,         
    fontSize: 30,        
    textAlign: 'center'  
  }
});

export default App;