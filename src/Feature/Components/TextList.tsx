import { styled } from '@glitz/react';
import { Block, DefaultGreen, large, medium, small } from '../../Shared/value';
import H2 from '../../Shared/Generic/H2';
import { media } from '@glitz/core';
import { gamma } from '../../Shared/typography';

const TextList = () => {
  const products = [
    'Bastupanel i AL/ASP',
    'Bastulave i olika dimensioner',
    'Dekorpaneler i AL, Alm, Ask, Asp och Ek m.m',
    'Utvändiga arkitektpaneler',
    'Alla typer av listverk',
    'Ekstolp',
    'Ektrall',
  ];

  const woods = [
    'AL',
    'ALM',
    'ASK',
    'ASP',
    'BJÖRK',
    'EK',
    'Samt mindre partier av udda träslag som Lind, Sälg och Körsbär.',
    'Även Gran och Fur i mindre skala.',
  ];

  return (
    <Block>
      <Container>
        <Section title="Urval av produkter" items={products} />
        <Section title="Vi arbetar med följande träslag" items={woods} />
      </Container>
    </Block>
  );
};

const Section = ({ title, items }) => (
  <Wrapper>
    <TitleWrapper>
      <H2>{title}</H2>
    </TitleWrapper>
    {items.map((item, index) => (
      <Text key={index}>{item}</Text>
    ))}
  </Wrapper>
);

export default TextList;

const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  ...media(
    { minWidth: '1025px' },
    {
      gridTemplateColumns: '1fr 1fr',
    },
  ),
  padding: {
    bottom: medium,
  },
});

const Wrapper = styled.ul({
  display: 'flex',
  flexDirection: 'column',
});

const TitleWrapper = styled.div({
  marginBottom: large,
  border: {
    bottom: {
      width: '1px',
      style: 'solid',
      color: DefaultGreen,
    },
  },
});

const Text = styled.li({
  fontSize: gamma,
  fontWeight: '700',
  margin: {
    left: large,
    bottom: small,
  },
});
