import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const PopularJobs = () => {
  return (
   <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.headerTitle}>Popular Jobs</Text>
    <TouchableOpacity>
    <Text style={styles.headerBtn}>See all</Text>
    </TouchableOpacity>
    </View>
   </View>
  )
}

export default PopularJobs



const styles = StyleSheet.create({
    container: {
       width: '100%',
       marginTop: 24,
       margin: 20  
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 182,
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