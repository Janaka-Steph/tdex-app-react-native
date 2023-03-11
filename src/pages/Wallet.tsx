import { Feather } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';

import CircleTotalBalance from '../components/CircleTotalBalance';
import Shell from '../components/Shell';
import type { WalletTabScreenProps } from '../navigation/navigationTypes';
import common from '../styles/common.style';
import theme from '../styles/theme.style';

function Wallet({ navigation }: WalletTabScreenProps<'Wallet'>) {
  return (
    <Shell>
      <View style={[styles.listItem.totalBalanceContainer]}>
        <CircleTotalBalance />
      </View>
      <View style={[styles.listItem.headerContainer]}>
        <Text style={[common.headingLarge]}>Asset list</Text>
        <Feather
          name="plus-circle"
          size={24}
          color={theme.COLOR_PRIMARY}
          onPress={() => navigation.navigate('AssetList')}
        />
      </View>

      <View style={[styles.listContainer]}>
        {[...Array(8)].map((_, index) => (
          <View style={[styles.listItem]} key={index}>
            <View style={[styles.listItem.assetNameContainer]}>
              <Image
                source={require('../assets/img/coins/lbtc.png')}
                style={{ width: 24, height: 24 }}
              />
              <Text style={[styles.listItem.assetName]}>Bitcoin</Text>
            </View>
            <View style={[styles.listItem.assetAmountContainer]}>
              <Text style={[styles.listItem.assetAmount]}>0.00000000</Text>
              <Text style={[styles.listItem.assetFiatAmount]}>0.00 USD</Text>
            </View>
          </View>
        ))}
      </View>
    </Shell>
  );
}

export default Wallet;

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 16,
    width: '100%',
  },
  listItem: {
    alignItems: 'center',
    backgroundColor: theme.COLOR_SECONDARY,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    padding: 16,
    totalBalanceContainer: {
      alignItems: 'center',
      marginBottom: 16,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
      width: '100%',
    },
    assetNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    assetName: {
      paddingLeft: 10,
      color: theme.COLOR_TEXT,
      fontFamily: theme.FONT_MAIN,
      fontSize: theme.FONT_SIZE_MD,
    },
    assetAmountContainer: {
      flexDirection: 'column',
    },
    assetAmount: {
      color: theme.COLOR_TEXT,
      fontFamily: theme.FONT_SUB,
      fontSize: theme.FONT_SIZE_MD,
    },
    assetFiatAmount: {
      color: theme.COLOR_TERTIARY,
      fontFamily: theme.FONT_SUB_HEADING,
      fontSize: theme.FONT_SIZE_MD,
    },
  },
} as const);
