import { styled } from '@glitz/react';
import { ListItem } from './Lits';
import { large, small } from '../../Shared/value';
import LazyLoadImage from './LazyLoadImage';
import H4 from '../../Shared/Generic/H4';
import { media } from '@glitz/core';

type Prototype = {
  item: ListItem;
  numColumns: number;
};

function ProductCard({ item, numColumns }: Prototype) {
  const height = numColumns === 1 ? '400px' : numColumns === 2 ? '400px' : numColumns === 3 ? '260px' : '224px';

  return (
    <Container>
      <StyledLink href={item.image} target="_blank" rel="noopener noreferrer">
        <StyledImage
          src={item.image}
          alt={item.name}
          css={{
            height: '220px',
            ...media(
              { minWidth: '1025px' },
              {
                height: height,
              },
            ),
          }}
        />
      </StyledLink>
      <DescriptionContainer>
        <H4>{item.name}</H4>
        <Text>{item.description}</Text>
        <Price>{item.price}</Price>
      </DescriptionContainer>
    </Container>
  );
}

export default ProductCard;

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: {
    xy: small,
  },
  border: {
    xy: {
      style: 'solid',
      width: '1px',
      color: '#E6E6E6',
    },
  },
  borderRadius: '4px',
});

const StyledLink = styled.a({
  textDecoration: 'none',
});

const StyledImage = styled(LazyLoadImage, {
  width: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
});

const DescriptionContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: {
    grow: 1,
  },
});

const Text = styled.p({
  margin: { top: small, bottom: large },
});

const Price = styled.p({
  fontWeight: 'bold',
});
