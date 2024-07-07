import { styled } from '@glitz/react';

// Border
export const thin = '1px';
export const thick = '2px';

// Margin & padding
export const tiny = '4px';
export const small = '8px';
export const medium = '16px';
export const large = '24px';
export const huge = '32px';
export const gigantic = '40px';
export const humongous = '48px';
export const moderate = large; // This is default spacing, e.g. margin between `<p>`

export const Block = styled.div({
  padding: { top: large ,x:medium},
  backgroundColor:'#fff'
});

export const AppearanceBlock = styled.div({
  width: '1366px',
  maxWidth: 'calc(100vw - 65px)',
  margin: {
    y: 0,
    x: 'auto',
  },
})


export const DefaultGreen = '#A7CDCC'
 export const DefaulBackgroundColor = '#004A55'