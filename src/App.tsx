import Routing from './Routing/Routing';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { GlitzProvider, styled } from '@glitz/react';
import Header from './Feature/Header/Header';
import { glitz } from './Shared/GlitzOptions';
import { media } from '@glitz/core';
import Footer from './Feature/Footer/Footer';
import { AppearanceBlock, gigantic, large } from './Shared/value';

const App: React.FC = () => {
  return (
    <GlitzProvider glitz={glitz}>
      <Router>
        <Header />
        <Page>
          <Routing />
        </Page>
        <Footer />
      </Router>
    </GlitzProvider>
  );
};

export default App;

const Page = styled(AppearanceBlock, {
  backgroundColor: '#fff',
  padding: {
    bottom: gigantic,
  },
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
