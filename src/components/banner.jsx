import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-6">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        dynamicHeight={false}
      >
        <div>
          <img src="./images/banner1.png" alt="Banner 1" className="object-cover h-100 w-full rounded-lg" />
        </div>
        <div>
          <img src="./images/banner2.jpg" alt="Banner 2" className="object-cover h-100 w-full rounded-lg" />
        </div>
        <div>
          <img src="./images/banner3.png" alt="Banner 3" className="object-cover h-100 w-full rounded-lg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
