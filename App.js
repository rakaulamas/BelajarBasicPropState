import React, { Component } from 'react'
import { Text, TextInput, StyleSheet,TouchableOpacity, View } from 'react-native'
import Texting from './Texting'

export class App extends Component {
  constructor(props) {
    super(props)                //seperti Entity di Java
    this.state={
        counter:0
    } 
  }

  tambah(parameter){
    this.setState({
      counter: parameter+1
    })
  }

  render() {
    return (
      <View>
         <Texting textCounter={this.state.counter}/>
         <TouchableOpacity style={styles.button} onPress={()=>{this.setState({counter:this.state.counter+1})}}><Text>ADD</Text></TouchableOpacity>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({      //class button
  button: {
    alignItems: "center",
    backgroundColor:"green",
    padding: 20
  },
})