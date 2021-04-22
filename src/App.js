import { useState } from 'react';

import BizHeader from './BizHeader';
import NavBar from './Navbar';
import PageContent from './PageContent';
import Footer from './Footer';

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <NavBar setActive={setActiveTab}/>
      <BizHeader />
      <PageContent active={activeTab}/>
      <Footer />
    </>
  );
}

export default App;
