import { useState } from 'react';
import { list as initialList } from '../../Lists/PriceFile';
import { Block, DefaultGreen } from '../../Shared/value';
import { styled } from '@glitz/react';
import { media } from '@glitz/core';
import { PlainButton } from './Button';

function PriceList() {
  const [list, setList] = useState(initialList);
  const [sortConfig, setSortConfig] = useState({ key: 'typ', order: 'asc' });

  const sortList = (key: string) => {
    let order = 'asc';
    if (sortConfig.key === key && sortConfig.order === 'asc') {
      order = 'desc';
    }

    const sortedList = [...list].sort((a, b) => {
      let aValue = a[key];
      let bValue = b[key];

      // Convert price to number for comparison
      if (key === 'pris') {
        aValue = parseFloat(aValue.replace(/[^0-9.-]+/g, ''));
        bValue = parseFloat(bValue.replace(/[^0-9.-]+/g, ''));
      }

      if (aValue < bValue) return order === 'asc' ? -1 : 1;
      if (aValue > bValue) return order === 'asc' ? 1 : -1;
      return 0;
    });

    setList(sortedList);
    setSortConfig({ key, order });
  };

  const getSortIndicator = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.order === 'asc' ? '↑' : '↓';
    }
    return '';
  };

  return (
    <Container>
      <Wrapper>
        <RowHeader>
          <ButtonCell arialLabel={'Artikelnr'} onClick={() => sortList('artikelnr')} css={{ cursor: 'pointer' }}>
            Artikelnr {getSortIndicator('artikelnr')}
          </ButtonCell>
          <ButtonCell arialLabel={'Typ'} onClick={() => sortList('typ')} css={{ cursor: 'pointer' }}>
            Typ {getSortIndicator('typ')}
          </ButtonCell>
          <ButtonCell arialLabel={'Dimension'} onClick={() => sortList('dimension')} css={{ cursor: 'pointer' }}>
            Dimension {getSortIndicator('dimension')}
          </ButtonCell>
          <ButtonCell arialLabel={'Träslag'} onClick={() => sortList('traslag')} css={{ cursor: 'pointer' }}>
            Träslag {getSortIndicator('traslag')}
          </ButtonCell>
          <ButtonCell arialLabel={'Enhet'} onClick={() => sortList('enhet')} css={{ cursor: 'pointer' }}>
            Enhet {getSortIndicator('enhet')}
          </ButtonCell>
          <ButtonCell arialLabel={'Pris inkl/moms'} onClick={() => sortList('pris')} css={{ cursor: 'pointer' }}>
            Pris inkl/moms {getSortIndicator('pris')}
          </ButtonCell>
          <ButtonCell arialLabel={'Anmärkning'} onClick={() => sortList('anmarkning')} css={{ cursor: 'pointer' }}>
            Anmärkning {getSortIndicator('anmarkning')}
          </ButtonCell>
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
  display: 'block',
  width: '100%',
  overflowX: 'auto',
  ...media(
    { minWidth: '1025px' },
    {
      overflowX: 'unset',
    },
  ),
});

const Wrapper = styled.div({
  display: 'block',
  minWidth: '1000px',
  position: 'relative',
});

const Row = styled.div({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr 1fr 1fr',
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
  ...media(
    { minWidth: '1025px' },
    {
      position: 'sticky',
    },
  ),
  top: '137px',
  backgroundColor: '#fff',
});

const Cell = styled.div({ padding: { y: '10px' } });

const ButtonCell = styled(PlainButton, {
  whiteSpace: 'nowrap',
  padding: { y: '10px' },
});
