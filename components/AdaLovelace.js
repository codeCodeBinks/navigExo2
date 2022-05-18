
import { View, Image, Text, StyleSheet, Pressable } from 'react-native'

function AdaLovelace({navigation}) {


  return (
  
      <View>
        <Image
        style = {styles.img}
        source={require('../assets/al.png')}
         />
        <Text>Ada Lovelace</Text>
        <Pressable
        style={{height : 150, width:150, backgroundColor:"red"}}
        onPress={()=> navigation.navigate("Accueil")}>
            <Text>Retour Accueil</Text>
        </Pressable>
        </View>
   

  )
}

const styles = StyleSheet.create({
  img : {
    width : 250,
    height : 250
  }
})

export default AdaLovelace