import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { ImageSourcePropType } from 'react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Shell from '../components/Shell';
import type { WalletTabScreenProps } from '../navigation/navigationTypes';
import theme from '../styles/theme.style';
import { USDT_ASSET } from '../utils/constants';

const data = [
  {
    assetName: 'Bitcoin',
    assetTicker: 'BTC',
    icon: require('../assets/img/coins/btc.png'),
  },
  {
    assetName: 'Liquid Bitcoin',
    assetTicker: 'L-BTC',
    icon: require('../assets/img/coins/lbtc.png'),
  },
  {
    assetName: 'Liquid CAD',
    assetTicker: 'LCAD',
    icon: require('../assets/img/coins/lcad.png'),
  },
  {
    assetName: 'Tether USD',
    assetTicker: 'USDT',
    icon: require('../assets/img/coins/usdt.png'),
  },
  {
    assetName: 'BTSE Token',
    assetTicker: 'BTSE',
    icon: require('../assets/img/coins/btse.png'),
  },
  {
    assetName: 'Add Liquid Asset',
    assetTicker: undefined,
    icon: undefined,
  },
];

interface TileProps {
  assetName: string;
  assetTicker?: string;
  icon: ImageSourcePropType;
}

const Tile = ({ assetName, assetTicker, icon }: TileProps) => {
  const navigation = useNavigation<WalletTabScreenProps<'AssetList'>['navigation']>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Receive', { asset: USDT_ASSET['testnet'] })}
      style={tileStyles.item}
    >
      {icon ? (
        <Image source={icon} style={{ width: 45, height: 45, marginBottom: 8 }} />
      ) : (
        <Feather
          name="plus-circle"
          size={38}
          style={{ marginBottom: 8 }}
          color={theme.COLOR_PRIMARY}
        />
      )}
      <Text
        style={{
          color: theme.COLOR_TEXT,
          fontFamily: theme.FONT_MAIN,
          fontSize: theme.FONT_SIZE_L,
          marginBottom: 2,
        }}
      >
        {assetName}
      </Text>
      {assetTicker && (
        <Text
          style={{
            color: theme.COLOR_TERTIARY,
            fontFamily: theme.FONT_SUB,
            fontSize: theme.FONT_SIZE_S,
          }}
        >
          {assetTicker}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const tileStyles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'space-between',
  },
  item: {
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 8,
    padding: 16,
    height: 130,
  },
});

function AssetList() {
  return (
    <Shell>
      <View style={tileStyles.container}>
        {data.map((item, index) => (
          <Tile {...item} key={index} />
        ))}
      </View>
    </Shell>
  );
}

export default AssetList;
