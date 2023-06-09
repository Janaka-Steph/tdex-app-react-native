import { Feather } from '@expo/vector-icons';
import type { Route } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Shell from '../../components/Shell';
import type {
  SettingsTabScreenProps,
  WalletTabScreenProps,
} from '../../navigation/navigationTypes';
import common from '../../styles/common.style';
import theme from '../../styles/theme.style';

const menu = {
  general: [
    { title: 'Account', selectedValue: undefined, link: 'Account' },
    { title: 'Liquidity providers', selectedValue: undefined, link: 'LiquidityProviders' },
    { title: 'L-BTC unit', selectedValue: 'LBTC', link: undefined },
    { title: 'Default currency', selectedValue: 'EUR', link: undefined },
    { title: 'Explorers endpoints', selectedValue: undefined, link: 'Explorers' },
    { title: 'Network', selectedValue: undefined, link: 'Network' },
    { title: 'Tor proxy endpoint', selectedValue: undefined, link: 'TorProxy' },
    { title: 'Deep restoration', selectedValue: undefined, link: 'DeepRestoration' },
    { title: 'Claim Liquid Bitcoin', selectedValue: undefined, link: 'ClaimLiquidBitcoin' },
  ],
  support: [
    { title: 'FAQ', selectedValue: undefined, link: 'Faq' },
    { title: 'Privacy', selectedValue: undefined, link: 'Privacy' },
    { title: 'Terms & Conditions', selectedValue: undefined, link: 'Terms' },
  ],
};

interface ListItemProps {
  title: string;
  selectedValue?: string;
  link: Route<any>['name'];
}

const ListItem: React.FC<ListItemProps> = ({ title, selectedValue, link }) => {
  const navigation = useNavigation<WalletTabScreenProps<any>['navigation']>();
  return (
    <TouchableOpacity style={[common.listItem]} onPress={() => navigation.navigate(link)}>
      <Text style={[styles.itemTitle]}>{title}</Text>
      <View style={[styles.rightContainer]}>
        {selectedValue ? (
          <View style={[styles.selectedValueContainer]}>
            <Text style={[styles.selectedValue]}>{selectedValue}</Text>
            <Feather name="chevron-right" size={22} color={theme.COLOR_TEXT} />
          </View>
        ) : (
          <Feather name="chevron-right" size={22} color={theme.COLOR_TEXT} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const SettingsMenu: React.FC<SettingsTabScreenProps<'Settings'>> = () => {
  return (
    <Shell>
      <View style={[common.headingContainer]}>
        <Text style={[common.headingLarge]}>General</Text>
      </View>
      <View style={[common.list]}>
        {menu.general.map(({ title, selectedValue, link }, index) => (
          <ListItem title={title} selectedValue={selectedValue} link={link} key={index} />
        ))}
      </View>
      <View style={[common.list, { marginTop: 20 }]}>
        <View style={[common.headingContainer]}>
          <Text style={[common.headingLarge]}>Support</Text>
        </View>
        {menu.support.map(({ title, selectedValue, link }, index) => (
          <ListItem title={title} selectedValue={selectedValue} link={link} key={index} />
        ))}
      </View>
    </Shell>
  );
};

export default SettingsMenu;

const styles = StyleSheet.create({
  selectedValueContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedValue: {
    color: theme.COLOR_PRIMARY,
    marginRight: 8,
  },
  rightContainer: {
    flexDirection: 'row',
  },
  itemTitle: {
    color: theme.COLOR_TEXT,
    fontFamily: theme.FONT_MAIN,
    fontSize: theme.FONT_SIZE_L,
  },
});
