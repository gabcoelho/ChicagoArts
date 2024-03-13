import React from 'react';
import { useRoute } from '@react-navigation/native';
import * as S from './styles';

export function ArtDetails() {
  const route = useRoute();
  const { artwork } = route.params;

  return (
    <S.Container>
      <S.Content>
        <S.ArtworkCardName>{artwork.title}</S.ArtworkCardName>
        <S.ArtworkCardImage
              source={{
                uri: `${artwork.img.baseUrl}/${artwork.img.imgCode}/full/843,/0/default.jpg`,
              }}
        />
        <S.ArtworkCardText>{artwork.placeOrigin}</S.ArtworkCardText>
        <S.ArtworkCardText>{artwork.artistTitle}</S.ArtworkCardText>
      </S.Content>
    </S.Container>
  );
}