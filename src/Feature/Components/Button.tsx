import { styled } from '@glitz/react';
import { DefaultGreen, medium } from '../../Shared/value';
import { delta } from '../../Shared/typography';
import { Link } from 'react-router-dom';

type Prototype = {
  to?: string;
  onClick?: () => void; // Define onClick prop
  children: React.ReactNode;
};

function Button(props: Prototype) {
  const { to, onClick, children } = props;

  if (to) {
    return (
      <Link to={to}>
        <StyledButton>{children}</StyledButton>
      </Link>
    );
  } else {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
  }
}

export default styled(Button);

const StyledButton = styled.button({
  cursor: 'pointer',
  backgroundColor: DefaultGreen,
  fontWeight: 'bold',
  fontSize: delta,
  borderRadius: '4px',
  padding: {
    y: '12px',
    x: medium,
  },
  border: { xy: { style: 'none' } },
  transition: {
    property: 'all',
    duration: '0.3s',
    timingFunction: 'ease-in-out',
  },
  ':hover': {
    backgroundColor: '#7B9E9D ',
  },
});

export const PlainButton = styled(Button, {
  backgroundColor: 'inherit',
  borderRadius: 'none',
  padding: { xy: 0 },
  transition: {
    property: 'none',
  },
});
