import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class Texting extends Component {

    render() {
        return (
            <View>
                <Text style={styles.styleText}>Count : {this.props.textCounter}</Text>
            </View>
        );
    }
}

export default Texting


const styles = StyleSheet.create({
    styleText: {
        fontSize: 30,
    }
})