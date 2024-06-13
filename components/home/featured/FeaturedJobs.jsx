import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const FeaturedJobs = () => {
  return (
   <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.headerTitle}>Featured Jobs</Text>
    <TouchableOpacity>
    <Text style={styles.headerBtn}>See all</Text>
    </TouchableOpacity>
    </View>
   </View>
  )
}

export default FeaturedJobs



const styles = StyleSheet.create({
    container: {
       width: '100%',
       marginTop: 24,
       margin: 20  
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 175,
    },
    headerTitle: {
        fontSize: 16,
        fontFamily: 'DMSemibold',
        color: '#0D0D26'
    },
    headerBtn: {
        fontSize: 14,
        fontFamily: 'DMMedium',
        color: '#95969D'
        }
})