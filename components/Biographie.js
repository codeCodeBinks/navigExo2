
import { View, Text, StyleSheet } from "react-native";
import data from '../db/bio.json'


function Biographie() {

return (
    <View>
    <Text>{data.bio}</Text>
</View>
  )
}

export default Biographie