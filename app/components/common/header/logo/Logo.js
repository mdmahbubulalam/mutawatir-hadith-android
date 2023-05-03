import { Text, View } from "react-native"
import { COLORS, FONT, SIZES } from "../../../../constants";

const Logo = () => {
    return (
        <View>
            <Text style={{color : COLORS.white, fontSize: SIZES.medium, fontWeight: "bold"}}>
                Mutawatir Hadith
            </Text>
        </View>
    ) 
}

export default Logo;