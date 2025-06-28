import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex justify-center items-center py-3 bg-green-50">
      <input
        type="text"
        placeholder="Tìm kiếm trái cây..."
        className="px-4 py-2 border border-green-500 rounded-l-full w-1/2 focus:outline-none"
      />
      <button
        type="button"
        className="cursor-pointer px-4 py-2 rounded-r-full transition duration-300"
      >
        <FaSearch className="text-xl" />
      </button>
    </div>
  );
};

export default Hero;
