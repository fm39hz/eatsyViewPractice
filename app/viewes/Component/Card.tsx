import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export type CardProps = {
  title: string;
  detail: string;
  color: string;
  background: string;
  icon: string;
};

export const Card = (props: CardProps): React.JSX.Element => {
  const styles = StyleSheet.create({
    cardBody: {
      flex: 1,
      gap: 16,
      width: 120,
      padding: 16,
      alignItems: 'flex-start',
      borderRadius: 12,
      backgroundColor: 'white',
    },
    cardIcon: {
      color: props.color,
      backgroundColor: props.background,
      borderRadius: 50,
      padding: 8,
      width: 40,
      height: 40,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    cardTitle: {
      fontSize: 16,
      color: 'black',
    },
    cardDetail: {
      fontSize: 14,
      textDecorationColor: 'black',
      color: 'black',
    },
    cardTrailingSpace: {
      height: 16,
    },
  });
  return (
    <TouchableOpacity
      style={styles.cardBody}
      onPress={() => console.log(props.title)}>
      <Icon name={props.icon} style={styles.cardIcon} size={24}></Icon>
      <View style={styles.cardTrailingSpace} />
      <View style={{flex: 1}}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardDetail}>{props.detail}</Text>
      </View>
    </TouchableOpacity>
  );
};
