import React from "react";
import { render, TextStyles, View } from "react-sketchapp";

import Label from "./components/Label";
import Palette from "./components/Palette";
import Section from "./components/Section";
import TypeSpecimen from "./components/TypeSpecimen";

import { themeDefaults as theme } from "cmx-components";

import chroma from "chroma-js";

const minimumContrast = {
  aa: 4.5,
  aaLarge: 3,
  aaa: 7,
  aaaLarge: 4.5
};

// test contrast of white text
const processColor = hex => {
  const contrast = chroma.contrast(hex, "white");
  return {
    hex,
    contrast,
    accessibility: {
      aa: contrast >= minimumContrast.aa,
      aaLarge: contrast >= minimumContrast.aaLarge,
      aaa: contrast >= minimumContrast.aaa,
      aaaLarge: contrast >= minimumContrast.aaaLarge
    },
    overlayColor:
      contrast >= minimumContrast.aa
        ? "white"
        : chroma(hex)
            .darken(3)
            .hex()
  };
};

export const colors = {
  Haus: "#F3F4F4",
  Night: "#333",
  Sur: "#96DBE4",
  "Sur a11y": "#24828F",
  Peach: "#EFADA0",
  "Peach a11y": "#E37059",
  Pear: "#93DAAB",
  "Pear a11y": "#2E854B"
};

const spacing = 16;
const processedColors = Object.keys(colors).reduce(
  (prev, next) => ({
    ...prev,
    [next]: processColor(colors[next])
  }),
  {}
);

export default context => {
  TextStyles.create(
    {
      context: context,
      clearExistingStyles: true
    },
    theme.sketchFontStyles
  );

  const Document = () => {
    return (
      <View>
        <Section title="Type Styles">
          {Object.keys(theme.sketchFontStyles).map(name => (
            <TypeSpecimen name={name} style={TextStyles.get(name)} />
          ))}
        </Section>

        <Section title="Color Palette">
          <Palette colors={processedColors} />
        </Section>
      </View>
    );
  };

  render(<Document />, context.document.currentPage());
};
