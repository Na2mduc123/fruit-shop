import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Fruit Store</h2>
          <p>
            Chuyên cung cấp hoa quả sạch, tươi ngon mỗi ngày. Cam kết chất lượng và an toàn cho sức khỏe.
          </p>
        </div>

        <div className="md:pl-10">
          <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
          <ul className="space-y-2">
            <li><a href="#trangchu" className="hover:underline">Trang chủ</a></li>
            <li><a href="#sanpham" className="hover:underline">Sản phẩm</a></li>
            <li><a href="#khuyenmai" className="hover:underline">Khuyến mãi</a></li>
            <li><a href="#lienhe" className="hover:underline">Liên hệ</a></li>
          </ul>
        </div>

        <div className="md:-ml-10">
          <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
          <ul className="space-y-2">
            <li>Địa chỉ: 6 Lý Nhân Tông, Yên Nam, Duy Tiên, Hà Nam</li>
            <li>Điện thoại: 0345281795</li>
            <li>Email: fruitstoreyoung2024@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Mạng xã hội</h3>
          <div className="flex space-x-4 text-3xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagramSquare /></a>
            <a href="#"><AiFillTikTok /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-200 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} Fruit Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
