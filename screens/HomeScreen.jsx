import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Welcome from '../components/home/welcome/Welcome'
import PopularJobs from '../components/home/popular/PopularJobs'
import FeaturedJobs from '../components/home/featured/FeaturedJobs'


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
        <Welcome />
        <FeaturedJobs />
        <PopularJobs />
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen


