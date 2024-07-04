import { list } from '../../PriceFile';
import { Block, DefaultGreen } from '../../Shared/value';
import { styled } from '@glitz/react';

function PriceList() {
  return (
    <Container>
      <Wrapper>
        <RowHeader>
          <Cell>Artikelnr:</Cell>
          <Cell>Typ</Cell>
          <Cell>Dimension</Cell>
          <Cell>Träslag</Cell>
          <Cell>Enhet</Cell>
          <Cell>Pris inkl/moms</Cell>
          <Cell>Anmärkning</Cell>
        </RowHeader>
        {list.map((row, index) => (
          <Row key={index}>
            <Cell>{row.artikelnr}</Cell>
            <Cell>{row.typ}</Cell>
            <Cell>{row.dimension}</Cell>
            <Cell>{row.traslag}</Cell>
            <Cell>{row.enhet}</Cell>
            <Cell>{row.pris}</Cell>
            <Cell>{row.anmarkning}</Cell>
          </Row>
        ))}
      </Wrapper>
    </Container>
  );
}

export default PriceList;

const Container = styled(Block, {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

const Wrapper = styled.div({
  display: 'grid',
  width: '100%',
  position: 'relative',
});

const Row = styled.div({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr 1fr 0.5fr 0.5fr',
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
  position: 'sticky',
  top: '100px',
  backgroundColor: '#fff',
});

const Cell = styled.div({
  padding: { y: '10px' },
});
