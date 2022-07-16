import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SlideProduct({ foto }) {
  // const img = [];

  const images = foto.map((row) => ({
    id: row?.id,
    name_file: row?.name_file,
  }));

  const unique = [...new Set(images.map((item) => item.name_file))];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  // const CustomDot = ({ onMove, index, onClick, active }) => {
  const CustomDot = ({ index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li
        className={
          active
            ? "active border-solid border-2 border-orange-500 rounded mt-5 "
            : "inactive rounded mt-5 "
        }
        onClick={() => onClick()}
      >
        {/* {index + 1} */}

        <img key={index} src={unique[index]} className="h-14 w-full rounded " />
      </li>
    );
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      arrows={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-30-px"
      className="rounded overflow-hidden shadow-lg"
      customDot={<CustomDot />}
    >
      {images?.map((row) => {
        return (
          <div key={row?.id} className="w-full h-[400px] relative">
            <Image
              layout="fill"
              objectFit="contain"
              key={row?.id}
              src={row?.name_file}
              className=" rounded"
              priority
            />
          </div>
        );
      })}
    </Carousel>
  );
}
