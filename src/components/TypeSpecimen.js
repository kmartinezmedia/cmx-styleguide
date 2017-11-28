import React from "react";
import { View, Text } from "react-sketchapp";
import Label from "./Label";

const TypeSpecimen = ({ name, style }) => {
  console.log(name);
  return (
    <View
      name={`TypeSpecimen-${name}`}
      style={{ flexDirection: "row", marginBottom: 24 }}
    >
      <View style={{ width: 100 }}>
        <Label>{`${style.fontSize} / ${style.lineHeight}`}</Label>
      </View>
      <Text
        style={{
          ...style
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TypeSpecimen;
