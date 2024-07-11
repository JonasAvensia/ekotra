import { styled } from '@glitz/react';
import H2 from '../../Shared/Generic/H2';
import { Block, large } from '../../Shared/value';
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
  return (
    <ListContainer>
      <H2>{props.title}</H2>
      <Text>{props.description}</Text>
      <ListWrapper>
        {props.list.map(data => (
          <Column>
            <ProductCard key={data.name} item={data} />
          </Column>
        ))}
      </ListWrapper>
    </ListContainer>
  );
}

export default List;

const ListContainer = styled(Block, {});

const Text = styled.p({});

const ListWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: large,
  margin: { top: large },
  ...media(
    { minWidth: '1025px' },
    {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  ),
});

const Column = styled.div({
  width: '100%',
  backgroundColor: '#fff',
});
