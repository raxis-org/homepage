"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function CustomPrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} size="2x" className="text-gray-600 hover:text-gray-900" />
        </div>
    );
}

function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} size="2x" className="text-gray-600 hover:text-gray-900" />
        </div>
    );
}

export default function ProductsCarousel() {
    const settings = {
        dots: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
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
            <div id="main-products-inner" className="container mx-auto">
                <Slider {...settings} className="relative w-full">
                    {[
                        {
                            href: "/products/web-dev",
                            src: "/assets/img/hero-image/hero-web-dev.png",
                            title: "webサイト/webアプリ制作",
                            desc: "ホームページ制作やサイト構築を行っています。",
                        },
                        {
                            href: "/products/sns-management",
                            src: "/assets/img/hero-image/hero-sns-management.png",
                            title: "SNS運用代行",
                            desc: "主にSNS運営部門がない小規模事業者様を対象に、SNSによる広報の代行を行っています。",
                        },
                        {
                            href: "/products/platform-creation",
                            src: "/assets/img/hero-image/hero-platform-creation.png",
                            title: "プラットフォーム開発",
                            desc: "ユーザーのニーズに合わせたプラットフォームを開発します。",
                        },
                        {
                            href: "/products/mahjong-app",
                            src: "/assets/img/hero-image/hero-mahjong-app.png",
                            title: "麻雀自動点数計算機開発",
                            desc: "画像認識技術を用いて瞬時に点数を把握し、点棒移動の必要も無くなるような製品の開発に取り組んでいます。",
                        },
                        {
                            href: "/products/outsourcing",
                            src: "/assets/img/hero-image/hero-outsourcing.png",
                            title: "業務委託",
                            desc: "ITに関連する業務を幅広く取り扱っております。",
                        },
                    ].map((item, index) => (
                        <Link key={index} href={item.href} className="block w-full min-h-[350px] p-4 shadow-sm bg-white rounded-lg flex justify-center flex-col justify-between duration-300 hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 hover:bg-gray-100">
                            <Image className="mx-auto" src={item.src} alt={item.title} width={200} height={200} priority />
                            <h2 className="text-center text-lg font-bold mt-2">{item.title}</h2>
                            <div className="text-center text-sm mt-1">{item.desc}</div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
}