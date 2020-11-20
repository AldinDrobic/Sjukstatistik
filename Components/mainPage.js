import React, {useState} from 'react'
import {useFocusEffect} from '@react-navigation/native'
import {View, Text, Button, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native'
//import {TouchableOpacity } from 'react-native-gesture-handler'

function MainPage({navigation}){

    const [isLoading, setLoading]=useState(true)
    const [kateogorier, setKategorier]=useState([])
    //call the function when the main screen is loaded, stop and clean when you go from the main.
    useFocusEffect(
        //call this function (fetching data from api) just one time.
        React.useCallback(()=>{

            if (isLoading == true)
            {
                fetch ('https://www.vantetider.se/api/Ajax//GetServicesByArea/4')
                .then(respone=>respone.json())
                .then(data=>{
                    //console.log(data)
                    setLoading(false)
                    setKategorier(data.Services)
                })

                .catch(error => {
                    console.error(error);
                });
            }
        },[])
    )

    return(
        <View>
            <Text>Här kan du kika på statistik för väntetider inom vården i Sverige, välj kategori och titta på statistiken.</Text>

            <View>
            {isLoading==true ? <ActivityIndicator size="large" color="#00ff00"/> : 
            (
                <FlatList data={kateogorier} keyExtractor={item=>item.id.toString()}
                 renderItem={({item})=>
                    <TouchableOpacity onPress={()=>{console.log(item), navigation.navigate('statistik', {kategori:item})}}>
                        <View style={{ alignItems: "center", justifyContent: "center", height: 40 }}>
                        <Text>{item.Name}</Text>   
                        </View>
                    </TouchableOpacity>                                        
                }/>          
                
            )}
            </View>
            
        </View>
    )
}

export default MainPage;