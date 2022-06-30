import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionOpen = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
