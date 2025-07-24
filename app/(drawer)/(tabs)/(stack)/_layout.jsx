import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';

const Layout = () => {

   const navigation = useNavigation();

   const onHeaderLeftClick = (canGoBack) => {
    if (canGoBack) {
      router.back();
      return;
    }
 
    navigation.dispatch(DrawerActions.toggleDrawer);
  };


  return (
    <Stack
    screenOptions={{
      //   headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
            backgroundColor: 'white'
        },
        headerLeft: ({tintColor, canGoBack}) => <Ionicons
        name={ canGoBack ? 'arrow-back-outline':'grid-outline'} 
        size={20} 
        className='mr-5' 
        onPress={() => onHeaderLeftClick(canGoBack)}
        />
    }}
    >
        <Stack.Screen
         name='home/index'
         options={{
            title: 'Inicio '
         }}
        />
        <Stack.Screen
         name='products/index'
         options={{
            title: 'Productos Screen'
         }}
        />
        <Stack.Screen
         name='profile/index'
         options={{
            title: 'Perfil Screen'
         }}
        />
        <Stack.Screen
         name='settings/index'
         options={{
            title: 'Ajustes Screen'
         }}
        />
        {/* <Stack.Screen
         name='products/[id]'
         options={{
            title: 'Producto'
         }}
        /> */}
    </Stack>
  )
}

export default Layout