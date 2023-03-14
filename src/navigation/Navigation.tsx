import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Dimensions } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import AssetList from '../screens/AssetList';
import Exchange from '../screens/Exchange';
import Receive from '../screens/Receive';
import Wallet from '../screens/Wallet';
import Explorers from '../screens/settings/Explorers';
import Faq from '../screens/settings/Faq';
import LiquidityProviders from '../screens/settings/LiquidityProviders';
import Network from '../screens/settings/Network';
import Privacy from '../screens/settings/Privacy';
import SettingsMenu from '../screens/settings/SettingsMenu';
import Terms from '../screens/settings/Terms';
import TorProxy from '../screens/settings/TorProxy';
import AccountMenu from '../screens/settings/account/AccountMenu';
import theme from '../styles/theme.style';

import type {
  BottomTabNavigatorParamList,
  ExchangeStackNavigatorParamList,
  SettingsStackNavigatorParamList,
  WalletStackNavigatorParamList,
  WalletTabScreenProps,
} from './navigationTypes';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
const WalletStack = createStackNavigator<WalletStackNavigatorParamList>();
const ExchangeStack = createStackNavigator<ExchangeStackNavigatorParamList>();
const SettingsStack = createStackNavigator<SettingsStackNavigatorParamList>();

const ICON_SIZE = 24;

const stackScreenOptions = {
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: theme.HEADER_BACKGROUND_COLOR,
  },
  headerTitleStyle: {
    fontSize: theme.FONT_SIZE_L,
    textTransform: 'uppercase',
  },
  headerTintColor: theme.COLOR_TERTIARY,
} as const;

// Override stackScreenOptions
const mainScreenOptions = {
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {
    fontSize: theme.FONT_SIZE_XXXL,
  },
};

function WalletStackComponent() {
  return (
    <WalletStack.Navigator screenOptions={stackScreenOptions}>
      <WalletStack.Screen name="Wallet" component={Wallet} options={mainScreenOptions} />
      <WalletStack.Screen name="AssetList" component={AssetList} options={{ title: 'Receive' }} />
      <WalletStack.Screen
        name="Receive"
        component={Receive}
        options={({ route }: WalletTabScreenProps<'Receive'>) => {
          return { title: `Receive ${route.params.asset.name}` };
        }}
      />
    </WalletStack.Navigator>
  );
}

function ExchangeStackComponent() {
  return (
    <ExchangeStack.Navigator screenOptions={stackScreenOptions}>
      <ExchangeStack.Screen name="Exchange" component={Exchange} options={mainScreenOptions} />
    </ExchangeStack.Navigator>
  );
}

function SettingsStackComponent() {
  return (
    <SettingsStack.Navigator screenOptions={stackScreenOptions}>
      <SettingsStack.Screen name="Settings" component={SettingsMenu} options={mainScreenOptions} />
      <SettingsStack.Screen name="Account" component={AccountMenu} />
      <SettingsStack.Screen
        name="LiquidityProviders"
        component={LiquidityProviders}
        options={{ title: 'TDEX Providers' }}
      />
      <SettingsStack.Screen name="Explorers" component={Explorers} />
      <SettingsStack.Screen name="Network" component={Network} />
      <SettingsStack.Screen name="TorProxy" component={TorProxy} />
      <SettingsStack.Screen name="DeepRestoration" component={TorProxy} />
      <SettingsStack.Screen name="ClaimLiquidBitcoin" component={TorProxy} />
      <SettingsStack.Screen name="Faq" component={Faq} />
      <SettingsStack.Screen
        name="Privacy"
        component={Privacy}
        options={{ title: 'Privacy Policy' }}
      />
      <SettingsStack.Screen
        name="Terms"
        component={Terms}
        options={{ title: 'Terms & Conditions' }}
      />
    </SettingsStack.Navigator>
  );
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.COLOR_PRIMARY,
          tabBarInactiveTintColor: theme.COLOR_TERTIARY,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopColor: theme.COLOR_SECONDARY,
            backgroundColor: theme.TAB_BAR_BACKGROUND_COLOR,
            height: Dimensions.get('window').height / 10,
          },
        }}
      >
        <Tab.Screen
          name="WalletStack"
          component={WalletStackComponent}
          options={{
            tabBarIcon: ({ focused, color }: any) => {
              return focused ? (
                <TabIconShadow>
                  <MaterialIcons name="account-balance-wallet" size={ICON_SIZE} color={color} />
                </TabIconShadow>
              ) : (
                <MaterialIcons name="account-balance-wallet" size={ICON_SIZE} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="ExchangeStack"
          component={ExchangeStackComponent}
          options={{
            tabBarIcon: ({ focused, color }: any) => {
              return focused ? (
                <TabIconShadow>
                  <Octicons name="sync" size={ICON_SIZE} color={color} />
                </TabIconShadow>
              ) : (
                <Octicons name="sync" size={ICON_SIZE} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStackComponent}
          options={{
            tabBarIcon: ({ focused, color }: any) => {
              return focused ? (
                <TabIconShadow>
                  <Ionicons name="settings-sharp" size={ICON_SIZE} color={color} />
                </TabIconShadow>
              ) : (
                <Ionicons name="settings-sharp" size={ICON_SIZE} color={color} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const TabIconShadow = ({ children }: { children: JSX.Element }) => {
  return (
    <Shadow
      style={{ borderRadius: ICON_SIZE / 2 }}
      distance={23}
      startColor={'#0fff0010'}
      endColor={'#0fff0001'}
      paintInside={true}
    >
      <Shadow
        style={{ borderRadius: ICON_SIZE / 2 }}
        distance={15}
        startColor={'#0fff0015'}
        endColor={'#0fff0001'}
        paintInside={true}
      >
        <Shadow
          style={{ borderRadius: ICON_SIZE / 2 }}
          distance={11}
          startColor={'#0fff0020'}
          endColor={'#0fff0001'}
          paintInside={true}
        >
          <Shadow
            style={{ borderRadius: ICON_SIZE / 2 }}
            distance={8}
            startColor={'#0fff0025'}
            endColor={'#0fff0001'}
            paintInside={true}
          >
            {children}
          </Shadow>
        </Shadow>
      </Shadow>
    </Shadow>
  );
};
