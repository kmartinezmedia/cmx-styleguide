import React from "react";
import styled from "styled-components/primitives";
import { TextStyles, Text, View, Artboard, makeSymbol } from "react-sketchapp";
import { theme, Utils } from "cmx-components";
const fonts = theme.sketchFontStyles;

const Page = styled.View`
  width: ${p => p.width}px;
  height: 1024px;
  margin-right: ${theme.spacePx[5]}px;
  border: 1px solid ${theme.colors.greyBorder};
`;

const Spacer = p => <View style={{ height: theme.spacePx[3] }} />;

const colors = ["primary", "accent"];
const sizes = ["Small", "Medium", "Large"];
const fontStyles = [
  fonts["P/Europa/Bold"],
  fonts["H5/Europa/Bold"],
  fonts["H4/Europa/Bold"]
];

export const Button = p => (
  <View
    name={p.name}
    style={{
      padding: theme.spacePx[2],
      borderRadius: theme.defaultRadius,
      backgroundColor: p.bg
    }}
  >
    {p.children}
  </View>
);

export const symbols = [];

export const createButtons = () =>
  colors.map((color, cIndex) => {
    return sizes.map((size, i) => {
      const styles = fontStyles[i];
      const name = `Button/${Utils.capitalize(color)}/${size}`;
      const bg = theme.processedColors[color].hex;
      const fontColor = theme.processedColors[color].overlayColor;
      const button = () => (
        <View
          name={name}
          style={{
            padding: theme.spacePx[2],
            borderRadius: theme.defaultRadius,
            backgroundColor: bg
          }}
        >
          <Text
            style={{
              ...styles,
              lineHeight: styles.fontSize,
              color: fontColor
            }}
          >
            Button
          </Text>
        </View>
      );
      makeSymbol(button, name);
      symbols.push(button);
    });
  });

export default class ButtonSymbols extends React.Component {
  render() {
    return <View />;
  }
}
