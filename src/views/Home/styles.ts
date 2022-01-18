import { Dimensions } from 'react-native';
import styled from "styled-components/native";
import colors from '../../assets/styles/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get("screen").width

interface Props{
  status?: string;
  favorite?: boolean;
  active?: boolean;
}

export const Text = styled.Text`
  color: ${colors.white};
  font-family: Roboto;
  font-size: 12px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primary};
`;

export const Title = styled(Text)`
  margin-top: 50px;
  margin-bottom: 25px;
  font-size: 30px;
  padding: 0 16px;
  font-weight: bold;
`;

export const CharactersList = styled.FlatList``;

export const ItemContainer = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  margin-bottom: 10px;
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

`;

export const InfosContainer = styled.View`
  padding: 8px;
  justify-content: center;
  flex: 2;
`;

export const CharacterName = styled(Text)`
    font-weight: bold;
    border-bottom-width: 1px;
    padding-bottom: 2px;
    font-size: 18px;
    border-bottom-color: ${colors.white};
    margin-bottom: 2px;
`;

export const CharacterStatus = styled(Text)``;

export const CharacterGender = styled(Text)``;

export const StatusIndicator = styled.View<Props>`
  width: 4px;
  height: 4px;
  background-color: ${({status}) => status === "Alive" ? colors.green : (status === "Dead" ? colors.red : colors.gray)};
  border-radius: 6px;
  margin-right: 2px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FavoriteContainer = styled.View`
  min-width: 30px;
  padding: 0 8px;
`;

export const ContainerIndicator = styled.View`
  padding: 10px;
`;

export const SearchContainer = styled.View`
    background-color: ${colors.secondary};
    height: 45px;
    margin: 0 16px 20px;
    border-radius: 5px;
    align-items: center;
    padding-left: 10px;
    flex-direction: row;
`;

export const SearchInput = styled.TextInput`
    color: ${colors.white};
    padding-left: 5px;
    font-size: 16px;
    flex: 1;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: ${colors.white};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

export const TabButton = styled.TouchableOpacity<Props>`
  justify-content: center;
  align-items: center;
  width: ${width/2}px;
  border-bottom-color:  ${({active}) => active ? colors.white : colors.secondary};
  border-bottom-width: 2px;
  padding-bottom: 10px;
`;

export const TabText = styled.Text<Props>`
  color: #fff;
  font-size: 14px;
`;

export const FavoriteAlertContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FavoriteAlert = styled.Text`
  color: ${colors.gray}
`;

export const SearchIcon = styled(Icon).attrs(() => ({
  name: 'search1',
  color: colors.gray,
  size: 18,
}))``;

export const FavoriteIcon = styled(Icon).attrs(({ favorite }) => ({
  name: favorite ? "heart" : "hearto",
  color: colors.red,
  size: 18,
}))``;



