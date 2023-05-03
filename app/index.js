import { Stack, useRouter } from 'expo-router';
import { SafeAreaView} from 'react-native';
import { COLORS, SIZES } from './constants';
import Logo from './components/common/header/logo/Logo';
import Search from './Search';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import HomeContent from './components/homeContent/HomeContent';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style = {{flex : 1, backgroundColor : COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle : {backgroundColor : COLORS.green},
                    headerShadowVisible : false,
                    headerTitle : () => (
                        <Logo/>
                    ), 
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex : 1, padding : SIZES.xxSmall}}>
                    <Search/>
                    <HomeContent/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;