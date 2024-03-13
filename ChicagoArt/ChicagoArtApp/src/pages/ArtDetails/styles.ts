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

export const Content = styled.View<ThemeComponent>`
    background: ${(props) => (props.theme.colors.background)};
    height: 100%;
    align-items: center;
`;

export const ArtworkCardName = styled.Text<ThemeComponent>`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
    text-transform: capitalize;
    color: ${(props) => (props.theme.colors.orange)};
`;

export const ArtworkCardText = styled.Text<ThemeComponent>`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
    text-transform: capitalize;
    color: ${(props) => (props.theme.colors.light_text)};
`;

export const ArtworkCardId = styled.Text<ThemeComponent>`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => (props.theme.colors.light_text)};
`;

export const ArtworkCardImage = styled.Image`
  width: 200px;
  height: 200px;
`;