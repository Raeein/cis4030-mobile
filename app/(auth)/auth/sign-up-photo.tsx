import { StyleSheet, Button, Image, View, Platform, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Colors from "@/constants/Colors";

export default function SignUpPhotosScreen() {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Setting up your profile</Text>
      <Text style={styles.h2}>Step 1: Upload photos</Text>
      <View style={styles.imgContainer}>
        <View style={styles.imgLg}>
        <Button title="+" onPress={pickImage} />
        </View>
        <View style={styles.smImgContainer}>
          <View style={styles.imgSm}>
          <Button title="+" onPress={pickImage} />
          </View>
          <View style={styles.imgSm}>
          <Button title="+" onPress={pickImage}/>
          </View>
        </View>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 50,
    backgroundColor: Colors.lightGrey,
  },
  h1: {
    fontSize: 25,
    fontWeight: '700',
  },
  h2: {
    fontSize: 20,
    fontWeight: '500',
  },
  imgContainer: {
    height: '90%',
    width: '95%',
    marginTop: 20,
  },
  imgLg: {
    height: '55%',
    width: '100%',
    borderStyle: 'dashed',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 1,
    alignSelf: 'center'
  },
  smImgContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    height: "30%",
  },
  imgSm: {
    height: '60%',
    width: '47%',
    borderStyle: 'dashed',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 1,
    marginTop: 20,
  }



});