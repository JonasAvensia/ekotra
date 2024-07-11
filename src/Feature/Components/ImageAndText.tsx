import { styled } from '@glitz/react';
import { media } from '@glitz/core';
import H2 from '../../Shared/Generic/H2';
import { Block, large } from '../../Shared/value';
import LazyLoadImage from './LazyLoadImage';

type Prototype = {
  title: string;
  src: string;
  children: React.ReactNode;
  textFirst?: boolean;
};

function ImageAndText({ title, src, children, textFirst }: Prototype) {
  return (
    <Container>
      <ImageContainer
        className="image"
        css={{
          height: 'auto',

          ...(!textFirst
            ? {
                ...media(
                  { minWidth: '1025px' },
                  {
                    order: 1,
                  },
                ),
              }
            : {
                ...media(
                  { minWidth: '1025px' },
                  {
                    order: 2,
                  },
                ),
              }),
        }}
      >
        <Image src={src} alt="oak image" />
      </ImageContainer>
      <TextContainer
        className="text"
        css={{
          height: 'auto',

          ...(!textFirst
            ? {
                ...media(
                  { minWidth: '1025px' },
                  {
                    order: 2,
                  },
                ),
              }
            : {
                ...media(
                  { minWidth: '1025px' },
                  {
                    order: 1,
                  },
                ),
              }),
        }}
      >
        <H2>{title}</H2>
        <TextList>{children}</TextList>
      </TextContainer>
    </Container>
  );
}
export default ImageAndText;

const Container = styled(Block, {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  borderRadius: '10px',
  ...media(
    { minWidth: '1025px' },
    {
      gridTemplateColumns: '1fr 1fr',
    },
  ),
});

const TextContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: { xy: large },
  order: 2,
  ...media(
    { maxWidth: '1025px' },
    {
      padding: { xy: 0 },
    },
  ),
});

const ImageContainer = styled.div({
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  order: 1,
});

const Image = styled(LazyLoadImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const TextList = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
