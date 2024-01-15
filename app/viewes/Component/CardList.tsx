import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card, CardProps} from './Card';
import {AppTheme} from '../../themes/ThemeConfig';

type CardListHeaderProps = {
  value: string;
  hasOverflow: boolean;
};

type CardListBodyProps = {
  listItem: CardProps[];
};

type CardListProps = {
  value: string;
  hasOverflow: boolean;
  listItem: CardProps[];
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
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export const CardListBody = (props: CardListBodyProps): React.JSX.Element => {
  return (
    <ScrollView
      style={styles.bodyContainer}
      horizontal={true}
      contentContainerStyle={{gap: 12}}>
      {props.listItem.map((cardProps, key) => (
        <Card key={key} {...cardProps} />
      ))}
    </ScrollView>
  );
};

export const CardListHeader = (props: CardListHeaderProps) => {
  return (
    <View style={styles.headerOverflow}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{props.value}</Text>
        {props.hasOverflow ? (
          <TouchableOpacity>
            <Text style={{color: AppTheme().colors.primary}}>Xem them</Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export const CardList = (props: CardListProps) => {
  return (
    <View>
      <CardListHeader value={props.value} hasOverflow={props.hasOverflow} />
      <CardListBody listItem={props.listItem} />
    </View>
  );
};
