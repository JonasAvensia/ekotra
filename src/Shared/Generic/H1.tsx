import { styled } from '@glitz/react';
import { alpha, beta } from '../typography';
import { moderate } from '../value';
import { media } from '@glitz/core';
export const headingReset = styled({
  fontSize: 'unset',
  fontWeight: 'unset',
  marginBottom: 0,
});

export const h1Styled = styled({
  fontWeight: '700',
  fontSize: alpha,
  margin: { bottom: moderate },
  ...media(
    { maxWidth: '760px' },
    {
      fontSize: beta,
    },
  ),
});

export default h1Styled(styled.H1);
