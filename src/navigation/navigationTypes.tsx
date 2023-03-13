import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

import type { Asset } from '../stores/assetStore';

export type BottomTabNavigatorParamList = {
  WalletStack: NavigatorScreenParams<WalletStackNavigatorParamList>;
  ExchangeStack: NavigatorScreenParams<ExchangeStackNavigatorParamList>;
  SettingsStack: NavigatorScreenParams<SettingsStackNavigatorParamList>;
};

export type RootStackScreenProps<T extends keyof BottomTabNavigatorParamList> = StackScreenProps<
  BottomTabNavigatorParamList,
  T
>;

// Wallet Tab
export type WalletStackNavigatorParamList = {
  Wallet: undefined;
  AssetList: undefined;
  Receive: { asset: Asset };
};
export type WalletTabScreenProps<T extends keyof WalletStackNavigatorParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<WalletStackNavigatorParamList, T>,
    RootStackScreenProps<keyof BottomTabNavigatorParamList>
  >;

// Exchange Tab
export type ExchangeStackNavigatorParamList = {
  Exchange: undefined;
};
export type ExchangeTabScreenProps<T extends keyof ExchangeStackNavigatorParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<ExchangeStackNavigatorParamList, T>,
    RootStackScreenProps<keyof BottomTabNavigatorParamList>
  >;

// Settings Tab
export type SettingsStackNavigatorParamList = {
  Settings: undefined;
  Account: undefined;
  LiquidityProviders: undefined;
  Explorers: undefined;
  Network: undefined;
  TorProxy: undefined;
};
export type SettingsTabScreenProps<T extends keyof SettingsStackNavigatorParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<SettingsStackNavigatorParamList, T>,
    RootStackScreenProps<keyof BottomTabNavigatorParamList>
  >;

declare global {
  namespace ReactNavigation {
    // @ts-ignore
    type RootParamList = RootStackParamList;
  }
}
