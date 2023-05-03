import { TextInput, Image, TouchableOpacity, View } from "react-native";
import { } from "react-native";
import styles from "./components/common/header/screenHeaderStyle";
import { icons } from "./constants";
import { useRouter } from "expo-router";
import { useState } from "react";

const Search = () => {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('')
   
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={(val) => setSearchValue(val)}
                    value={searchValue}
                    placeholder="Search hadith by id"
                />
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={() => router.push(`${searchValue}`)}>
            <Image
                source = {icons.search}
                resizeMode = "contain"
                style = {styles.searchBtnImage}
            />
            </TouchableOpacity>
        </View>
        
    ) 
}

export default Search;