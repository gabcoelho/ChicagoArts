import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { CardAnimation } from '../CardAnimated';

type ArtWork = {
  id: number;
  title: string;
  artistTitle: string;
  img: {
    imgCode: string;
    baseUrl: string;
  };
};

type ArtworkCardProps = {
  artwork: ArtWork;
};

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  const { navigate } = useNavigation();

  function handleNavigateToArtDetails() {
    navigate('ArtDetails', { artwork }); // Ensure 'ArtDetail' matches your screen name in the navigator exactly
  }
  
  return (
      <S.ArtworkCard onPress={handleNavigateToArtDetails}>
        <S.LeftSide>
          <S.ArtworkCardId>{artwork.artistTitle}</S.ArtworkCardId>
          <S.ArtworkCardName>{artwork.title}</S.ArtworkCardName>
        </S.LeftSide>
        <S.RightSide>
          <CardAnimation>
            <S.ArtworkCardImage
              source={{
                uri: `${artwork.img.baseUrl}/${artwork.img.imgCode}/full/843,/0/default.jpg`,
              }}
            />
          </CardAnimation>
        </S.RightSide>
      </S.ArtworkCard>
  );
};
