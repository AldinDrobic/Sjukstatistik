import React from 'react'
import {View, Text, Button} from 'react-native'

function Regioner({navigation}){
    
    return(
        <View>

            <Text>Regionerna</Text>
            
            <Button title="Go to statistik" onPress={()=> navigation.navigate('statistik',{Region:{regionId:1,regionTitel:'Blekinge'}})}/>
               <Text> </Text> 
            <Button title="Go back to main" onPress={()=> navigation.navigate('Main')}/>
        </View>
    )
}


export default Regioner;