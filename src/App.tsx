import Routing from './Routing/Routing';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { GlitzProvider, styled } from '@glitz/react';
import Header from './Feature/Header/Header';
import { glitz } from './Shared/GlitzOptions';
import { media } from '@glitz/core';

const App: React.FC = () => {
  return (
    <GlitzProvider glitz={glitz}>
      <Router>
        <div>
          <Header />
          <Page>
            <Routing />
          </Page>
        </div>
      </Router>
    </GlitzProvider>
  );
};

export default App;

const Page = styled.div({
  width: '1366px',
  maxWidth: 'calc(100vw - 65px)',
  backgroundColor: '#f4f5f6',
  margin: {
    y: 0,
    x: 'auto',
  },
  ...media(
    { maxWidth: '1025px' },
    {
      maxWidth: '100vw',
    },
  ),
});
