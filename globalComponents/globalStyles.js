import { styled } from 'styled-components/native';

export const GlobalView = styled.View`
display: flex;
height: 100%;
  background-color: #FDFAF4;
  align-items: center;
  justify-content: center;
`;

export const GlobalTitle = styled.Text`
text-align: center;
font-family: Impact;
color: #EF6461;
padding-bottom:8px;
font-size: 24px;
font-weight: bold;
flex-wrap: wrap;
text-decoration-line: underline;
`;

export const  GlobalParagraph = styled.Text`
text-align: center;
color: #313638;
font-size: 16px;
font-weight: bold;
padding-bottom:4px
`;

export const GlobalPrice = styled.Text`
font-size: 14px;
font-weight: bold;
color: #636E72;
text-decoration-line: underline;
`;

export const GlobalRating = styled.Text`
text-align: center;
font-size: 20px;
font-weight: bold;
color: #E4B363;
text-decoration-line: underline;
`;

export const GlobalButton = styled.Pressable`
alignItems: center;
justifyContent: center;
paddingVertical: 12;
paddingHorizontal: 32;
border-radius: 3px;
elevation: 3;
backgroundColor: #EF6461;
`;

export const GlobalButtonText = styled.Text`
color: #fff;
font-size: 16px;
font-weight: bold;
`;