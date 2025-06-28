import bananaImg from '../assets/banana.jpg';
import appleImg from '../assets/apple.jpg';
import orangeImg from '../assets/orange.jpg';
import grapeImg from '../assets/grape.jpg';
import durianImg from '../assets/durian.jpg';
import longanImg from '../assets/longan.jpg';
import guavaImg from '../assets/guava.jpeg';
import dragonfruitImg from '../assets/dragonfruit.jpg';

const products = [
  { id: 1, name: 'Chuối', img: bananaImg },
  { id: 2, name: 'Táo', img: appleImg },
  { id: 3, name: 'Cam', img: orangeImg },
  { id: 4, name: 'Nho', img: grapeImg },
  { id: 5, name: 'Sầu riêng', img: durianImg },
  { id: 6, name: 'Nhãn', img: longanImg },
  { id: 7, name: 'Ổi', img: guavaImg },
  { id: 8, name: 'Thanh long', img: dragonfruitImg },
];

const ProductList = () => (
  <section className="p-6">
    <h3 className="text-2xl font-semibold mb-4 text-center">Sản phẩm nổi bật</h3>

    {}
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded shadow text-center"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-[180px] object-cover rounded mb-2"
          />
          <h4 className="text-lg font-bold">{product.name}</h4>
          <p className="text-green-700">{product.price}</p>
        </div>
      ))}
    </div>
  </section>
);


export default ProductList;
