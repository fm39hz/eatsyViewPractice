import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export const FloatingButton = () => {
  const styles = StyleSheet.create({
    floatingContainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 16,
    },
    buttonContainer: {
      padding: 16,
      backgroundColor: '#CCE8E7',
      borderRadius: 16,
      shadowColor: 'rgba(0, 0, 0, 0.30)',
      shadowOffset: {
        width: 1,
        height: -3,
      },
    },
    buttonIcon: {
      width: 24,
      height: 24,
    },
  });
  return (
    <View style={styles.floatingContainer}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image
          source={require('../../../assets/Icons/add_24px.png')}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
