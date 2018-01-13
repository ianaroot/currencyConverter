import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet';

import Home from "./screens/Home";

EstyleSheet.build({
  $primaryBlue: '#4F6D7A',
})

export default () => <Home />  