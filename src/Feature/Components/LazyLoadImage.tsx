import { ImgHTMLAttributes, useRef } from 'react';
import { styled } from '@glitz/react';

interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

function LazyLoadImage({ src, alt, ...restprops }: LazyLoadImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  return <ImageComponent ref={imgRef} src={src} alt={alt} loading="lazy" {...restprops} />;
}

export default styled(LazyLoadImage);

const ImageComponent = styled.img({});
