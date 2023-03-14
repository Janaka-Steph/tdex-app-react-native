import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import BigButton from '../../components/BigButton';
import Shell from '../../components/Shell';
import common from '../../styles/common.style';
import theme from '../../styles/theme.style';

const TorProxy: React.FC = () => {
  const [text, onChangeText] = React.useState('https://proxy.tdex.network');

  return (
    <Shell>
      <Text style={[styles.text]}>
        Natively, web browsers do not support the Tor protocol. That&apos;s why we are using a Tor
        proxy to redirect requests to onion endpoints. By default, clients use
        https://proxy.tdex.network as proxy. If you want to use your own, specify your proxy
        endpoint below.
      </Text>
      <TextInput style={[common.input]} onChangeText={onChangeText} value={text} />
      <View style={{ width: '80%' }}>
        <BigButton text="SAVE ENDPOINT" style={{ marginTop: 40 }} />
      </View>
    </Shell>
  );
};

export default TorProxy;

const styles = StyleSheet.create({
  text: {
    color: theme.COLOR_TEXT,
    fontFamily: theme.FONT_MAIN,
    fontSize: theme.FONT_SIZE_L,
    lineHeight: 24,
  },
});
