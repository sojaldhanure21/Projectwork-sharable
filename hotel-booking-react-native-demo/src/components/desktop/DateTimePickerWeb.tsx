import { Props } from "@react-native-community/checkbox/dist/CheckBox.android";
import { createElement, useState } from "react";
import {View, Text, StyleSheet, Platform} from 'react-native';

export default function DateTimePicker({ value, onChange }: Props) {
  
    return createElement('input', {
      type: 'date',
      value: value,
      onInput: onChange,
      style: {height: "100%", width: "100%", padding: 5, border: "2px solid #677788", borderRadius: 5}
    })
  }
