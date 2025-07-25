import { styled } from '@glitz/react';
import { DefaulBackgroundColor, DefaultGreen, large, medium } from '../../Shared/value';
import { delta } from '../../Shared/typography';
import { Link } from 'react-router-dom';

type Prototype = {
  to?: string;
  onClick?: () => void; // Define onClick prop
  children: React.ReactNode;
  ariaLabel: string;
};

function Button(props: Prototype) {
  const { to, onClick, children } = props;

  if (to) {
    return (
      <Link to={to} aria-label={props.ariaLabel}>
        <StyledButton>{children}</StyledButton>
      </Link>
    );
  } else {
    return (
      <StyledButton onClick={onClick} aria-label={props.ariaLabel}>
        {children}
      </StyledButton>
    );
  }
}

export default styled(Button);

const StyledButton = styled.button({
  cursor: 'pointer',
  backgroundColor: DefaulBackgroundColor,
  color: '#fff',
  fontWeight: 'bold',
  fontSize: delta,
  borderRadius: '4px',
  padding: {
    y: medium,
    x: large,
  },
  border: { xy: { style: 'none' } },
  transition: {
    property: 'all',
    duration: '0.3s',
    timingFunction: 'ease-in-out',
  },
  ':hover': {
    backgroundColor: '#003740 ',
  },
});

export const PlainButton = styled(Button, {
  backgroundColor: 'inherit',
  color: 'inherit',
  borderRadius: 'none',
  textAlign: 'start',
  fontWeight: 'normal',
  padding: { xy: 0 },
  transition: {
    property: 'none',
  },
  ':hover': {
    backgroundColor: 'inherit ',
  },
});
