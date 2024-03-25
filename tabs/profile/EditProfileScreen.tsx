import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

type Img = 'img1' | 'img2' | 'img3';

export default function EditProfileScreen() {
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');

    const pickImage = async (imgType: Img) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            if (imgType == 'img1') {
            setImg1(result.assets[0].uri);
            } else if (imgType == 'img2') {
            setImg2(result.assets[0].uri);
            } else if (imgType == 'img3') {
            setImg3(result.assets[0].uri);
            }
        }
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Edit Profile</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imgContainer: {
      flex: 1,
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