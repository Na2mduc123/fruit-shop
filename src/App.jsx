import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Menu from './components/menu';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Menu />
      <ProductList />
      <Footer />
      <h1 className="text-4xl text-red-500 font-bold">Màu đỏ</h1>
      <h1 className="text-4xl text-green-500">Màu xanh lá</h1>
    </div>
  );
}

export default App;
