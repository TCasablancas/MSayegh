import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Feather
      name={props.name}
      size={22}
      style={{ marginTop: 5, flex: 1, textAlign: "center", height: 30, }}
      color="#fff"
    />
  );
}
