import { Options, query } from '@glitz/core';
import { GlitzClient } from '@glitz/core';
function mediaOrder(a: string, b: string) {
  const mediaQueries = [
    query({ minWidth: '370px' }),
    query({ minWidth: '425px' }),
    query({ minWidth: '768px' }),
    query({ minWidth: '1024px' }),
    query({ minWidth: '1366px' }),
    query({ minWidth: '1600px' }),
    query({ minWidth: '1920px' }),
  ];
  const indexA = mediaQueries.indexOf(a);
  const indexB = mediaQueries.indexOf(b);
  return indexA - indexB;
}
const glitzCoreOptions: Options = {
  mediaOrder,
};

export const glitz = new GlitzClient(glitzCoreOptions);
