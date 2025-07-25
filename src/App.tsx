import Routing from './Routing/Routing';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { GlitzProvider, styled } from '@glitz/react';
import Header from './Feature/Header/Header';
import { glitz } from './Shared/GlitzOptions';
import Footer from './Feature/Footer/Footer';
import { AppearanceBlock, gigantic } from './Shared/value';
import ContactLinkBlock from './Feature/Components/ContactLinkBlock';

const App: React.FC = () => {
  return (
    <GlitzProvider glitz={glitz}>
      <Router basename="/ekotra">
        <Header />
        <Page>
          <Routing />
        </Page>
        <ContactLinkBlock />
        <Footer />
      </Router>
    </GlitzProvider>
  );
};

export default App;

const Page = styled(AppearanceBlock, {
  padding: {
    bottom: gigantic,
  },
  backgroundColor: '#fff',
  margin: {
    y: 0,
    x: 'auto',
  },
});
