import { styled } from '@glitz/react';
import { beta, delta } from '../typography';
import { moderate } from '../value';

export const headingReset = styled({
  fontSize: 'unset',
  fontWeight: 'unset',
  marginBottom: 0,
});

export const h4Styled = styled({
  fontWeight: '700',
  fontSize: delta,
});

export default h4Styled(styled.H4);
