import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BigButton from '../../components/BigButton';
import Shell from '../../components/Shell';
import type { SettingsTabScreenProps } from '../../navigation/navigationTypes';
import common from '../../styles/common.style';
import theme from '../../styles/theme.style';

const LiquidityProviders: React.FC<SettingsTabScreenProps<'LiquidityProviders'>> = () => {
  return (
    <Shell>
      <View style={[common.headingContainer]}>
        <Text style={[common.headingLarge]}>Providers</Text>
      </View>
      {[...Array(5)].map((_, index) => (
        <View style={[common.listItem]} key={index}>
          <View style={[styles.container]}>
            <Text style={[styles.providerName]}>Testnet dev daemon</Text>
            <Text style={[styles.providerEndpoint]}>https://provider.tdex.network:19945</Text>
          </View>
          <TouchableOpacity style={[styles.trashButton]} onPress={() => console.log('clicked')}>
            <Ionicons name="md-trash" size={22} color={theme.COLOR_TEXT} />
          </TouchableOpacity>
        </View>
      ))}
      <BigButton
        text="ADD PROVIDER"
        style={{ marginTop: 20, marginBottom: 8 }}
        icon={
          <AntDesign
            name="pluscircleo"
            size={18}
            color={theme.COLOR_PRIMARY}
            onPress={() => console.log('setNewProvider')}
          />
        }
      />
      <BigButton
        text="REFRESH"
        icon={
          <Ionicons
            name="refresh-circle-outline"
            size={22}
            color={theme.COLOR_PRIMARY}
            onPress={() => console.log('refresh')}
          />
        }
      />
    </Shell>
  );
};

export default LiquidityProviders;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  providerName: {
    color: theme.COLOR_TEXT,
    fontSize: theme.FONT_SIZE_MD,
    fontFamily: theme.FONT_HEADING,
    marginBottom: 8,
  },
  providerEndpoint: {
    color: theme.COLOR_TEXT,
    fontSize: theme.FONT_SIZE_S,
    fontFamily: theme.FONT_MAIN,
  },
  trashButton: {
    alignItems: 'center',
    backgroundColor: theme.COLOR_DANGER,
    borderRadius: 50 / 2,
    paddingVertical: 3,
    width: 50,
  },
});
