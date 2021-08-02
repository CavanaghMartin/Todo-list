import React from 'react'
import { Appbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomNavigationBar({ navigation, previous }) {
    return (
        <Appbar.Header
        style={{backgroundColor:"white"}}
        >
            <MaterialCommunityIcons
                name="eye-circle-outline"
                color="green"
                size={30} />
            {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
                   <Appbar.Content title="To do app"  />
        </Appbar.Header>
    );
}

export default CustomNavigationBar
