import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONT, SIZES, icons } from './constants';
import { FlatList } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const AllHadith = () => {
  const router = useRouter();
  const [allHadith, setAllHadithAll] = useState([])
    const [loading, setLoading] = useState(false);
    const url = `https://odd-gray-bunny-hat.cyclic.app/allHadith`;
    useEffect(()=>{
      setLoading(true)
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        setAllHadithAll(data.data)
        setLoading(false)
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
            () => <Text style={{fontSize: SIZES.medium, fontWeight: "bold", color: COLORS.white, paddingLeft: SIZES.small}}>All Hadith</Text>
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
            data={allHadith}
            renderItem={({ item }) => (
              <View style={{padding:SIZES.small}}>
                <View style={{backgroundColor:COLORS.white, padding:SIZES.small,borderRadius: 3}}>
                  <Text style={{ color:COLORS.black, fontSize: SIZES.medium, fontFamily: FONT.bold, marginBottom: SIZES.medium, textAlign: 'justify'}}>{item.id}. {item.title}</Text>
                  <Text style={{ color:COLORS.gray, fontSize: SIZES.medium, fontFamily: FONT.regular, marginBottom: SIZES.medium, textAlign: 'justify'}}>{item.hadith}</Text>
                  <Text style={{ color:COLORS.black, fontSize: SIZES.small, fontFamily: FONT.bold, textAlign: 'justify'}}>Hadith number in {item.book} [Arabic Only] - {item.hadithNumberArabic}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          /> 
      }
    </View>
  )
}

export default AllHadith