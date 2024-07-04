import { styled } from '@glitz/react';

export const alternativeTextColor = '#b5b5b5';

// Large font sizes
export const giga = '72px';
export const mega = '54px';
export const kilo = '36px';

// Heading font sizes
export const alpha = '32px';
export const beta = '24px';
export const gamma = '20px';
export const delta = '16px';
export const epsilon = '14px';
export const zeta = '12px';

export function createTruncateDecorator(overflow = 'ellipsis') {
  return styled({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: overflow,
  });
}
