import { styled } from '@glitz/react';
import { beta } from '../typography';
import { medium } from '../value';

export const headingReset = styled({
  fontSize: 'unset',
  fontWeight: 'unset',
  marginBottom: 0,
});

export const h2Styled = styled({
  fontWeight: '700',
  fontSize: beta,
  margin: { bottom: medium },
});

export default h2Styled(styled.H2);
