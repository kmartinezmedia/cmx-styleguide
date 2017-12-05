import React from "react";
import {
  render,
  Text,
  TextStyles,
  View,
  Artboard,
  makeSymbol,
  getSymbolComponentByName
} from "react-sketchapp";
import styled from "styled-components/primitives";
import { theme, Utils } from "cmx-components";

import Label from "./components/Label";
import Palette from "./components/Palette";
import Section from "./components/Section";
import TypeSpecimen from "./components/TypeSpecimen";

const artboardNames = ["Desktop Large", "Desktop", "Tablet", "Mobile"];
const artboardSizes = [1440, 1024, 768, 320];
const fonts = theme.sketchFontStyles;
const colors = ["primary", "accent"];
const sizes = ["Small", "Medium", "Large"];
const fontStyles = [
  fonts["P/Europa/Bold"],
  fonts["H5/Europa/Bold"],
  fonts["H4/Europa/Bold"]
];

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Page = styled.View`
  width: ${p => p.width}px;
  height: 1024px;
  margin-right: ${theme.spacePx[5]}px;
  border: 1px solid ${theme.colors.greyBorder};
`;

const Spacer = p => <View style={{ height: theme.spacePx[3] }} />;

const symbols = [];

function createButtonSymbols() {
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
              color: fontColor,
              width: "auto"
            }}
            resizingConstraint={{ fixedWidth: true }}
          >
            Button
          </Text>
        </View>
      );
      const symbol = makeSymbol(button, name);
      symbols.push(name);
    });
  });
}

export default context => {
  TextStyles.create(
    {
      context: context,
      clearExistingStyles: true
    },
    theme.sketchFontStyles
  );

  createButtonSymbols();

  const Document = () => {
    return (
      <Container>
        <Section title="Type Styles">
          {Object.keys(theme.sketchFontStyles)
            .filter(name => name.includes("Poppins"))
            .map(name => (
              <TypeSpecimen
                name={name}
                style={TextStyles.get(name)}
                key={`text_${name}`}
              />
            ))}
        </Section>

        <Section title="Color Palette">
          <Palette colors={theme.processedColors} />
        </Section>

        <Section title="Button symbols" />
      </Container>
    );
  };

  render(<Document />, context.document.currentPage());
};
