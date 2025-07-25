import { ekstolp as initialList } from '../../Lists/PriceFile';
import { Block, DefaultGreen, large, small } from '../../Shared/value';
import { styled } from '@glitz/react';
import { Text } from '../../Shared/value';
import { PlainButton } from './Button';
import H2 from '../../Shared/Generic/H2';
import { media } from '@glitz/core';

type ListType = {
  dimensionsWithCosts: {
    dimension: string;
    length: string;
    pricePerUnit: string;
    sharpeningCost: string;
  }[];
  woodProducts: {
    type: string;
    dimension: string;
    pricePerKvm?: string; // pricePerKvm is optional
    pricePerLpm?: string; // pricePerLpm is optional
    unit: string;
  }[];
  dimensionsWithPricePerLpm: {
    dimension: string;
    pricePerLpm: string;
  }[];
  additionalProducts: {
    description: string;
    lengths: string;
    pricePerM2: string;
  }[];
};

function TextSection() {
  return (
    <TextContainer>
      <H2>Ekstol</H2>
      <Text>
        Efterfrågan på ek och ekstolpar ökar stadigt. Därför har vi ökat andelen sågad ek i produktionen. Vi erbjuder
        ekstolpar i alla vanliga dimensioner.
      </Text>
      <Text>Alla priser nedan är exkl. moms.</Text>
    </TextContainer>
  );
}

function TypeTextSection() {
  return (
    <TextContainer>
      <H2>Samarbete för Kompletterade Stall och Ekvirke</H2>
      <Text>
        Vi söker en samarbetspartner för leverans av kompletta stall, inklusive metallsektioner, skjutdörrar med mera.
        Hör gärna av dig om du vill samarbeta med oss!
      </Text>
      <Text>Priserna är per kvm inkl moms exkl frakt.</Text>
    </TextContainer>
  );
}

function CostList({ list }: { list: ListType['dimensionsWithCosts'] }) {
  return (
    <WrapperBlock>
      <RowHeader>
        <ButtonCell ariaLabel="Artikelnr">Dimension</ButtonCell>
        <ButtonCell ariaLabel="Typ">Längd</ButtonCell>
        <ButtonCell ariaLabel="Dimension">Pris/st</ButtonCell>
        <ButtonCell ariaLabel="Träslag">Vässningskostnad</ButtonCell>
      </RowHeader>
      {list.map((row, index) => (
        <Row key={index}>
          <Cell>{row.dimension}</Cell>
          <Cell>{row.length}</Cell>
          <Cell>{row.pricePerUnit}</Cell>
          <Cell>{row.sharpeningCost}</Cell>
        </Row>
      ))}
    </WrapperBlock>
  );
}

function PricePerLpmList({ list }: { list: ListType['dimensionsWithPricePerLpm'] }) {
  return (
    <WrapperBlock>
      <RowHeaderTwo>
        <ButtonCell ariaLabel="Artikelnr">Dimension</ButtonCell>
        <ButtonCell ariaLabel="Typ">Pris per lpm</ButtonCell>
      </RowHeaderTwo>
      {list.map((row, index) => (
        <RowTwo key={index}>
          <Cell>{row.dimension}</Cell>
          <Cell>{row.pricePerLpm}</Cell>
        </RowTwo>
      ))}
    </WrapperBlock>
  );
}

function TypeList({ list }: { list: ListType['woodProducts'] }) {
  return (
    <WrapperBlock>
      <RowHeaderTwo css={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        <ButtonCell ariaLabel="Träslag">Träslag</ButtonCell>
        <ButtonCell ariaLabel="Dimension">Dimension</ButtonCell>
        <ButtonCell ariaLabel="Pris per/kvm">Pris per/kvm</ButtonCell>
      </RowHeaderTwo>
      {list.map((row, index) => (
        <RowTwo key={index} css={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <Cell>{row.type}</Cell> {/* Display the type */}
          <Cell>{row.dimension}</Cell>
          <Cell>{row.pricePerKvm || row.pricePerLpm}</Cell> {/* Display pricePerKvm or pricePerLpm */}
        </RowTwo>
      ))}
    </WrapperBlock>
  );
}

function AdditionalProductsList({ list }: { list: ListType['additionalProducts'] }) {
  return (
    <WrapperBlock>
      <RowHeaderTwo css={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        <ButtonCell ariaLabel="Beskrivning">Beskrivning</ButtonCell>
        <ButtonCell ariaLabel="Längder">Längder</ButtonCell>
        <ButtonCell ariaLabel="Pris per/kvm">Pris per/kvm</ButtonCell>
      </RowHeaderTwo>
      {list.map((row, index) => (
        <RowTwo key={index} css={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <Cell>{row.description}</Cell> {/* Display the type */}
          <Cell>{row.lengths}</Cell>
          <Cell>{row.pricePerM2}</Cell> {/* Display pricePerKvm or pricePerLpm */}
        </RowTwo>
      ))}
    </WrapperBlock>
  );
}

type Prototype = {
  showType?: boolean;
  showAdditionalProducts?: boolean;
};

function SmallList({ showType, showAdditionalProducts }: Prototype) {
  return (
    <Container>
      {showType && (
        <>
          <TypeTextSection />
          <TypeList list={initialList.woodProducts} />
        </>
      )}
      {showAdditionalProducts && <AdditionalProductsList list={initialList.additionalProducts} />}
      {!showType && !showAdditionalProducts && (
        <>
          <TextSection />
          <CostList list={initialList.dimensionsWithCosts} />
          <PricePerLpmList list={initialList.dimensionsWithPricePerLpm} />
        </>
      )}
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

const TextContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: small,
  width: '100%',
  ...media(
    { minWidth: '1025px' },
    {
      width: 'calc(50% - 20px)',
    },
  ),
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
  fontWeight: 'bold',
});
