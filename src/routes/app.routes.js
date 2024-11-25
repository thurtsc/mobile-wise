import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
  return(
    <AppDrawer.Navigator
      drawerContent={ (props) => <CustomDrawer {...props} /> }
      screenOptions={{
        headerShown:false,

        drawerStyle:{
          backgroundColor: '#2D3037', //cor de fundo menu
          paddingTop: 20,
        },

        drawerActiveBackgroundColor:'#4F78B2',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#4C525A',
        drawerInactiveTintColor: '#fff'

      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
      />

      <AppDrawer.Screen
        name="Registrar"
        component={New}
      />

      <AppDrawer.Screen
        name="Sair"
        component={Profile}
      />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes;