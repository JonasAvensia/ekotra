import { useRef, useEffect, useState } from 'react';
import { styled } from '@glitz/react';

interface LazyLoadImageProps {
  src: string;
  alt: string;
}

function LazyLoadImage({ src, alt }: LazyLoadImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer && observer.unobserve && imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return <ImageComponent ref={imgRef} src={isIntersecting ? src : ''} alt={alt} />;
}

export default styled(LazyLoadImage);

const ImageComponent = styled.img({});
