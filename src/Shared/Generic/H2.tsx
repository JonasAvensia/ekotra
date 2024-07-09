import { styled } from '@glitz/react';
import { beta, gamma } from '../typography';
import { medium } from '../value';
import { media } from '@glitz/core';
export const headingReset = styled({
  fontSize: 'unset',
  fontWeight: 'unset',
  marginBottom: 0,
});

export const h2Styled = styled({
  fontWeight: '700',
  fontSize: beta,
  margin: { bottom: medium },
  ...media(
    { maxWidth: '760px' },
    {
      fontSize: gamma,
    },
  ),
});

export default h2Styled(styled.H2);
