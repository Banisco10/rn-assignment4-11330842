import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Welcome from '../components/home/welcome/Welcome'
import PopularJobs from '../components/home/popular/PopularJobs'
import FeaturedJobs from '../components/home/featured/FeaturedJobs'


const HomeScreen = () => {
  return (
    <SafeAreaView>
    <View>
        <Welcome />
        <FeaturedJobs />
        <PopularJobs />
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen


