const Menu = () => {
  return (
    <nav className="bg-white shadow-md px-6">
      <div className="flex justify-start items-center gap-8space-x-8 py-4 text-lg font-medium text-gray-700">
        <a href="#trangchu" className="hover:text-green-600">Trang chủ</a>
        <a href="#sanpham" className="hover:text-green-600">Sản phẩm</a>
        <a href="#khuyenmai" className="hover:text-green-600">Khuyến mãi</a>
        <a href="#lienhe" className="hover:text-green-600">Liên hệ</a>
      </div>
    </nav>
  );
};

export default Menu;
