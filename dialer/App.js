import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import * as Linking from 'expo-linking';

export default function App() {
  const [wholeNumber, tellNumber] = useState('');
  const onPress = () => tellNumber(previousNumber => previousNumber + '1');
  const onPress2 = () => tellNumber(previousNumber => previousNumber + '2');
  const onPress3 = () => tellNumber(previousNumber => previousNumber + '3');
  const onPress4 = () => tellNumber(previousNumber => previousNumber + '4');
  const onPress5 = () => tellNumber(previousNumber => previousNumber + '5');
  const onPress6 = () => tellNumber(previousNumber => previousNumber + '6');
  const onPress7 = () => tellNumber(previousNumber => previousNumber + '7');
  const onPress8 = () => tellNumber(previousNumber => previousNumber + '8');
  const onPress9 = () => tellNumber(previousNumber => previousNumber + '9');
  const onPressStar = () => tellNumber(previousNumber => previousNumber + '*');
  const onPress0 = () => tellNumber(previousNumber => previousNumber + '0');
  const onPressHash = () => tellNumber(previousNumber => previousNumber + '#');
  const deleteLast = () => tellNumber(previousNumber => previousNumber.slice(0,-1));
  const deleteAll = () => tellNumber('');

  const [calling, setCalling] = useState(true);

  const noNumber = wholeNumber !== "";

  const nothingAtStart = wholeNumber === "";

  var phoneImage = calling
      ? require("./assets/phone.png")
      : require("./assets/phoneOff.png");

  const display = nothingAtStart ? "none" : "flex";

  var changeButtonBackground = calling ? styles.buttonPhone : styles.buttonPhoneOff;


  return (

    <View style={styles.containerUp}>


      <View style={styles.up}>
      <Text style={styles.phone}>Phone</Text>
      <StatusBar style="auto" />
      </View>

      <View style={styles.screen}>
      <View style={styles.backspace}>
      <TouchableOpacity
        onPress={deleteLast}
        onLongPress={deleteAll}
        style={[{display}]}
        >
        <Image source={require("./assets/backspace.png")}></Image>
        </TouchableOpacity>
        </View>
        </View>
      <Text style={styles.telephoneNumber}>{wholeNumber}</Text>

      <View style={styles.backspace}>


      </View>

      <View style={styles.row}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>1</Text>
      <Text style={styles.underText}></Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPress2}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>2</Text>
      <Text style={styles.underText}>ABC</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPress3}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>3</Text>
      <Text style={styles.underText}>DEF</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <TouchableOpacity
        onPress={onPress4}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>4</Text>
      <Text style={styles.underText}>GHI</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPress5}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>5</Text>
      <Text style={styles.underText}>JKL</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPress6}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>6</Text>
      <Text style={styles.underText}>MNO</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <TouchableOpacity
        onPress={onPress7}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>7</Text>
      <Text style={styles.underText}>PQRS</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPress8}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>8</Text>
      <Text style={styles.underText}>TUV</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPress9}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>9</Text>
      <Text style={styles.underText}>WXYZ</Text>
      </View>
      </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <View style={styles.row2}>
      <TouchableOpacity
        onPress={onPressStar}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>*</Text>
      </View>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={onPress0}

        onLongPress={ function (){
          if(nothingAtStart){
            tellNumber(previousNumber => previousNumber + '+')
          }
        }}

        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>0</Text>
      <Text style={styles.underText}>+</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressHash}
        style={styles.numberButton}>
      <View style={styles.column}>
      <Text style={styles.number}>#</Text>
      </View>
      </TouchableOpacity>
      </View>
      </View>

      <View style={styles.buttonScreen}>
      <TouchableOpacity
        style={[styles.iconContairner, changeButtonBackground]}
        onPress={function ()
          {
            if(calling && noNumber){
              Linking.openURL(`tel:${wholeNumber}`)
            }
            setCalling(function (state) {
              state = !state;
              return state;
            });

      }}>

          <Image source={phoneImage}></Image>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  containerUp: {
    flex: 1,
    backgroundColor: 'white',
  },
  up: {
    flex: 3,
    backgroundColor: 'green',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  phone:{
    color: 'white',
    paddingLeft: 50,
    paddingTop: 30,
    fontSize: 20,
  },
  screen:{
    flex:2,
  },
  row:{
    flex: 3,
    borderRadius: 3,
    flexDirection: 'row',
    borderTopWidth: 1,
  },
  number:{
    fontSize: 40,
  },
  buttonScreen:{
      flex: 5,
      color: 'white',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
  },
  column:{
    flex: 1,
    borderRightWidth: 1,
    alignItems: 'center',
  justifyContent: 'center',
  },
  row2:{
    flex: 3,
    borderRadius: 3,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  underText:{
    color: 'grey',
    fontSize: 15,
  },
  buttonPhone: {
    backgroundColor: 'green',
    borderRadius: 20,
  },
  buttonPhoneOff: {
    backgroundColor: 'red',
    borderRadius: 20,
  },
  numberButton: {
    flex: 2,
  },
  telephoneNumber:{
    flex: 2,
    fontSize: 40,
    alignSelf: 'center',
  },
  backspace:{
    alignSelf: 'flex-end',
    marginRight: 10,
  }
});
