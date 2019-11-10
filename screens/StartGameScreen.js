import React,{useState} from 'react';
import {View, Text,StyleSheet,Button,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const [enteredValue,setEnteredValue] = useState('')
    const [confirmed,setConfirmed] = useState(false);
    const [selectedNumber,setselectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/\D/g,''))
    }

    const resetInputHandler = () =>{
        setEnteredValue('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!',
            'Number has to be a number between 1 and 99',
            [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
            )
            return
        }

        setConfirmed(true)
        setselectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <Text>You selected:</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
        </Card>
        )
    }

    return (
        <TouchableWithoutFeedback 
            onPress={()=> {
                    Keyboard.dismiss()
                }
            }>
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen</Text>
            <Card style={styles.inputContainer}>
                <View style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} keyboardType="number-pad" 
                        maxLength={2} 
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer} >
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={colors.primary} />
                        </View> 
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={colors.accent} />
                        </View>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    ) 
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    },
    button:{
        width:100,
        marginEnd:4
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    inputContainer:{
        maxWidth:'80%',
        width:300,
        alignItems:'center'
    },
    input:{
        width:80,
        textAlign:'center'
    }
    
});

export default StartGameScreen;