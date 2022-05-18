import { View, Text, StyleSheet } from "react-native"
import data from "../db/bio.json"

function Personnage() {

  return (
   <View>
       <Text>{data.personnage}</Text>
   </View>
  )
}

export default Personnage