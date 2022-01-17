import React, {useEffect, useState} from 'react';
import {getCharacters, filterCharacters} from '../../services/api';
import Loading from '../../components/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import {
  Container, 
  CharactersList, 
  ItemContainer,
  Avatar,
  InfosContainer,
  CharacterName,
  CharacterStatus,
  CharacterGender,
  StatusContainer,
  StatusIndicator,
  FavoriteContainer,
  FavoriteIcon,
  FavoriteButton,
  Title,
  SearchContainer,
  SearchInput,
  SearchIcon
} from './styles';

const Home: React.FC = ({navigation}) => {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    loadCharacters()
  },[page])

  useEffect(() => {
    searchCharacters()
  },[searchText])

  useEffect(() => {
    getFavoriteCharacter()
  },[isFocused])

  const getFavoriteCharacter = async () => {
    const res = await AsyncStorage.getItem('favoriteList')
    if(res != null) setFavorites(JSON.parse(res));
  }

  const loadCharacters = async() => {
    if(loading) return;

    setLoading(true);

    const res = await getCharacters(page);
    
    setData([...data, ...res]);
    setPage(page + 1);
    setLoading(false);
  }

  const searchCharacters = async() => {
    const res = await filterCharacters(searchText);
    setSearchResult(res)
  }

  const listData = () =>{
    if(searchText != ""){
      return searchResult
    }
    return data 
  }

  const renderListLoading = () => {
    if(!loading) return null;

    return(
      <Loading/>
    )
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

    await loadCharacters()
  }
  

  const renderItem = ({ item }) => (
    <ItemContainer onPress={() => {navigation.navigate("Characters", item)}}>
        <Avatar
          resizeMode='cover'
          source={{uri: item.image}}
        />
        <InfosContainer>
          <CharacterName>{item.name}</CharacterName>
          <StatusContainer>
            <StatusIndicator status={item.status}/>
            <CharacterStatus>{item.status} - {item.species}</CharacterStatus>
          </StatusContainer>
          <CharacterGender>{item.gender}</CharacterGender>
        </InfosContainer>

        <FavoriteContainer>
          <FavoriteButton onPress={() => {favoriteCharacter(item.id)}}>
            <FavoriteIcon favorite={favorites.includes(item.id)}/>
          </FavoriteButton>
        </FavoriteContainer>

    </ItemContainer>
  );

  if (loading) {
    return(
      <Loading/>
    )
  }

  return (
    <Container>
      <Title>Rick and Morty</Title>

      <SearchContainer>
        <SearchIcon />
        <SearchInput 
          value={searchText}
          onChangeText={text => setSearchText(text)}
          placeholder='Buscar'
          placeholderTextColor="#7D7D7D" 
        />
      </SearchContainer>

      <CharactersList
        data={listData()}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ marginHorizontal: 16}}
        onEndReached={searchText === "" && loadCharacters}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderListLoading}
      />
    </Container>
  )
}

export default Home;
