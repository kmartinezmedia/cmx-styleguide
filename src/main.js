import React from "react";
import chroma from "chroma-js";
import { render, TextStyles, View, Artboard } from "react-sketchapp";
import styled from "styled-components/primitives";
import { space } from "styled-system";

import Label from "./components/Label";
import Palette from "./components/Palette";
import Section from "./components/Section";
import TypeSpecimen from "./components/TypeSpecimen";

import { theme, Utils } from "cmx-components";

const artboardNames = ["Desktop Large", "Desktop", "Tablet", "Mobile"];
const artboardSizes = [1440, 1024, 768, 320];

const pageBg = theme.colors.accentDark;
const pageTextColor = Utils.processColor(pageBg).overlayColor;

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Page = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${p => p.width}px;
  height: 1024px;
  border: 1px solid ${theme.colors.greyBorder};
  background-color: ${pageBg};
  margin-right: ${theme.spacePx[3]};
`;

const PageContainer = styled.View`
  flex-direction: column;
  width: 1032px;
  height: ${p => p.height || `1024px`};
`;

const Nav = styled.View`
  width: 100%;
  height: 80px;
  background-color: black;
`;

const Question = styled.Text`
  ${theme.sketchFontStyles["H2/Expo Serif Pro/Light"]};
  ${theme.mt(80)};
  color: ${pageTextColor};
`;

const questions = [
  "Are you currently trying to get pregnant?",
  "What is your name?",
  "How old are you?",
  "Height in feet",
  "Height in inches",
  "Weight",
  "How many times have you been pregnant?",
  "How many times have you had a live birth?",
  "Have you experienced 2 or more miscarriages?",
  "How long have you been trying to get pregnant (having unprotected intercourse) (months)",
  "Have you been tracking your ovulation?",
  "How many times do you have intercourse around the time of ovulation?",
  "Do you smoke?",
  "How long have you been trying to get pregnant (having unprotected intercourse) (years)",
  "How many alcoholic beverages do you have each day, on average?",
  "Have you received any of the following diagnoses?",
  "Have your mother, sisters or aunts received any of the following diagnoses?",
  "Has your partner ever had an abnormal semen analysis?",
  "Are your periods irregular, or sometimes absent?",
  "Are your periods extremely painful?"
];

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
        <Page width={artboardSizes[0]}>
          <PageContainer>
            {questions.map((question, i) => {
              return (
                <View>
                  <Question key={i}>{question}</Question>
                  <View style={{ height: 80 }} />
                </View>
              );
            })}
          </PageContainer>
        </Page>
        <Page width={artboardSizes[0]}>
          <PageContainer height="auto" style={{ alignItems: "center" }}>
            <Question>{questions[4]}</Question>
            <View style={{ height: 80 }} />
          </PageContainer>
        </Page>
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
