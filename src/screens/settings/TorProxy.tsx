import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <View style={{ width: '80%' }}>
        <TouchableOpacity style={[common.buttonFullWidth, { marginTop: 40 }]}>
          <Text style={[common.buttonFullWidth.text]}>SAVE ENDPOINT</Text>
        </TouchableOpacity>
      </View>
    </Shell>
  );
};

export default TorProxy;

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.COLOR_SECONDARY,
    borderRadius: 8,
    color: theme.COLOR_TEXT,
    marginTop: 50,
    padding: 20,
    width: '100%',
  },
  text: {
    color: theme.COLOR_TEXT,
    fontFamily: theme.FONT_MAIN,
    fontSize: theme.FONT_SIZE_L,
    lineHeight: 24,
  },
});
