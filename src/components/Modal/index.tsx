import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Pressable, StyleSheet, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { getCharacterByUrl } from '../../services/api';
import Loading from '../../components/Loading';
import { useNavigation } from '@react-navigation/native';
import background1 from '../../assets/images/background1.jpg'
import background2 from '../../assets/images/background2.jpg'
import background3 from '../../assets/images/background3.jpg'
import background4 from '../../assets/images/background4.jpg'

import {
  ModalContainer,
  Container,
  ImageContainer,
  ImageEpisode,
  InfosContainer,
  InfosModal,
  TitleModal,
  OtherChacaraters,
  TextButton,
  CalendarIcon,
  DateInfo,
  CharacterCard,
  CharacterNameContainer,
  CardName
} from './styles';

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: () => void;
  episodeData: {
    air_date: string;
    characters: string[];
    created: string;
    episode: string;
    id: number;
    name: string;
    url: string;
  }
}

const ModalEpisodes: React.FC<ModalProps> = ({modalVisible, setModalVisible, episodeData}) => {

  const [bgImage, setBgImage] = useState('')
  const images = [background1, background2, background3, background4]
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (modalVisible) {
      if(data.length === 0) loadCharactersByEpisode()
    } else {
      setData([]);
    }

    const randomNumber = Math.floor(Math.random() * images.length);
    setBgImage(images[randomNumber])
  }, [modalVisible])

  const loadCharactersByEpisode = async () => {
    if (loading) return;
    setLoading(true);
    let array: any = [];
    for (const character of episodeData.characters) {
      const res = await getCharacterByUrl(character);
      array.push(res)
    }
    setData(array)
    setLoading(false);
  }

  const navigateToCharacter = (character) => {
    setModalVisible(false);
    navigation.navigate("Characters", character)
  }

  const renderItem = ({ item }) => {
    return (
      <CharacterCard onPress={() => {navigateToCharacter(item)}}>
        <ImageBackground style={{height: 130, width: 100}} source={{uri: item.image}} resizeMode='cover' imageStyle={{borderRadius: 6, position: 'relative'}}>
          <CharacterNameContainer>
            <CardName numberOfLines={1}>{item.name}</CardName>
          </CharacterNameContainer>
        </ImageBackground>
      </CharacterCard>
    )
  }

    return (
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          >
          <Container>
            <ModalContainer>
               <ImageContainer>
                    <ImageEpisode source={bgImage} resizeMode='cover'/>
               </ImageContainer>
               <InfosContainer>
                  <DateInfo>
                    <CalendarIcon/>
                    <InfosModal>{episodeData.air_date}</InfosModal>
                  </DateInfo>
                    <TitleModal>{episodeData.episode} - {episodeData.name}</TitleModal>
                    <OtherChacaraters>Casting</OtherChacaraters>
                </InfosContainer>

                {loading &&
                  <Loading />
                }

                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.id.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
                
                <Pressable
                  onPress={() => setModalVisible(false)}
                >
                <TextButton>Close</TextButton>
              </Pressable>
            </ModalContainer>
      </Container>
        </Modal>
    )
}

export default ModalEpisodes;