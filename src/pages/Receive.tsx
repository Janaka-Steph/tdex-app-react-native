import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Clipboard, Dimensions, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import CurrencyIcon from '../components/AssetIcon';
import Shell from '../components/Shell';
import type { WalletTabScreenProps } from '../navigation/navigationTypes';
import theme from '../styles/theme.style';

const Receive: React.FC<WalletTabScreenProps<'Receive'>> = ({ route }) => {
  const address =
    'tlq1qqt49dhwe4as5t54akzv8ttlg0nd8xg4dpqhyns06cx4ys5pz5n9p0cdecve3zu3hqsntud5ccgjahntnumm8cqv4aljk27wlr';
  return (
    <Shell>
      <CurrencyIcon assetHash={route.params.asset.assetHash} />
      <View
        style={{
          width: Dimensions.get('window').width * 0.6,
          height: Dimensions.get('window').width * 0.6,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          marginVertical: 50,
        }}
      >
        <QRCode value={address} size={Dimensions.get('window').width * 0.5} />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          backgroundColor: theme.COLOR_SECONDARY,
          padding: 16,
          flexDirection: 'row',
        }}
      >
        <Text style={{ color: theme.COLOR_TEXT, marginRight: 8, flex: 1 }}>{address}</Text>
        <MaterialIcons
          name="content-copy"
          size={24}
          color={theme.COLOR_TEXT}
          onPress={() => Clipboard.setString(address)}
        />
      </View>
    </Shell>
  );
};

export default Receive;
