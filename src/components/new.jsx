
const News = () => {
  const articles = [
    {
      title: "Trái cây mùa hè đang vào vụ",
      description: "Nho, táo, thanh long... tươi ngon, giá tốt tại Fruit Store.",
      image: "./images/summerfruit.jpg",
    },
    {
      title: "Bí quyết chọn trái cây sạch",
      description: "Cùng chuyên gia tìm hiểu cách phân biệt trái cây sạch và an toàn.",
      image: "/images/cleanfruit.jpg",
    },
    {
      title: "Ưu đãi tuần này",
      description: "Giảm đến 30% cho đơn hàng trên 200k từ 24-30/6.",
      image: "/images/salefruit.webp",
    },
    {
      title: "Top 5 loại trái cây tốt cho da",
      description: "Cam, bưởi, kiwi... giúp làn da sáng khỏe mỗi ngày.",
      image: "/images/healthyfruit.jpg",
    },
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-10 lg:px-20">
      <h2 className="text-2xl font-bold text-green-600 mb-8 text-center">Tin tức mới</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-md transition">
            <div className="aspect-square overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
