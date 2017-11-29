/* @flow */
import React from "react";
import { View } from "react-sketchapp";
import AccessibilityBadge from "./AccessibilityBadge";
import Label from "./Label";
import { Text } from "react-sketchapp";

const SWATCH_WIDTH = 300;

const Swatch = ({ color, name }) => (
  <View name={name} style={{ marginBottom: 48, marginRight: 48 }}>
    <View
      style={{
        width: SWATCH_WIDTH,
        height: SWATCH_WIDTH,
        backgroundColor: color.hex,
        borderRadius: 4,
        marginBottom: 8,
        padding: 8
      }}
    >
      <Text
        name="Swatch Name"
        style={{ color: color.overlayColor, fontWeight: "bold" }}
      >
        {name}
      </Text>
    </View>
    <Label bold>{name}</Label>
    <Label>{color.hex}</Label>
    <AccessibilityBadge level={color.accessibility} />
  </View>
);

export default Swatch;
