import { styled } from '@glitz/react';
import H2 from '../../Shared/Generic/H2';

type Prototype = {
  title: string;
  children: React.ReactNode;
};

function TextContainer(props: Prototype) {
  return (
    <Container>
      <Wrapper>
        <H2>{props.title}</H2>
        {props.children}
      </Wrapper>
    </Container>
  );
}

export default TextContainer;

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const Wrapper = styled.div({
  textAlign: 'center',
});
