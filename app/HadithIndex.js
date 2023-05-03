import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';
import { COLORS, FONT, SIZES, icons } from './constants';
import { TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Image } from 'react-native';

const HadithIndex = () => {
  const router = useRouter();
  const [hadiths, setHadiths] = useState([]);
    const [loading, setLoading] = useState(false)
  
    const url = `https://odd-gray-bunny-hat.cyclic.app/allHadith`;
  
    useEffect(()=>{
      setLoading(true)
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        setHadiths(data?.data);
        setLoading(false);
      }) 
    },[])
  return (
    <View>
      <Stack.Screen
         options={{
          headerStyle : {backgroundColor : COLORS.green},
          headerShadowVisible : false,
          headerBackVisible: false,
          headerTitle : (
            () => <Text style={{fontSize: SIZES.medium, fontWeight: "bold", color: COLORS.white, paddingLeft: SIZES.small}}>Hadith Index</Text>
          ),
          headerLeft : (() => 
            <TouchableOpacity onPress = {() => router.back()}>
              <Image style={{height:SIZES.xxLarge, width: SIZES.xxLarge}} source={icons.left}/>
            </TouchableOpacity> )
      }}
      />
      {
        loading ?
          <ActivityIndicator size='large' color={COLORS.primary} />
          :
          <FlatList
            data={hadiths}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => router.push(`${item.id}`)}>
                  <View style={{padding:SIZES.small}}>
                    <Text style={{backgroundColor:COLORS.white, padding:SIZES.small, flexDirection: 'row', textAlign: 'justify', borderRadius: 3}}>
                      <Text style={{color:COLORS.gray, fontSize: SIZES.medium, fontFamily: FONT.bold}}>{item.id}. </Text> 
                      <Text style={{color:COLORS.gray, fontSize: SIZES.medium, fontFamily: FONT.bold}}>{item.title}</Text>
                    </Text>
                  </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          /> 
      }
    </View>
  )
}

export default HadithIndex