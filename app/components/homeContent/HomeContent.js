import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from "./homeContentStyle";
import { COLORS, FONT, SIZES } from '../../constants';
import { useRouter } from 'expo-router';

const HomeContent = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`HadithIndex`);
  }
  return (
    <View style={styles.container}>
      <View style= {styles.content}>
        <Text style={{color:COLORS.white, fontFamily: FONT.bold,fontSize: SIZES.medium, textAlign:'center'}}>A Collection of Mutawatir (Mass transmitted) Hadith (prophetic traditions)</Text>
        <Text style={{color:COLORS.white, fontFamily: FONT.regular, fontSize: SIZES.small, textAlign:'center'}}>Collected By</Text>
        <Text style={{color:COLORS.white, fontFamily: FONT.regular, fontSize: SIZES.small, textAlign:'center'}}>Ministry of Islamic Affairs, Endowments, Da‘wah and Guidance</Text>
        <Text style={{color:COLORS.white, fontFamily: FONT.bold, fontSize: SIZES.small, textAlign:'center'}}>Kingdom of Saudi Arabia</Text>
      </View>

      <View style= {styles.content2}>
        <Text style={{color:COLORS.black, fontFamily: FONT.bold, fontSize: SIZES.medium, textAlign:'justify', paddingBottom:SIZES.xxSmall}}>What is a Mutawatir Hadith and why this is distinct?</Text>
        <Text style={{color:COLORS.gray, fontFamily: FONT.regular, fontSize: SIZES.medium, textAlign:'justify', paddingBottom:SIZES.xxSmall}}>( َتوا ِتر A Mutawatir meaning "successive") Hadith is a report of such a large number of narrators (at different times) that their agreement upon an untruth is inconceivable thus being accepted as unquestionable in its veracity. A hadith is said to be mutawatir if it was reported by a significant, though unspecified, number of narrators at each level in the chain of narration, thus reaching the succeeding generation through multiple chains of narration leading back to its source.</Text>
        <Text style={{color:COLORS.gray, fontFamily: FONT.regular, fontSize: SIZES.medium, textAlign:'justify', paddingBottom:SIZES.xxSmall}}>This provides confirmation that the hadith is authentically attributed to its source at a level above reasonable doubt. This is due to its being beyond historical possibility that narrators could have conspired to forge a narration. In contrast, an ahaad hadith is a narration the chain of which has not reached a number sufficient to qualify as mutawatir.</Text>
        <Text style={{color:COLORS.gray, fontFamily: FONT.regular, fontSize: SIZES.medium, textAlign:'justify', paddingBottom:SIZES.medium}}>There are only two types of texts in Islamic sharīʿah which are immutable (Qaati’) a) verses of Qura’n and b) Mutawatir Hadith. If someone denies a Mutawatir hadith he does Kufr.</Text>
        
        
      </View>
      <View>
      <TouchableOpacity style={styles.button} onPress={() => router.push(`HadithIndex`)}>
          <Text style={{color:COLORS.white, fontFamily: FONT.bold, fontSize: SIZES.medium}}>
            Hadith Index
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push(`AllHadith`)}>
          <Text style={{color:COLORS.white, fontFamily: FONT.bold, fontSize: SIZES.medium}}>
            All Hadith
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeContent