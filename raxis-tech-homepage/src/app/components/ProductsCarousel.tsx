"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductsCarousel() {
    const settings = {
        dots: true,
        arrows: true,
        pauseOnHover: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3, // PCでは3つ表示
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // タブレットでは2つ表示
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // スマホでは1つ表示
                },
            },
        ],
    };

    return (
        <div id="main-products" className="w-[100vw] px-4">
            <div id="main-products-inner" className="container mx-auto flex flex-wrap justify-center gap-x-6 gap-y-6 items-center">
                <Slider {...settings} className="w-full">
                    {/* 各ボックス */}
                    <Link className="main-product-wrapper block max-w-[300px] p-4 shadow-sm duration-300 hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 hover:bg-gray-100" href="/products/web-dev">
                        <Image
                            className="rounded-full mx-auto"
                            src="/assets/img/hero-image/hero-block2.jpg"
                            alt="Site logo"
                            width={200}
                            height={200}
                            priority
                        />
                        <h2 className="text-center text-lg font-bold mt-2">webサイト/webアプリ制作</h2>
                        <div className="text-center text-sm mt-1">ほぬほぬほぬほぬほぬ...</div>
                    </Link>

                    <Link className="main-product-wrapper block max-w-[300px] p-4 shadow-sm duration-300 hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 hover:bg-gray-100" href="/products/sns-management">
                        <Image
                            className="rounded-full mx-auto"
                            src="/assets/img/hero-image/hero-block3.jpg"
                            alt="Site logo"
                            width={200}
                            height={200}
                            priority
                        />
                        <h2 className="text-center text-lg font-bold mt-2">SNS運用代行</h2>
                        <div className="text-center text-sm mt-1">ほぬほぬほぬほぬほぬ...</div>
                    </Link>

                    <Link className="main-product-wrapper block max-w-[300px] p-4 shadow-sm duration-300 hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 hover:bg-gray-100" href="/products/platform-creation">
                        <Image
                            className="rounded-full mx-auto"
                            src="/assets/img/hero-image/hero-block4.jpg"
                            alt="Site logo"
                            width={200}
                            height={200}
                            priority
                        />
                        <h2 className="text-center text-lg font-bold mt-2">プラットフォーム開発</h2>
                        <div className="text-center text-sm mt-1">ほぬほぬほぬほぬほぬ...</div>
                    </Link>

                    <Link className="main-product-wrapper block max-w-[300px] p-4 shadow-sm duration-300 hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 hover:bg-gray-100" href="/products/platform-creation">
                        <Image
                            className="rounded-full mx-auto"
                            src="/assets/img/hero-image/hero-block4.jpg"
                            alt="Site logo"
                            width={200}
                            height={200}
                            priority
                        />
                        <h2 className="text-center text-lg font-bold mt-2">麻雀自動点数計算機開発</h2>
                        <div className="text-center text-sm mt-1">ほぬほぬほぬほぬほぬ...</div>
                    </Link>

                    <Link className="main-product-wrapper block max-w-[300px] p-4 shadow-sm duration-300 hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 hover:bg-gray-100" href="/products/platform-creation">
                        <Image
                            className="rounded-full mx-auto"
                            src="/assets/img/hero-image/hero-block4.jpg"
                            alt="Site logo"
                            width={200}
                            height={200}
                            priority
                        />
                        <h2 className="text-center text-lg font-bold mt-2">業務委託</h2>
                        <div className="text-center text-sm mt-1">ほぬほぬほぬほぬほぬ...</div>
                    </Link>
                </Slider>
            </div>
        </div>
    );
}