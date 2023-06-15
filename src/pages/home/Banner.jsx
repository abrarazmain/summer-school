import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
const Banner = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper my-5"
    >
      <SwiperSlide>
        <section className="relative h-[500px] bg-[url(https://i.ibb.co/ZLfqLPB/travel-france-learn-foreign-language-surprised-teen-girl-hold-french-flag-workbook-horizontal-isolat.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
          <div className="relative mx-auto  px-4 py-32  lg:items-center lg:px-8  justify-center">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Let us be Your School
                <strong className="block font-extrabold text-red-800">
                  For this summer
                </strong>
              </h1>

              <div className="mt-8 flex flex-wrap gap-4 text-center lg:px-[90px]">
                <a
                  href="#"
                  className="block  w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto"
                >
                  Get Started
                </a>
                <Link
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow  focus:outline-none focus:ring  sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="relative h-[500px] bg-[url(https://i.ibb.co/ZLfqLPB/travel-france-learn-foreign-language-surprised-teen-girl-hold-french-flag-workbook-horizontal-isolat.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
          <div className="relative mx-auto  px-4 py-32  lg:items-center lg:px-8  justify-center">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Let us be Your School
                <strong className="block font-extrabold text-red-800">
                  For this summer
                </strong>
              </h1>

              <div className="mt-8 flex flex-wrap gap-4 text-center lg:px-[90px]">
                <a
                  href="#"
                  className="block  w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto"
                >
                  Get Started
                </a>
                <Link
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow  focus:outline-none focus:ring  sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="relative h-[500px] bg-[url(https://i.ibb.co/ZLfqLPB/travel-france-learn-foreign-language-surprised-teen-girl-hold-french-flag-workbook-horizontal-isolat.jpg)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
          <div className="relative mx-auto  px-4 py-32  lg:items-center lg:px-8  justify-center">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Let us be Your School
                <strong className="block font-extrabold text-red-800">
                  For this summer
                </strong>
              </h1>

              <div className="mt-8 flex flex-wrap gap-4 text-center lg:px-[90px]">
                <a
                  href="#"
                  className="block  w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto"
                >
                  Get Started
                </a>
                <Link
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow  focus:outline-none focus:ring  sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
