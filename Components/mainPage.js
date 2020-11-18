import React from 'react'
import {View, Text, Button} from 'react-native'

function MainPage({navigation}){

    return(
        <View>


            <Text>Main pagee</Text>
             <Button title="Go to regioner" onPress={()=> navigation.navigate('regioner')}/>

        </View>
    )
}

export default MainPage;