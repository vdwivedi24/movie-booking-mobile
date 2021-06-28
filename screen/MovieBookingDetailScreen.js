import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import CustomQRCodes from "../components/CustomQRCode";

const Separator = () => <View style={styles.separator} />;
const MovieBookingDetailScreen = (props) => {
  const [data, setData] = useState(false);
  const type = props.navigation.getParam("type");
  const name = props.navigation.getParam("name");
  const rate = props.navigation.getParam("rate");
  const language = props.navigation.getParam("language");
  const qrCodeContent = `${type} ${name} ${rate} ${language}`;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Separator />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Name: {name}</Text>
          <Text style={styles.text}>Language: {language}</Text>
          <Text style={styles.title}>Type: {type}</Text>
          <Text style={styles.text}>Rate: {rate}</Text>
        </View>
        <Separator />
        {!data && (
          <Button
            onPress={() => {
              setData(true);
              Alert.alert(
                `Congratulations, you have successfully booked the ticket for ${name}`
              );
            }}
            title="Submit"
            color="#841584"
          />
        )}
        {data && (
          <View style={styles.containerforqrcode}>
            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomQRCodes data={qrCodeContent} />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
MovieBookingDetailScreen.navigationOptions = {
  headerTitle: "Booking Detail",
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
    marginHorizontal: 10,
  },
  containerforqrcode: {
    flex: 1,
    margin: 10,
    paddingTop: 15,
  },
  detailsContainer: {
    padding: 20,
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

export default MovieBookingDetailScreen;
