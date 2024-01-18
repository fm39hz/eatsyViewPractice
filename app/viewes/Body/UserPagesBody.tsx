import {ScrollView, StyleSheet} from 'react-native';
import {CardList} from '../Component/CardList';
import {CardProps} from '../Component/Card';
import {ProfileCard} from './ProfileCard';
import {AppTheme} from '../../themes/ThemeConfig';
import {ImagesList} from '../Component/ImagesList';
import {FloatingButton} from '../Component/FloatingButton';

const communityCards: CardProps[] = [
  {
    title: 'Cong dong',
    detail: 'facebook',
    color: '#1976D2',
    background: '#BBDEFB',
    icon: 'users',
  },
  {
    title: 'Gui y kien',
    detail: 'phan hoi',
    color: '#00ACC1',
    background: '#E0F7FA',
    icon: 'commenting-o',
  },
  {
    title: 'FAQs',
    detail: 'Chatbot',
    color: AppTheme().colors.primary,
    background: '#ADFFFE',
    icon: 'question-circle-o',
  },
  {
    title: 'Ho tro',
    detail: 'Zalo OA',
    color: AppTheme().colors.primary,
    background: '#BBDEFB',
    icon: 'bars',
  },
];

const libraryCards: CardProps[] = [
  {
    title: 'Da luu',
    detail: '10 mon',
    color: '#BA1A1A',
    background: '#FFEDEA',
    icon: 'bookmark',
  },
  {
    title: 'Thuc pham',
    detail: '11 Thuc pham',
    color: '#4B607C',
    background: '#D3E4FF',
    icon: 'tint',
  },
  {
    title: 'Mon an',
    detail: '11 mon',
    color: '#FAAD14',
    background: '#FFFBE6',
    icon: 'bars',
  },
  {
    title: 'Hoat dong',
    detail: '5 hoat dong',
    color: AppTheme().colors.primary,
    background: '#ADFFFE',
    icon: 'bars',
  },
];

const targetCards: CardProps[] = [
  {
    title: 'Dinh duong',
    detail: '2 muc tieu',
    color: '#FB8C00',
    background: '#FFF3E0',
    icon: 'bars',
  },
  {
    title: 'Hoat dong',
    detail: '2 muc tieu',
    color: '#00ACC1',
    background: '#E0F7FA',
    icon: 'bars',
  },
  {
    title: 'Can nang',
    detail: '1 muc tieu',
    color: '#F4511E',
    background: '#FBE9E7',
    icon: 'bars',
  },
  {
    title: 'Nuoc uong',
    detail: '1 muc tieu',
    color: '#039BE5',
    background: '#E1F5FE',
    icon: 'bars',
  },
];

export const UserPagesBody = () => {
  const styles = StyleSheet.create({
    bodyContainer: {
      flex: 1,
      backgroundColor: AppTheme().colors.surface,
      paddingVertical: 12,
    },
    listHeader: {
      alignItems: 'center',
      color: 'black',
      paddingLeft: 8,
    },
  });
  return (
    <ScrollView style={styles.bodyContainer}>
      <ProfileCard />
      <CardList
        value="Cong dong va ho tro"
        hasOverflow={false}
        listItem={communityCards}
      />
      <CardList value="Bo suu tap" hasOverflow={true} listItem={libraryCards} />
      <CardList value="Muc tieu" hasOverflow={true} listItem={targetCards} />
      <ImagesList />
      <FloatingButton />
    </ScrollView>
  );
};
