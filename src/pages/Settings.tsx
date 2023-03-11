import { Text, View } from 'react-native';

import Shell from '../components/Shell';

function Settings() {
  return (
    <Shell>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    </Shell>
  );
}

export default Settings;
