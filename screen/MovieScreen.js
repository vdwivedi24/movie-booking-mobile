import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

import MovieItem from "../components/MovieItem";

const MovieScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://3.17.216.66:4000/latest")
      .then((response) => response.data)
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const renderMovieItem = (itemData) => {
    return (
      <MovieItem
        title={itemData.item.name}
        image={itemData.item.imageUrl}
        onSelectmovie={() => {
          props.navigation.navigate({
            routeName: "MovieDetails",
            params: {
              movieId: itemData.item._id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderMovieItem}
          style={{ width: "100%" }}
        />
      )}
    </View>
  );
};
MovieScreen.navigationOptions = {
  headerTitle: "Latest Movies",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MovieScreen;
