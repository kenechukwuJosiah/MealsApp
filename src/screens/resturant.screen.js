import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styledComponents from "styled-components/native";
import { ResturantInfoCard } from "../component/returants-info-card.components";

const SearchContainer = styledComponents(View)`
      padding: ${(props) => props.theme.space[3]};
`;

const SafeArea = styledComponents(SafeAreaView)`
     flex: 1;
     ${StatusBar.currentHeight && `margin-top:  ${StatusBar.currentHeight}px`};
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding-vertical: 20px;
`;

const ListContainer = styledComponents(View)`
flex: 1;
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ResturantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea
      style={{
        ...styles.container,
        ...{ marginTop: StatusBar.currentHeight },
      }}
    >
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <ListContainer>
        <ResturantInfoCard />
      </ListContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({});
