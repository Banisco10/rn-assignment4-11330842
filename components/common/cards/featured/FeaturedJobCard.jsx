import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const FeaturedJobCard = ({ item, selectedFeatured }) => {
  return (
    <TouchableOpacity style={styles.container(selectedFeatured, item)}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
        <Image
          source={item.image}
          resizeMode="contain"
          style={styles.image}
        />
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.jobName(selectedFeatured, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.companyName} numberOfLines={1}>{item.companyName}</Text>
        <View style={styles.details} numberOfLines={1}>
        <Text style={styles.amount}>{item.prize}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
        </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default FeaturedJobCard


const styles = StyleSheet.create({
    container: (selectedFeatured, item) => ({
      backgroundColor: selectedFeatured === item.featured ? 'black' : '#FBF9F7',
      padding: 10,
      columnGap: 10,
      marginTop: 30,
      marginRight: 30,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: 'gray',
      width: 280,
      height: 186,
    }),
    infoContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      color: 'white',
      columnGap: 20
    },
      jobName: (selectedFeatured, item) => ({
      fontSize: 16,
      fontWeight: selectedFeatured === item.featured ? 'bold' : 'normal',
      color: selectedFeatured === item.featured? 'white' : 'white',
    }),
    companyName: {
      color: 'white',
    },
    amount: {
      color: 'white',
      fontSize: 15,
    },
    location: {
      color: 'white',
      fontSize: 15,
    },
    imageContainer: {
      width: 46,
      height: 46,
      borderRadius: 12,
      backgroundColor: 'white',
    },
    details: {
      flexDirection: 'row',
      marginTop: 100,
      columnGap: 70,
      marginLeft: -65,
    },
    image: {
      width: 30,
      height: 30,
      borderRadius: 25,
      marginTop: 8,
      paddingLeft: 45,
    }
  })
  
