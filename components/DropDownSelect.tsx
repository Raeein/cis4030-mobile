import { Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Colors from "@/constants/Colors";
import React from 'react';


interface DropdownInfo {
    data: string
    information: string[]
}

interface DropdownProps {
    item: DropdownInfo
}

const DropDownSelect: React.FC<DropdownProps> = ({ item }) => {
    return (
        <>
            <SelectDropdown 
                data={[item.information]} 
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
                defaultButtonText={item.data + ": "}
                buttonStyle={{ justifyContent: 'flex-start', borderRadius: 10, backgroundColor: '#D9D9D9', marginTop: 20, width: '100%'}}
                buttonTextStyle={{ fontWeight: '700', textAlign: 'left', paddingLeft: 10}}
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
    }
})

export default DropDownSelect;