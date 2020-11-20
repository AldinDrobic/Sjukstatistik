import React from 'react'
import {View, Text, Button} from 'react-native'

function Statistik({route,navigation}){
    const {aaData}=route.params
    return(
        <View>

            <Text>Denna region har id: {aaData.regionId}</Text>
            <Text>Du tittar på region: {aaData.regionName}</Text>
            <Text>Väntetiden för regionen är: {aaData.Waiting}</Text>
            
            <Button title="Go back to regioner" onPress={()=> navigation.navigate('regioner')}/>
        </View>
    )
}

export default Statistik;