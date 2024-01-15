import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

type ImageButtonProps = {
  Url: string;
};

export const ImageButton = (props: ImageButtonProps) => {
  const styles = StyleSheet.create({
    imageContainer: {},
    imageView: {
      flex: 1,
      width: 96,
      height: 96,
      borderRadius: 12,
      backgroundColor: 'white',
    },
  });
  return (
    <TouchableOpacity style={styles.imageContainer}>
      <Image source={{uri: props.Url}} style={styles.imageView} />
    </TouchableOpacity>
  );
};
