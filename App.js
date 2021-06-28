import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';

import MoviesNavigator from './navigation/MoviesNavigator';

enableScreens();

export default function App() {

  return <MoviesNavigator />;
}
