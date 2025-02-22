// トップページ
import Image from "next/image";

import ProductsCarousel from "./components/ProductsCarousel";
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="hero w-[100vw] h-[60vh] mt-[-80px] pt-[150px] bg-gradient-to-tr from-purple-200 to-indigo-200 py-8">
          <div className="hero-inner lg:w-[1024px] m-auto flex flex-nowrap justify-between items-center">
            <div className="hero-left">
              <Image
                className="animated-text ml-[100px]"
                src="/assets/img/hero-image/r.png"
                alt="Site logo"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="hero-right">
              <div className="text-6xl bg-gradient-to-r from-indigo-600 to-blue-400 font-bold text-transparent bg-clip-text">Create New Value<br></br>from Tech & Papia</div>
              <div className="hero-right-label mt-4 font-bold text-xl text-gray-600">テクノロジーとカモで新たな価値を創る</div>
            </div>
          </div>
        </div>
        <ProductsCarousel/>
      </main>
    </div>
  );
}
