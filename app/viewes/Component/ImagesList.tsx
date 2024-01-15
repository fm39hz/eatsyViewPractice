import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ImageButton} from './PersonalImage';
import {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {AppTheme} from '../../themes/ThemeConfig';

type ImageProps = {
  id: string;
  url: string;
};

const styles = StyleSheet.create({
  headerOverflow: {
    paddingLeft: 8,
  },
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    color: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 16,
    color: 'black',
  },
  bodyContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    gap: 12,
  },
  buttonContainer: {
    width: 96,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: 24,
    height: 24,
  },
  buttonIcon: {
    flex: 1,
    width: 24,
    height: 24,
  },
});

export const ImagesListHeader = () => {
  return (
    <View style={styles.headerOverflow}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Hinh anh</Text>
        <TouchableOpacity>
          <Text style={{color: AppTheme().colors.primary}}>Xem them</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ImagesListBody = () => {
  const [images, setImages] = useState([] as ImageProps[]);
  const fetchApi = async () => {
    const imageDatas = await fetch(
      'https://api.thecatapi.com/v1/images/search?limit=10',
    );
    setImages((await imageDatas.json()) as ImageProps[]);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <ScrollView
      style={styles.bodyContainer}
      horizontal={true}
      contentContainerStyle={{gap: 12}}>
      {images.map(image => (
        <ImageButton key={image.id} Url={image.url} />
      ))}
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/Icons/add_24px.png')}
            style={styles.buttonIcon}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export const ImagesList = () => {
  return (
    <View>
      <ImagesListHeader />
      <ImagesListBody />
    </View>
  );
};
