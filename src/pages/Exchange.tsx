import { Text, View } from 'react-native';

import Shell from '../components/Shell';

function Exchange() {
  return (
    <Shell>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Exchange!</Text>
      </View>
    </Shell>
  );
}

export default Exchange;
