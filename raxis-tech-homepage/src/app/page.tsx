// トップページ
import Image from "next/image";

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

        <div id="main-products" className="w-[100vw]">
          <div id="main-products-inner" className="container w-[calc(100%-4rem)] mx-auto flex flex-nowrap justify-between items-center">
            <div className="main-product-wrapper">
              <Image
                className="rounded-full m-auto"
                src="/assets/img/hero-image/hero-block2.jpg"
                alt="Site logo"
                width={200}
                height={200}
                priority
              />
              <h2>webサイト/webアプリ制作</h2>
              <div>ほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬ</div>
            </div>
            <div className="main-product-wrapper">
              <Image
                className="rounded-full m-auto"
                src="/assets/img/hero-image/hero-block3.jpg"
                alt="Site logo"
                width={200}
                height={200}
                priority
              />
              <h2>AIシステムによるSNS運用代行</h2>
              <div>ほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬ</div>
            </div>
            <div className="main-product-wrapper">
              <Image
                className="rounded-full m-auto"
                src="/assets/img/hero-image/hero-block4.jpg"
                alt="Site logo"
                width={200}
                height={200}
                priority
              />
              <h2>プラットフォーム開発</h2>
              <div>ほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬほぬ</div>
            </div>
          </div>
        </div>

        <div id="works">

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
