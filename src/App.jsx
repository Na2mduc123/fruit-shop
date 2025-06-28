import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Menu from './components/menu';
import Banner from './components/banner';
import BestSellerProducts from './components/BestSellerProducts';
import News from './components/new';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Menu />
      <Banner />
      <ProductList />
      <BestSellerProducts />
      <News />
      <Footer />
    </div>
  );
}


export default App;
