import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack ,useRouter,useSearchParams } from 'expo-router';
import { COLORS, FONT, SIZES, icons } from './constants';
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native';

const Hadith = () => {
  const router = useRouter();
  const params = useSearchParams();
  const id = params.Hadith;
  const [hadith, setHadith] = useState([]);
  const [loading, setLoading] = useState(false);
  
    const url = `https://odd-gray-bunny-hat.cyclic.app/hadith/${id}`;
  
    useEffect(()=>{
      setLoading(true)
      fetch(url)
      .then(res => res.json())
      .then(data =>{
        setHadith(data);
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
            () => hadith.id? <Text style={{fontSize: SIZES.medium, fontWeight: "bold", color: COLORS.white, paddingLeft: SIZES.small}}>Hadith No. {hadith.id}</Text > : <Text style={{fontSize: SIZES.medium, fontWeight: "bold", color: COLORS.white, paddingLeft: SIZES.small}}>Mutawatir Hadith</Text>
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
          hadith.id?
          <ScrollView showsVerticalScrollIndicator={false} >
            <View style={{padding:SIZES.small}}>
              <View style={{backgroundColor:COLORS.white, padding:SIZES.small,borderRadius: 3}}>
                <Text style={{ color:COLORS.black, fontSize: SIZES.medium, fontFamily: FONT.bold, marginBottom: SIZES.medium, textAlign: 'justify'}}>{hadith.id}. {hadith.title}</Text>
                <Text style={{ color:COLORS.gray, fontSize: SIZES.medium, fontFamily: FONT.regular, marginBottom: SIZES.medium, textAlign: 'justify'}}>{hadith.hadith}</Text>
                <Text style={{ color:COLORS.black, fontSize: SIZES.small, fontFamily: FONT.bold, textAlign: 'justify'}}>Hadith number in {hadith.book} [Arabic Only] - {hadith.hadithNumberArabic}</Text>
              </View>
            </View>
          </ScrollView>
          :
          <View style={{padding:SIZES.small}}>
            <View style={{backgroundColor:COLORS.white, padding:SIZES.small,borderRadius: 3}}>
              <Text style={{ color:'red', fontSize: SIZES.medium, fontFamily: FONT.bold, textAlign: 'center'}}>Hadith Not Found</Text>
            </View>
          </View>
      }
    </View>
  )
}

export default Hadith