import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import BubbleBox from '@/components/BubbleBox';
import { supabase } from '@/lib/supabase';
import * as defUser from '@/assets/info/defUser.json'

type Img = 'img1' | 'img2' | 'img3';

export default function EditProfileScreen() {
    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState(0);
    const [languages, setLanguages] = useState<string[]>([]);
    const [placesToTravel, setTravelPlaces] = useState<string[]>([]);
    const [interests, setInterests] = useState<string[]>([]);
    const [imgUrls, setImgUrls] = useState<string[]>([]);
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

    const setDefaultUser = () => {
      console.log(defUser);
      setFirstName(defUser.firstname);
      setLanguages(defUser.languages);
      setTravelPlaces(defUser.travelPlaces);
      setInterests(defUser.interests);
      setAge(defUser.age);
      setImgUrls(defUser.imgUrls);
      setImg1(defUser.imgUrls[0]);
      console.log(imgUrls[0]);
      setImg2(imgUrls[1]);
      setImg3(imgUrls[2]);
    }

    useEffect(() => {
      const getUserInfo = async () => {
        const user = await supabase.auth.getUser()
        
        if (user.data.user?.id) {
          setUserId(user.data.user.id);
        }
      
        const { data, error } = await supabase
          .from('users')
          .select()
          .eq('id', userId)

          if (error) {
            setDefaultUser();
          } else {
            setFirstName(data[0].first_name);
            setLanguages(data[0].languages);
            setTravelPlaces(defUser.travelPlaces);
            setInterests(data[0].interests);
            setAge(data[0].age);
            setImgUrls(data[0].photo_urls);
            setImg1(imgUrls[0]);
            setImg2(imgUrls[1]);
            setImg3(imgUrls[2]);
          }
      }

      getUserInfo();
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={[styles.h1, {fontSize: 30, color: '#FD4802', marginBottom: 15} ]}>
            {firstName}
            <Text style={{fontSize: 22, color: '#FD4802'}}>({age})</Text>
          </Text>
          <Text style={styles.h1}>Photos</Text>
          <View style={styles.smImgContainer}>
            <View style={styles.imgSmBox}>
              { img1 ? <Image source={{ uri: img1 }} style={styles.imgSm}/> 
                : <Button title="+" onPress={() => pickImage("img1")} />
              }
            </View>
            <View style={styles.imgSmBox}>
              { img2 ? <Image source={{ uri: img2 }} style={styles.imgSm}/> 
                : <Button title="+" onPress={() => pickImage("img2")} />
              }
            </View>
            <View style={styles.imgSmBox}>
              { img3 ? <Image source={{ uri: img3 }} style={styles.imgSm}/> 
                : <Button title="+" onPress={() => pickImage("img2")} />
              }
            </View>
          </View>
          <Text style={styles.h1}>Places I want to go</Text>
          <View style={styles.bubbleContainer}>
            { placesToTravel.map((lang, index) => {
               return (<BubbleBox key={index} name={lang} color={"#F38957"}/>)
              })
            }
          </View>
          <Text style={styles.h1}>Languages</Text>
          <View style={styles.bubbleContainer}>
            { languages.map((lang, index) => {
               return (<BubbleBox key={index} name={lang} color={"#F38957"}/>)
              })
            }
          </View>
          <Text style={styles.h1}>Interests</Text>
          <View style={styles.bubbleContainer}>
            { interests.map((interest, index) => {
               return (<BubbleBox key={index} name={interest} color={"#F38957"}/>)
              })
            }
          </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'flex-start',
      // justifyContent: 'flex-start',
      padding: 20
    },
    h1: {
      fontWeight: '700',
      fontSize: 20,
    },
    smImgContainer: {
      // flex: 1,
      flexDirection: 'row',
      // justifyContent: 'center',
      gap: 20,
      // height: "30%",
      width: "100%",
    },
    imgSmBox: {
      // flex: 1,
      justifyContent: 'center',
      height: '50%',
      width: '30%',
      borderStyle: 'dashed',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 1,
      marginTop: 20,
    },
    imgSm: {
      height: '100%',
      width: '100%',
    },
    bubbleContainer: {
      // flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 7,
      marginTop: 20,
      // height: '100%'
    }
  });