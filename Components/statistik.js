import React from 'react'
import {View, Text, Button} from 'react-native'

function Statistik({route,navigation}){
    const {Region}=route.params
    return(
        <View>

            <Text>Denna region har id: {Region.regionId}</Text>
            <Text>Du tittar på region: {Region.regionTitel}</Text>
            
            <Button title="Go back to regioner" onPress={()=> navigation.navigate('regioner')}/>
        </View>
    )
}

export default Statistik;