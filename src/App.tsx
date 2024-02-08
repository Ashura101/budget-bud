import {View, Text, Appearance, useColorScheme} from 'react-native';
import React from 'react';
import {colors} from './theme';
import {getActiveColors} from './constants';

const App = () => {
  const theme = useColorScheme(); // Get deice's theme

  const activeColors = getActiveColors(theme);

  return (
    <View style={{flex: 1, backgroundColor: activeColors.base}}>
      <Text style={{color: activeColors.text}}>App</Text>
    </View>
  );
};

export default App;
