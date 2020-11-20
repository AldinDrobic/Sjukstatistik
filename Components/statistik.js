import React, {useState} from 'react'
import {View, Text, Button, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'

function Statistik({route,navigation}){
    const [isLoading, setLoading]=useState(true)
    const [statistikHealth, setStatistikHealth]=useState([])
    const {kategori}=route.params
 
    //call the function when the main screen is loaded, stop and clean when you go from the main.
    useFocusEffect(
        //call this function (fetching data from api) just one time.
        React.useCallback(()=>{

            if (isLoading == true)
            {
                fetch ('https://www.vantetider.se/api/Ajax/GetWaitingAndCapacityByService/' + kategori.Servicecode)
                .then(respone=>respone.json())
                .then(data=>{
                    console.log(data)
                    setLoading(false)
                    setStatistikHealth(data.aaData)
                })

                .catch(error => {
                    console.error(error);
                });
            }
        },[])
    )
    return(
        <View>
            <Text>Väntetid för: {kategori.Name}</Text>

            <View>
            {isLoading==true ? <ActivityIndicator size="large" color="#00ff00"/> : 
            (
                <FlatList data={statistikHealth} keyExtractor={item=>item.unitId.toString()}
                 renderItem={({item})=>
                    
                        <View style={{ alignItems: "center", justifyContent: "center", height: 40 }}>
                        <Text>{item.unitName}</Text>   
                        <Text>{item.Waiting}</Text>
                        </View>
                                       
                }/>          
                
            )}
            </View>
        </View>

        
    )
}

export default Statistik;