import { styled } from '@glitz/react';
import { gamma, delta } from '../typography';
import { small } from '../value';
import { media } from '@glitz/core';
export const headingReset = styled({
  fontSize: 'unset',
  fontWeight: 'unset',
  marginBottom: 0,
});

export const h3Styled = styled({
  fontWeight: '700',
  fontSize: gamma,
  margin: {
    bottom: small,
  },
  ...media(
    { maxWidth: '760px' },
    {
      fontSize: delta,
    },
  ),
});

export default h3Styled(styled.H3);
