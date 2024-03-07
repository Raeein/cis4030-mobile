import { StyleSheet, Button, Image, View, Platform, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Colors from "@/constants/Colors";

type Img = 'lg' | 'sm1' | 'sm2';

export default function SignUpPhotosScreen() {
  const [imgLg, setImgLg] = useState('');
  const [imgSm1, setImgSm1] = useState('');
  const [imgSm2, setImgSm2] = useState('');

  const pickImage = async (imgType: Img) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (imgType == 'lg') {
        setImgLg(result.assets[0].uri);
      } else if (imgType == 'sm1') {
        setImgSm1(result.assets[0].uri);
      } else if (imgType == 'sm2') {
        setImgSm2(result.assets[0].uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Setting up your profile</Text>
      <Text style={styles.h2}>Step 1: Upload photos</Text>
      <View style={styles.imgContainer}>
        <View style={styles.imgLgBox}>
          {/* <Button title="+" onPress={() => pickImage("lg")}/> */}
          {/* {imgLg && <Image source={{ uri: imgLg }} style={styles.imgLg}/> } */}
          {imgLg ? <Image source={{ uri: imgLg }} style={styles.imgLg}/> : <Button title="+" onPress={() => pickImage("lg")} />}
        </View>
        <View style={styles.smImgContainer}>
          <View style={styles.imgSmBox}>
          {imgSm1 ? <Image source={{ uri: imgSm1 }} style={styles.imgSm}/> : <Button title="+" onPress={() => pickImage("sm1")} />}
          </View>
          <View style={styles.imgSmBox}>
          {imgSm2 ? <Image source={{ uri: imgSm2 }} style={styles.imgSm}/> : <Button title="+" onPress={() => pickImage("sm2")} />}
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
  imgLgBox: {
    height: '55%',
    width: '100%',
    borderStyle: 'dashed',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 1,
    alignSelf: 'center'
  },
  imgLg: {
    height: '100%',
    width: '100%',
  },
  smImgContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    height: "30%",
  },
  imgSmBox: {
    height: '60%',
    width: '47%',
    borderStyle: 'dashed',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 1,
    marginTop: 20,
  },
  imgSm: {
    height: '100%',
    width: '100%',
  }



});