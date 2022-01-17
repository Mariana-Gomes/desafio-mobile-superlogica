import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../assets/styles/colors'
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get("screen").width

export const InfosModal = styled.Text`
    color: ${colors.white};
    margin-bottom: 5px;
`;

export const Container = styled.View`
     flex: 1;
     justify-content: center;
     align-items: center;
     margin-top: 22px;
`;

export const ModalContainer = styled.View`
     width: ${width - 50}px;
     margin: 20px;
     background-color: ${colors.secondary};
     border-radius: 10px;
`;

export const ImageContainer = styled.View`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
`;

export const ImageEpisode = styled.Image`
     height: 150px;
     width: 340px;
`;

export const InfosContainer = styled.View`
     padding: 25px 25px 10px 25px; 
`;

export const TitleModal = styled(InfosModal)`
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
    border-bottom-width: 0.5px;
    border-bottom-color: ${colors.white};
    color: ${colors.white};
    padding-bottom: 10px;
`;


export const OtherChacaraters = styled(InfosModal)`
    font-size: 18px;
    font-weight: bold;
`;

export const ContainerImageCharacters = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
`;

export const ImageCharacters = styled.View`
    width: 90px;
    height: 120px;
    background-color: ${colors.white};
    border-radius: 10px;
`;

export const TextButton = styled.Text`
    color: ${colors.white};
    font-weight: bold;
    text-align: center;
    margin: 25px 0;
`;

export const DateInfo = styled.View`
    flex-direction: row;
    align-items: baseline;
`;

export const CalendarIcon = styled(Icon).attrs(() => ({
    name: 'calendar',
    color: colors.white,
    size: 14,
  }))`
    margin-right: 4px;
  `;
  