import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const MainHeader = () => {
  const styles = StyleSheet.create({
    headerContainer: {
      paddingVertical: 8,
      paddingHorizontal: 4,
      height: 64,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      backgroundColor: 'white',
    },
    headerButtonContainer: {
      height: 48,
      width: 48,
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    headerTrailingSpace: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.headerContainer}>
      <Icon.Button
        name="bars"
        onPress={() => console.log('menu')}
        style={styles.headerButtonContainer}
        color={'black'}
      />
      <View style={styles.headerTrailingSpace}></View>
      <Icon.Button
        name="search"
        onPress={() => console.log('search')}
        style={styles.headerButtonContainer}
        color={'black'}
      />
      <Icon.Button
        name="columns"
        onPress={() => console.log('help')}
        style={styles.headerButtonContainer}
        color={'black'}
      />
    </View>
  );
};
