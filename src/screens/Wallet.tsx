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
      <View style={[styles.totalBalanceContainer]}>
        <CircleTotalBalance />
      </View>
      <View style={[common.headingContainer]}>
        <Text style={[common.headingLarge]}>Asset list</Text>
        <Feather
          name="plus-circle"
          size={24}
          color={theme.COLOR_PRIMARY}
          onPress={() => navigation.navigate('AssetList')}
        />
      </View>

      <View style={[common.list]}>
        {[...Array(8)].map((_, index) => (
          <View style={[common.listItem]} key={index}>
            <View style={[styles.assetNameContainer]}>
              <Image
                source={require('../assets/img/coins/lbtc.png')}
                style={{ width: 24, height: 24 }}
              />
              <Text style={[styles.assetName]}>Bitcoin</Text>
            </View>
            <View style={[styles.assetAmountContainer]}>
              <Text style={[styles.assetAmount]}>0.00000000</Text>
              <Text style={[styles.assetFiatAmount]}>0.00 USD</Text>
            </View>
          </View>
        ))}
      </View>
    </Shell>
  );
}

export default Wallet;

const styles = StyleSheet.create({
  totalBalanceContainer: {
    alignItems: 'center',
    marginBottom: 16,
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
} as const);
