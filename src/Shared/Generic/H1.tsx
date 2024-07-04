import { styled } from '@glitz/react';
import { alpha } from '../typography';
import { moderate } from '../value';

export const headingReset = styled({
  fontSize: 'unset',
  fontWeight: 'unset',
  marginBottom: 0,
});

export const h1Styled = styled({
  fontWeight: '700',
  fontSize: alpha,
  margin: { bottom: moderate },
});

export default h1Styled(styled.H1);
