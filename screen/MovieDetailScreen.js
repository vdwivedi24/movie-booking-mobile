import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import axios from "axios";

const Separator = () => <View style={styles.separator} />;
const MovieDetailScreen = (props) => {
  const movieId = props.navigation.getParam("movieId");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://3.17.216.66:4000/latest/${movieId}`)
      .then((response) => response.data)
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error));
  }, [data]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: data.imageUrl }} />
        <Separator />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Name: {data.name}</Text>
          <Text style={styles.text}>Language: {data.language}</Text>
          <Text style={styles.title}>Type: {data.type}</Text>
          <Text style={styles.text}>Rate: {data.rate}</Text>
        </View>
        <Separator />
        <Button
          onPress={() => {
            props.navigation.navigate({
              routeName: "MovieBookingDetail",
              params: {
                type: data.type,
                name: data.name,
                rate: data.rate,
                language: data.language,
              },
            });
          }}
          title="Book Now"
          color="#841584"
        />
      </View>
    </SafeAreaView>
  );
};
MovieDetailScreen.navigationOptions = {
  headerTitle: "Movie Details",
};

const colors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#fff",
  medium: "#6e6969",
  light: "#f8f4f4",
  dark: "#0c0c0c",
  danger: "#ff5252",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    margin: 5,
    height: 300,
    marginRight: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default MovieDetailScreen;
