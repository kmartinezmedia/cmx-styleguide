import React from "react";
import { render, TextStyles, View, Artboard } from "react-sketchapp";
import styled from "styled-components/primitives";

import Label from "./components/Label";
import Palette from "./components/Palette";
import Section from "./components/Section";
import TypeSpecimen from "./components/TypeSpecimen";

import { theme } from "cmx-components";

const artboardNames = ["Desktop Large", "Desktop", "Tablet", "Mobile"];
const artboardSizes = [1440, 1024, 768, 320];

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
      <Container>
        <Section title="Type Styles">
          {Object.keys(theme.sketchFontStyles).map(name => (
            <TypeSpecimen name={name} style={TextStyles.get(name)} />
          ))}
        </Section>

        <Section title="Color Palette">
          <Palette colors={theme.processedColors} />
        </Section>
      </Container>
    );
  };

  render(<Document />, context.document.currentPage());
};
