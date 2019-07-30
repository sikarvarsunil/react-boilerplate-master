import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const App = () => {
  return (
    <div className="mainContainer">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
