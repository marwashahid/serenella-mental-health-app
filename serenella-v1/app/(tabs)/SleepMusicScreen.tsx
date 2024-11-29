import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type SleepMusicItem = {
  id: string;
  title: string;
  duration: string;
  image: any;
};

const sleepMusic: SleepMusicItem[] = [
  {
    id: '1',
    title: 'Night Island',
    duration: '30 MIN · SLEEP MUSIC',
    image: require('../../assets/Sleep1.png'), // Replace with your images
  },
  {
    id: '2',
    title: 'Sweet Sleep',
    duration: '45 MIN · SLEEP MUSIC',
    image: require('../../assets/Sleep2.png'),
  },
  {
    id: '3',
    title: 'Good Night',
    duration: '45 MIN · SLEEP MUSIC',
    image: require('../../assets/Sleep3.png'),
  },
  {
    id: '4',
    title: 'Sweet Dreams',
    duration: '45 MIN · SLEEP MUSIC',
    image: require('../../assets/Sleep4.png'),
  },
  {
    id: '5',
    title: 'Calm Mind',
    duration: '45 MIN · RELAX MUSIC',
    image: require('../../assets/music1.png'),
  },
  {
    id: '6',
    title: 'Joyful Soul',
    duration: '45 MIN · INSTRUMENTAL MUSIC',
    image: require('../../assets/Music2.png'),
  },
  {
    id: '7',
    title: 'Serenity',
    duration: '45 MIN · MEDITATION MUSIC',
    image: require('../../assets/Music3.png'),
  },
  {
    id: '8',
    title: 'Peace',
    duration: '45 MIN · MEDITATION MUSIC',
    image: require('../../assets/Music4.png'),
  },
  {
    id: '9',
    title: 'Dream Land',
    duration: '45 MIN · NATURE MUSIC',
    image: require('../../assets/Nature1.png'),
  },
  {
    id: '10',
    title: 'Love',
    duration: '45 MIN · NATURE MUSIC',
    image: require('../../assets/Nature2.png'),
  },
  {
    id: '11',
    title: 'Happy',
    duration: '45 MIN · RAIN MUSIC',
    image: require('../../assets/Rain1.png'),
  },
  {
    id: '12',
    title: 'Moonsoon',
    duration: '45 MIN · RAIN MUSIC',
    image: require('../../assets/Rain2.png'),
  },
  {
    id: '13',
    title: 'Blissfull World',
    duration: '45 MIN · Rain MUSIC',
    image: require('../../assets/Rain3.png'),
  },
  {
    id: '14',
    title: 'Autmn',
    duration: '45 MIN · RAIN MUSIC',
    image: require('../../assets/Rain4.png'),
  },
  {
    id: '15',
    title: 'Rainy Days',
    duration: '45 MIN · RAIN MUSIC',
    image: require('../../assets/Rain5.png'),
  },
];

const SleepMusicScreen: React.FC = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }: { item: SleepMusicItem }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDuration}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Meditation Music</Text>
      </View>

      {/* Music List */}
      <FlatList
        data={sleepMusic}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C4D',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1, // Allows centering the header text
    textAlign: 'center',
    marginRight: 100, 
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#2C2C72',
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  cardText: {
    marginLeft: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDuration: {
    color: '#a9a9d0',
    fontSize: 12,
    marginTop: 5,
  },
});

export default SleepMusicScreen;
