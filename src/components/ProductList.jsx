import bananaImg from '../assets/banana.jpg';
import appleImg from '../assets/apple.jpg';
import orangeImg from '../assets/orange.jpg';
import grapeImg from '../assets/grape.jpg';

const products = [
  { id: 1, name: 'Chuối', price: '25.000đ/kg', img: bananaImg },
  { id: 2, name: 'Táo', price: '35.000đ/kg', img: appleImg },
  { id: 3, name: 'Cam', price: '30.000đ/kg', img: orangeImg },
  { id: 4, name: 'Nho', price: '40.000đ/kg', img: grapeImg },
  { id: 5, name: 'Chuối', price: '25.000đ/kg', img: bananaImg },
  { id: 6, name: 'Táo', price: '35.000đ/kg', img: appleImg },
  { id: 7, name: 'Cam', price: '30.000đ/kg', img: orangeImg },
  { id: 8, name: 'Nho', price: '40.000đ/kg', img: grapeImg },
];

const ProductList = () => (
  <section className="p-6">
    <h3 className="text-2xl font-semibold mb-4 text-center">Sản phẩm nổi bật</h3>

    {/* Grid 4 cột cố định, không responsive */}
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
