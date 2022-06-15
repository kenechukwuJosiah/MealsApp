import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import open from "../../assets/open";
import { Spacer } from "./spacer.comonent";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body}
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Test Resturant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "House 46 prince and princess Abuja",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = resturant;

  const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
  `;

  const Section = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  const SectionOpen = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;

  const reatingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardContainer elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {reatingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionOpen>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer variant={"left.small"} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant={"left.small"} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionOpen>
        </Section>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  );
};

const styles = StyleSheet.create({});
