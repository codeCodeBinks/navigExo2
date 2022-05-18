import { View, Text, Pressable, StyleSheet } from "react-native"


function Accueil({navigation}) {
  
  return (
    <View>
        <Text>Bienvenue sur l'appli dédié à Ada Lovelace</Text>
        <Pressable
        style={{height : 150, width:150, backgroundColor:"red"}}
        onPress={()=> navigation.navigate("Drawer")}>
            <Text >Demarrer</Text>
        </Pressable>
    </View>
  )
}

export default Accueil