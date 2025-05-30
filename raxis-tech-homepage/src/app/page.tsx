// トップページ
import Image from "next/image";
import ProductsCarousel from "./components/ProductsCarousel";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="hero w-[100vw] h-[60vh] -mt-20 pt-[150px] bg-gradient-to-tr from-purple-200 to-indigo-200 py-8">
          <div className="hero-inner lg:w-[1024px] m-auto flex flex-col sm:flex-row flex-nowrap justify-between items-center px-4 sm:px-0">
            <div className="hero-left mb-6 sm:mb-0">
              <Image
                className="mx-auto sm:ml-[100px]"
                src="/assets/img/hero-image/R.png"
                alt="Site logo"
                width={160}
                height={160}
                priority
              />
            </div>
            <div className="hero-right text-center sm:text-left">
              <div className="text-3xl sm:text-5xl md:text-6xl bg-gradient-to-r from-indigo-600 to-blue-400 font-bold text-transparent bg-clip-text">
                The axis of technology,<br />
                shaping the future
              </div>
              <div className="hero-right-label mt-4 font-bold text-lg sm:text-xl text-gray-600">
                未来を支える技術の軸を
              </div>
            </div>
          </div>
        </div>
        <ProductsCarousel />
      </div>
    </div>
  );
}
