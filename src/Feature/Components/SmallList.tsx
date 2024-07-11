import { useState } from 'react';
import { ekstolp as initialList } from '../../Lists/PriceFile';
import { Block, DefaultGreen, large } from '../../Shared/value';
import { styled } from '@glitz/react';
import { Text } from '../../Shared/value';
import { PlainButton } from './Button';
import H2 from '../../Shared/Generic/H2';

function SmallList() {
  const [list, setList] = useState(initialList);

  return (
    <Container>
      <H2>Ekstol</H2>
      <Text>
        Vi har märkt att efterfrågan på ek och ekstolp ökar för varje år. Därför har vi ökat andelen sågad ek för att
        täcka den ökade efterfrågan.
      </Text>
      <Text>Vi saluför ekstolp i all dimensioner. (priserna är exkl moms)</Text>
      <WrapperBlock>
        <RowHeader>
          <ButtonCell arialLabel={'Artikelnr'} onClick={() => 'artikelnr'} css={{ cursor: 'pointer' }}>
            Dimension
          </ButtonCell>
          <ButtonCell arialLabel={'Typ'} onClick={() => 'typ'} css={{ cursor: 'pointer' }}>
            Längd
          </ButtonCell>
          <ButtonCell arialLabel={'Dimension'} onClick={() => 'dimension'} css={{ cursor: 'pointer' }}>
            Pris/st
          </ButtonCell>
          <ButtonCell arialLabel={'Träslag'} css={{ cursor: 'pointer' }}>
            Vässningskostnad
          </ButtonCell>
        </RowHeader>
        {list.dimensionsWithCosts.map((row, index) => (
          <Row key={index}>
            <Cell>{row.dimension}</Cell>
            <Cell>{row.length}</Cell>
            <Cell>{row.pricePerUnit}</Cell>
            <Cell>{row.sharpeningCost}</Cell>
          </Row>
        ))}
      </WrapperBlock>

      <WrapperBlock>
        <RowHeaderTwo>
          <ButtonCell arialLabel={'Artikelnr'} onClick={() => 'artikelnr'} css={{ cursor: 'pointer' }}>
            Dimension
          </ButtonCell>
          <ButtonCell arialLabel={'Typ'} onClick={() => 'typ'} css={{ cursor: 'pointer' }}>
            Pris per lpm
          </ButtonCell>
        </RowHeaderTwo>
        {list.dimensionsWithPricePerLpm.map((row, index) => (
          <RowTwo key={index}>
            <Cell>{row.dimension}</Cell>
            <Cell>{row.pricePerLpm}</Cell>
          </RowTwo>
        ))}
      </WrapperBlock>
    </Container>
  );
}

export default SmallList;

const Container = styled(Block, {});

const WrapperBlock = styled.div({
  display: 'block',
  position: 'relative',
  margin: {
    top: large,
  },
});

const Row = styled.div({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  border: {
    bottom: {
      width: '1px',
      style: 'solid',
      color: DefaultGreen,
    },
  },
});
const RowTwo = styled.div({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  border: {
    bottom: {
      width: '1px',
      style: 'solid',
      color: DefaultGreen,
    },
  },
});

const RowHeader = styled(Row, {
  fontWeight: 'bold',
  backgroundColor: '#fff',
});
const RowHeaderTwo = styled(RowTwo, {
  fontWeight: 'bold',
  backgroundColor: '#fff',
});

const Cell = styled.div({ padding: { y: '10px' } });

const ButtonCell = styled(PlainButton, {
  whiteSpace: 'nowrap',
  padding: { y: '10px' },
});
