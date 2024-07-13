import { styled } from '@glitz/react';
import H2 from '../../Shared/Generic/H2';
import { Block, large, small } from '../../Shared/value';
import { media } from '@glitz/core';
import ProductCard from './ProductCard';
export type ListItem = {
  name: string;
  description: string;
  price: string;
  image: any;
};

type ListType = ListItem[];

type Prototype = {
  title: string;
  description?: string;
  list: ListType;
};

function List(props: Prototype) {
  const { title, description, list } = props;
  const numColumns = list.length > 3 ? 4 : list.length;

  return (
    <ListContainer>
      <TextContainer>
        <H2>{title}</H2>
        <Text>{description}</Text>
      </TextContainer>
      <ListWrapper
        css={{
          ...media(
            { minWidth: '1025px' },
            {
              gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
            },
          ),
        }}
      >
        {list.map(data => (
          <Column>
            <ProductCard key={data.name} item={data} numColumns={numColumns} />
          </Column>
        ))}
      </ListWrapper>
    </ListContainer>
  );
}

export default List;

const ListContainer = styled(Block);

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

const Text = styled.p({});

const ListWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: large,
  margin: { top: large },
});

const Column = styled.div({
  width: '100%',
  backgroundColor: '#fff',
});
