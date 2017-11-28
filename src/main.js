import React from "react";
import { render, TextStyles, View } from "react-sketchapp";

import Label from "./components/Label";
import Palette from "./components/Palette";
import Section from "./components/Section";
import TypeSpecimen from "./components/TypeSpecimen";

import {theme} from "cmx-components";

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
          <Palette colors={theme.processedColors} />
        </Section>
      </View>
    );
  };

  render(<Document />, context.document.currentPage());
};
