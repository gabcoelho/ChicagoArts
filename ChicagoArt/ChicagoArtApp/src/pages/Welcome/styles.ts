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

export const Footer = styled.View`
    width: 100%;
    height: 30%;
    background: ${(props) => (props.theme.colors.water)};
    opacity: 0.9;
    padding: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View<ThemeComponent>`
    background: ${(props) => (props.theme.colors.background)};
    height: 70%;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity<ThemeComponent>`
    width: 100%;
    height: 50px;
    border-radius: 70px;
    background: ${(props) => (props.theme.colors.background)};
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text<ThemeComponent>`
    color: ${(props) => (props.theme.colors.text)};
`;

// Use the interface to type the props parameter
export const Title = styled.Text<ThemeComponent>`
  color: ${(props) => (props.theme.colors.text)};
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  margin-bottom:20px;
`;

export const Subtitle = styled.Text<ThemeComponent>`
    color: ${(props) => (props.theme.colors.text)};
    font-size: 14px;
`;
