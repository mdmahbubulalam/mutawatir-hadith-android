import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
      width: "100%",
    },
    content: {
      padding : SIZES.large,
      alignItems:'center',
      backgroundColor: COLORS.black,
      marginTop: SIZES.medium,
    },

    content2: {
      padding : SIZES.xxSmall,
      alignItems:'flex-start',
      backgroundColor: COLORS.white,
      marginTop: SIZES.medium,
      textAlign: 'justify'
    },

    button: {
      width:'100%',
      height:40,
      backgroundColor: COLORS.green,
      borderRadius: SIZES.xxSmall,
      justifyContent: "center",
      alignItems: "center",
      marginTop : SIZES.small,
    },
    
    welcomeMessage: {
      fontFamily: FONT.bold,
      fontSize: SIZES.xLarge,
      color: COLORS.primary,
      marginTop: 2,
    },
  });

  export default styles;