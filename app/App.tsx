import React from 'react';
import {useColorScheme, View} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {UserPages} from './viewes/UserPages';
import {DishPages} from './viewes/DishPages';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const buttonList = [<UserPages />, <DishPages />];
  return (
    <View style={backgroundStyle}>
      <Header />
      <View>
        {buttonList.map(item => {
          return item;
        })}
      </View>
    </View>
  );
}

export default App;
