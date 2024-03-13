import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

export function Welcome() {
  const { navigate } = useNavigation();

  function handleNavigateToHome() {
    navigate('Home');
  }

  return (
    <S.Container>
      <S.Content>
        <S.Title>Art Institute of Chicago</S.Title>
        <S.Subtitle>Explore the museum public art</S.Subtitle>
      </S.Content>

      <S.Footer>
        <S.Button onPress={handleNavigateToHome}>
          <S.ButtonText>ENTER</S.ButtonText>
        </S.Button>
      </S.Footer>
    </S.Container>
  );
}
