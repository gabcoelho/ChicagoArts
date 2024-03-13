import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

interface ThemeComponent {
  theme: {
    colors: {
      text: string; // Assuming text is a boolean, adjust the type as necessary
      background: string;
      water: string;
    };
  };
}

export const Container = styled.View<ThemeComponent>`
    flex: 1;
    background: ${(props) => (props.theme.colors.water)};
`;

export const ArtworkCard = styled.TouchableOpacity<ThemeComponent>`
    background: ${(props) => (props.theme.colors.background)};
    border-radius: 10px;
    margin-top: 30px;
    flex-direction: row;
    padding: 20px;
`;

export const ArtworkCardName = styled.Text<ThemeComponent>`
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    margin-top: 5px;
    text-transform: capitalize;
    color: ${(props) => (props.theme.colors.orange)};
`;

export const ArtworkCardId = styled.Text<ThemeComponent>`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => (props.theme.colors.light_text)};
`;

export const ArtworkCardImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const ArtworkCardDetail = styled.Image`
  position: absolute;
  right: -20px;
`;

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const RightSide = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
`;
