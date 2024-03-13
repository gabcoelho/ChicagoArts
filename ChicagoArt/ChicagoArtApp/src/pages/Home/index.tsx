import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import getArtWorks from '../../api/getArtworks';
import * as S from './styles';
import { ArtworkCard } from '../../Components/ArtCard';

export function Home() {
  const [artworks, setArtWorks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArtWorks(1, 20).then((res) => {
      setArtWorks(res || []);
      setLoading(false);
    });
  }, []);

  const loadMoreArtWorks = async () => {
    if (loading) return;
    setLoading(true);
    const nextPage = page + 1;
    const moreArtWorks = await getArtWorks(nextPage, 20);
    if (moreArtWorks && moreArtWorks.length > 0) {
      setArtWorks((prevArtWorks) => [...prevArtWorks, ...moreArtWorks]);
      setPage(nextPage);
    }
    setLoading(false);
  };

  return (
    <S.Container>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            loadMoreArtWorks();
          }
        }}
        scrollEventThrottle={400}
      >
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id.toString()} artwork={artwork} />
        ))}
        {loading && (
          <View style={{ padding: 20, alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </ScrollView>
    </S.Container>
  );
}

// Helper function to detect when the scroll is close to the bottom
function isCloseToBottom({layoutMeasurement, contentOffset, contentSize}) {
  const paddingToBottom = 20; 
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
}
