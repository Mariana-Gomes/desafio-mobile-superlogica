import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from '../../assets/styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get("screen").width

export const Text = styled.Text`
  color: ${colors.white};
  font-family: Roboto;
  font-size: 12px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.primary};
  padding: 16px;
`;

export const Title = styled(Text)`
  margin-top: 20px;
  margin-bottom: 25px;
  font-size: 30px;
  font-weight: bold;
  flex: 2;
`;

export const CharacterAvatar = styled.Image`
    height: 300px;
    background-color: ${colors.secondary};
    border-radius: 10px;
`;

export const InfosCharacter = styled.View``;

export const Info = styled(Text)`
  font-size: 16px;
  margin-top: 10px;
  justify-content: center;
`;

export const EpisodesContainer = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.white};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EpisodeName = styled(Text)`
  font-size: 16px;
  padding: 16px 0;
  width: ${width - 100}px;
`;

export const TitleEpisode = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

export const NumberEpisodes = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

export const InfosEpisodes = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const LoadingContainer = styled.View`
  margin-top: 30px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: ${colors.white};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const FavoriteIcon = styled(Icon).attrs(({ favorite }) => ({
  name: favorite ? "heart" : "hearto",
  color: colors.red,
  size: 18,
}))``;


export const ArrowRightIcon = styled(Icon).attrs(() => ({
  name: 'right',
  color: colors.white,
  size: 20,
}))`
`;




