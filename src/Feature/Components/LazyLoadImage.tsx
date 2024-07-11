import { useRef } from 'react';
import { styled } from '@glitz/react';

interface LazyLoadImageProps {
  src: string;
  alt: string;
}

function LazyLoadImage({ src, alt }: LazyLoadImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  return <ImageComponent ref={imgRef} src={src} alt={alt} loading="lazy" />;
}

export default styled(LazyLoadImage);

const ImageComponent = styled.img({});
