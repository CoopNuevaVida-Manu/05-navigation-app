import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack
    screenOptions={{
      //   headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
            backgroundColor: 'white'
        }
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
        <Stack.Screen
         name='products/[id]'
         options={{
            title: 'Producto'
         }}
        />
    </Stack>
  )
}

export default Layout