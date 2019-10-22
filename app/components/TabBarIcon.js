import React from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Feather
      name={props.name}
      size={22}
      style={{ marginBottom: -8 }}
      color="#fff"
    />
  );
}
