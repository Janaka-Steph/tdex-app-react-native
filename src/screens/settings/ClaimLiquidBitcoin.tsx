import React from 'react';
import { TextInput } from 'react-native';

import BigButton from '../../components/BigButton';
import ScreenDescription from '../../components/ScreenDescription';
import Shell from '../../components/Shell';
import common from '../../styles/common.style';

const ClaimLiquidBitcoin: React.FC = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <Shell>
      <ScreenDescription
        description="Here you can manually claim your deposit in case the process was interrupted abruptly. Please only use this section if your deposit has 102 confirmations or more. You can only claim a deposit made from this application and this set of keys. To claim, please insert the BTC address below."
        title="Claim your Liquid Bitcoin"
      />
      <TextInput
        style={[common.input]}
        placeholderTextColor={common.inputPlaceholder.color}
        placeholder="BTC deposit address"
        onChangeText={onChangeText}
        value={text}
      />
      <BigButton text="CLAIM" disabled={text === ''} style={{ marginTop: 40 }} />
    </Shell>
  );
};

export default ClaimLiquidBitcoin;
