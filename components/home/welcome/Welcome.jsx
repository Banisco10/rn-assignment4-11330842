import React from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Welcome = () => {
  return (
    <SafeAreaView>
    <View>
        <View style={styles.container}>
          <View style={styles.text}>
        <Text style={styles.userName}>Godsway</Text>
        <Text style={styles.welcomeMessage}>gbaniba@st.ug.edu.gh</Text>
          </View>
        <TouchableOpacity style={styles.image}>
        <Image
        source={require('../../icons/Ellipse.png')}
        />
        </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <Image source={require('../../icons/search.1 1.png')} />
            <TextInput
            style={styles.searchInput}
            placeholder='Search a job or position'
            />
          </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
          source={require('../../icons/filter.5.png')}
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
        </View>

    </View>
    </SafeAreaView>
  )
}

export default Welcome



const styles = StyleSheet.create({
    container: {
       width: '100%',
       flexDirection: 'row',
       marginRight: 10, 
       padding: 15,
    },
    image: {
      flexDirection: 'row',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    welcomeMessage: {
      fontSize: 20,
      marginTop: 2,
      color: '#95969D'
    },
    searchContainer: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: 40,
      margin: 10,
      height: 50,

    },
    searchWrapper: {
      flex: 1,
      flexDirection: 'row',
      marginRight: 12,
      paddingLeft: 25,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      height: "100%",
      backgroundColor: '#AFB0B6',
      color: '#95969D'
    },
    searchInput: {
      width: "100%",
      height: "100%",
      paddingHorizontal: 16,
    },
    searchBtn: {
      width: 48,
      height: 48,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#AFB0B6',
    },
    searchBtnImage: {
      width: 26,
      height: 26,
    },
    text: {
      flex: 1,
    }
})