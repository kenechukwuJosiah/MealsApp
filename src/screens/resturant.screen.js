import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeArea } from "../component/utility/safe-area.component";
import { Searchbar } from "react-native-paper";
import styledComponents from "styled-components/native";
import { ResturantInfoCard } from "../component/returants-info-card.components";
import { Spacer } from "../component/spacer/spacer.comonent";
import { ResturantsContext } from "../services/resturants/mock/restaurants.context";

const SearchContainer = styledComponents(View)`
      padding: ${(props) => props.theme.space[3]};
`;

const ResturantList = styledComponents(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

//

export const ResturantScreen = () => {
  const resturantContext = useContext(ResturantsContext);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <ResturantList
        data={resturantContext.resturants}
        renderItem={() => {
          return (
            <Spacer position={"bottom"} size={"large"}>
              <ResturantInfoCard />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({});
