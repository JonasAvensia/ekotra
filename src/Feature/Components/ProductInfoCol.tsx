import { styled } from '@glitz/react';
import { Block } from '../../Shared/value';
import { media } from '@glitz/core';

type Prototype = {
  col1: React.ReactNode;
  col2: React.ReactNode;
  col3: React.ReactNode;
};

function ProductInfoCol(props: Prototype) {
  return (
    <Container>
      <Column>{props.col1}</Column>
      <Column>{props.col2}</Column>
      <Column>{props.col3}</Column>
    </Container>
  );
}

export default ProductInfoCol;

const Container = styled(Block, {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  ...media(
    { minWidth: '1025px' },
    {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  ),
});

const Column = styled.div({});
