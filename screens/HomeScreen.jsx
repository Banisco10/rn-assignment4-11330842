import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Signup from './Signup'

const HomeScreen = () => {
  return (
    <SafeAreaView>
    <View>
        <Signup />
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen


