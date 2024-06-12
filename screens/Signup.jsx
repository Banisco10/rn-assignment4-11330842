import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native'

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Signup = () => {
  return (
   <SafeAreaView>
    <View style={styles.background}>
    <Text style={styles.nametext}>Jobziz</Text>
    <Text style={styles.title}>Welcome back</Text>
    <Text style={styles.description}>Let's log in. Apply to jobs!</Text>
    <TextInput style={styles.name} placeholder='Name' />
    <TextInput style={styles.email} placeholder='Email' />
    <TouchableOpacity
        style={styles.button}>
        <Text style={styles.buttonText}>{capitalizeFirstLetter('Login in')}</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  background: { 
  width: '100%',
  height: '100%',
  marginLeft: 15,
  },
  nametext: {
    color: '#356899',
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#0D0D26',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    color: '#0D0D26',
    fontSize: 14,
    marginBottom: 50,
  },
  name: {
    height: 52,
    width: 327,
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: '#AFB0B6',
    borderRadius: 10,
    paddingLeft:10,
    marginBottom: 20,
  },
  email: {
    height: 52,
    width: 327,
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: '#AFB0B6',
    borderRadius: 10,
    paddingLeft:10,
    marginBottom: 20,
  },
  button: {
    width: 327,
    height: 56,
    backgroundColor: '#356899',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }

})
