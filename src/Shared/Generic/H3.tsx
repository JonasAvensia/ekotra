import { styled } from '@glitz/react';
import { gamma } from '../typography';
import { moderate, small } from '../value';

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
});

export default h3Styled(styled.H3);
