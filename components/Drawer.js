import { createDrawerNavigator } from '@react-navigation/drawer';
import AdaLovelace from './AdaLovelace';
import Biographie from './Biographie';
import Personnage from './Personnage'


function Drawer() {

    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
        <Drawer.Screen name="AdaLovelace" component={AdaLovelace} />
        <Drawer.Screen name="Biographie" component={Biographie} />
        <Drawer.Screen name="Personnage" component={Personnage} />
   </Drawer.Navigator>
  )
}

export default Drawer