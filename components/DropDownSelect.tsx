import { Text, StyleSheet, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Colors from "@/constants/Colors";
import React from 'react';
import { ProfileInfo } from '@/types';


interface DropdownProps {
    item: ProfileInfo,
    boxText?: string
}

const DropDownSelect: React.FC<DropdownProps> = ({ item, boxText }) => {
    var rowItems: string[];
    if (boxText) {
        rowItems = item.information;
    } else {
        rowItems = item.information.map((row) => {
            return item.data + ": " + row;
        })
    }
    
    return (
        <>
            <SelectDropdown 
                data={rowItems} 
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    console.log(item);
                    return item;
                }}
                defaultButtonText={boxText ?? item.data + ": "}
                buttonStyle={{ justifyContent: 'flex-start', borderRadius: 10, backgroundColor: '#D9D9D9', marginTop: 10, width: '100%'}}
                buttonTextStyle={{ fontWeight: '700', textAlign: 'left', paddingLeft: 6}}
                dropdownStyle={{ borderRadius: 10 }}
                renderSearchInputRightIcon={() => {
                    return <Image style={signUpStyles.icon} source={require('@/assets/images/expand-down.png') }/>;
                }}
            />
        </>
    )
}

const signUpStyles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'flex-start', 
      justifyContent: 'flex-start',
      padding: 20,
      paddingTop: 50,
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
    icon: {
        height: 50,
        width: 50
    }
})

export default DropDownSelect;