import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppTheme} from '../../themes/ThemeConfig';

const USER_NAME = 'Pham Danh Hien';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 16,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    color: 'black',
    fontSize: 32,
    lineHeight: 40,
  },
  promote: {
    color: AppTheme().colors.primary,
    fontWeight: '500',
  },
});

export const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../../assets/EatsyLogo.png')}></Image>
        <View></View>
        <Text style={styles.name}>{USER_NAME}</Text>
        <TouchableOpacity>
          <Text style={styles.promote}>Get Eatsy Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
