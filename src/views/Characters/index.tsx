import React, {useEffect, useState} from 'react';
import {getEpisodesByUrl} from '../../services/api';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Title,
  CharacterAvatar,
  InfosCharacter,
  Info,
  EpisodesContainer,
  EpisodeName,
  TitleEpisode,
  ArrowRightIcon,
  NumberEpisodes,
  InfosEpisodes,
  LoadingContainer,
  NameContainer,
  FavoriteButton,
  FavoriteIcon,
} from './styles';

interface EpisodeData {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

  const Characters: React.FC = ({route}) => {

  const character = route.params
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [episodeData, setEpisodeData] = useState<EpisodeData>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    loadEpisodes();
    getFavoriteCharacter();
  },[character])

  const loadEpisodes = async () => {
    if (loading) return;

    setLoading(true);

    let array: any = [];
    for (const episode of character.episode) {
      const res = await getEpisodesByUrl(episode);
      array.push(res)
    }
    setData(array)
    setLoading(false);
  }

  const getFavoriteCharacter = async () => {
    const res = await AsyncStorage.getItem('favoriteList')
    if (res != null) setFavorites(JSON.parse(res));
  }

  const favoriteCharacter = async (id: number) => {
    if (favorites.includes(id)) {
      const index = favorites.indexOf(id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
      await AsyncStorage.setItem('favoriteList', JSON.stringify(favorites))
    } else {
      favorites.push(id);
      await AsyncStorage.setItem('favoriteList', JSON.stringify(favorites))
    }
    loadEpisodes()
  }

  const openModal = (item) => {
    setEpisodeData(item);
    setModalVisible(true);
  }

  return (
    <Container contentContainerStyle={{paddingBottom: 32}}>
          <NameContainer>
            <Title>{character.name}</Title>    
            <FavoriteButton onPress={() => { favoriteCharacter(character.id) }}>
              <FavoriteIcon favorite={favorites.includes(character.id)} />
            </FavoriteButton>
          </NameContainer>
          <CharacterAvatar source={{uri:character.image}} resizeMode='cover'/>
          <InfosCharacter>
              <Info>Status: {character.status}</Info>
              <Info>Gender: {character.gender}</Info>
              <Info>Origin: {character.origin.name}</Info>
              <Info>Specie: {character.species}</Info>
              <Info>Location: {character.location.name}</Info>
          </InfosCharacter>
       
          <InfosEpisodes>
              <TitleEpisode>Total de aparições:</TitleEpisode>
              <NumberEpisodes>{data.length}</NumberEpisodes>   
          </InfosEpisodes>

        {data.length === 0 &&
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        }

        <Modal 
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          episodeData={episodeData}
        />
      
        {data.map((item, index) => (
        <EpisodesContainer key={index} onPress={() => { openModal(item) }}>
          <EpisodeName numberOfLines={1}>{item.episode} - {item.name}</EpisodeName>
          <ArrowRightIcon />
        </EpisodesContainer>
        ))}

    </Container>
  )
}

export default Characters;
