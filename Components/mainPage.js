import React, {useState} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import {View, Text, Button, ActivityIndicator, FlatList, ScrollView} from 'react-native'
import {TouchableOpacity } from 'react-native-gesture-handler'
import Regioner from './regioner'
import { SafeAreaView } from 'react-native-safe-area-context'

function MainPage({navigation}){

    const [isLoading, setLoading]=useState(true)
    const [regioner, setRegioner]=useState([])
    //call the function when the main screen is loaded, stop and clean when you go from the main.
    useFocusEffect(
        //call this function (fetching data from api) just one time.
        React.useCallback(()=>{

            if (isLoading == true)
            {
                fetch ('https://www.vantetider.se/api/Ajax/GetWaitingAndCapacityByService/10506')
                .then(respone=>respone.json())
                .then(data=>{
                    console.log(data)
                    setLoading(false)
                    setRegioner(data.aaData)
                })

                .catch(error => {
                    console.error(error);
                });
            }
        },[])
    )

    return(
        <View>
            <Text>Main page</Text>

            <View>
            {isLoading==true ? <ActivityIndicator size="large" color="#00ff00"/> : 
            (
                <FlatList data={regioner} keyExtractor={item=>item.regionId.toString()}
                 renderItem={({item})=>
            <Text>{item.regionName}</Text>
                
                
                
                }
                


                





                    />



           
                
            )}
            </View>
            <Button title="Go to regioner" onPress={()=> navigation.navigate('regioner')}/>

        </View>
    )
}

export default MainPage;