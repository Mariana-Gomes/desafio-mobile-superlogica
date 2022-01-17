import React from 'react';
import { ActivityIndicator} from 'react-native';
import {LoadingContainer} from './styles'

const Loading: React.FC = () => {

    return (
        <LoadingContainer>
             <ActivityIndicator size="large" color="#ffffff" />
        </LoadingContainer>
    )
}

export default Loading;