import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

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