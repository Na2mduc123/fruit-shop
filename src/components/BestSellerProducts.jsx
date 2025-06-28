import appleImg from '../assets/apple.jpg';
import orangeImg from '../assets/orange.jpg';
import grapeImg from '../assets/grape.jpg';
import guavaImg from '../assets/guava.jpeg';
import { Button } from "@/components/ui/button"

const bestSellers = [
  { name: "Táo Mỹ", price: "40.000đ/kg", img: appleImg },
  { name: "Nho Ninh Thuận", price: "60.000đ/kg", img: grapeImg },
  { name: "Cam Cao Phong", price: "35.000đ/kg", img: orangeImg },
  { name: "Ổi Thanh Hà", price: "25.000đ/kg", img: guavaImg },
];

const BestSellerProducts = () => {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-red-500 text-center" >Sản phẩm bán chạy nhất</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {bestSellers.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src={product.img}
              alt={product.name}
              className="h-40 w-full object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-green-600 font-medium">{product.price}</p>
            <Button variant="outline" className='cursor-pointer border-green-400 mt-4'>Mua ngay</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellerProducts;
