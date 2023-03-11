import { useFonts } from 'expo-font';

import { Navigation } from './navigation/Navigation';

export default function App() {
  const [loaded] = useFonts({
    'DMMono-Medium': require('./assets/fonts/DMMono-Medium.otf'),
    'DMMono-Regular': require('./assets/fonts/DMMono-Regular.otf'),
    'DMSans-Regular': require('./assets/fonts/DMSans-Regular.otf'),
    'DMSans-Bold': require('./assets/fonts/DMSans-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return <Navigation />;
}
