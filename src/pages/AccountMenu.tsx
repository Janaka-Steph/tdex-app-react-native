import { Entypo, Ionicons } from '@expo/vector-icons';
import type { Route } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Shell from '../components/Shell';
import type { SettingsTabScreenProps, WalletTabScreenProps } from '../navigation/navigationTypes';
import common from '../styles/common.style';
import theme from '../styles/theme.style';

const menu = {
  general: [
    {
      title: 'Show mnemonic',
      description: "Display the secret mnemonic stored in your device's secure storage.",
      icon: <Ionicons name="eye" size={24} color={theme.COLOR_TEXT} />,
      link: 'AssetList',
    },
    {
      title: 'Show information',
      description: 'Display additional wallet information.',
      icon: <Ionicons name="eye" size={24} color={theme.COLOR_TEXT} />,
      link: 'AssetList',
    },
  ],
  support: [
    {
      title: 'Set new pin',
      description: "Change the secure PIN using to encrypt your wallet's seed.",
      icon: <Entypo name="lock-open" size={24} color={theme.COLOR_TEXT} />,
      link: 'WalletStack',
    },
    {
      title: 'Delete mnemonic',
      description:
        'Definitively removes your seed from this device. Be extremely careful, after deletion it will be impossible to retrieve your key from tdex-app.',
      icon: <Entypo name="trash" size={24} color={theme.COLOR_TEXT} />,
      link: 'WalletStack',
    },
  ],
};

interface ListItemProps {
  title: string;
  description: string;
  icon: JSX.Element;
  link: Route<any>['name'];
}

const ListItem: React.FC<ListItemProps> = ({ title, description, icon, link }) => {
  const navigation = useNavigation<WalletTabScreenProps<any>['navigation']>();
  return (
    <TouchableOpacity style={[common.listItem]} onPress={() => navigation.navigate(link)}>
      <View style={[styles.iconContainer]}>{icon}</View>
      <View style={[styles.textContainer]}>
        <Text style={[styles.itemTitle]}>{title}</Text>
        <Text style={[styles.description]}>{description}</Text>
      </View>
      <Entypo name="chevron-right" size={24} color={theme.COLOR_TEXT} />
    </TouchableOpacity>
  );
};

const AccountMenu: React.FC<SettingsTabScreenProps<'Settings'>> = () => {
  return (
    <Shell>
      <View style={[common.headingContainer]}>
        <Text style={[common.headingLarge]}>Identity</Text>
      </View>
      <View style={[common.list]}>
        {menu.general.map(({ title, description, icon, link }, index) => (
          <ListItem title={title} description={description} icon={icon} link={link} key={index} />
        ))}
      </View>
      <View style={[common.list, { marginTop: 20 }]}>
        <View style={[common.headingContainer]}>
          <Text style={[common.headingLarge]}>Security</Text>
        </View>
        {menu.support.map(({ title, description, icon, link }, index) => (
          <ListItem title={title} description={description} icon={icon} link={link} key={index} />
        ))}
      </View>
    </Shell>
  );
};

export default AccountMenu;

const styles = StyleSheet.create({
  description: {
    color: theme.COLOR_TERTIARY,
    fontFamily: theme.FONT_MAIN,
    fontSize: theme.FONT_SIZE_MD,
  },
  iconContainer: {
    height: '100%',
    alignItems: 'flex-start',
  },
  itemTitle: {
    color: theme.COLOR_TEXT,
    fontFamily: theme.FONT_HEADING,
    fontSize: theme.FONT_SIZE_XL,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 12,
    flex: 1,
  },
});
