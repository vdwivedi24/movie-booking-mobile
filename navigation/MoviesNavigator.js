import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MovieScreen from "../screen/MovieScreen";
import MovieDetailScreen from "../screen/MovieDetailScreen";
import MovieBookingDetailScreen from "../screen/MovieBookingDetailScreen";

const MoviesNavigator = createStackNavigator({
  Movies: {
    screen: MovieScreen,
  },
  MovieDetails: MovieDetailScreen,
  MovieBookingDetail: {
    screen: MovieBookingDetailScreen,
  },
});
export default createAppContainer(MoviesNavigator);
