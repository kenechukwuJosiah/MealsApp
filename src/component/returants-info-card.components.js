import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import open from "../../assets/open";
import { Spacer } from "./spacer/spacer.comonent";
import { Text } from "./typography/text.component";

// const Title = styled.Text`
//   font-family: ${(props) => props.theme.fonts.body}
//   color: ${(props) => props.theme.colors.ui.primary};
//   font-size: ${(props) => props.theme.fontSizes.body}
// `;

import {
  Info,
  Address,
  CardCover,
  CardContainer,
  Rating,
  Section,
  SectionOpen,
} from "./resturant-info-card.styles";

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

  const reatingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardContainer elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant={"label"}>{name}</Text>
        <Section>
          <Rating>
            {reatingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionOpen>
            {isClosedTemporarily && (
              <Text variant="caption" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position={"left"} size={"medium"}>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position={"left"} size={"medium"}>
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionOpen>
        </Section>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  );
};

const styles = StyleSheet.create({});
