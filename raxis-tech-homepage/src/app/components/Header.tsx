// ヘッダーコンポーネント
"use client";
import $ from 'jquery';
import Image from "next/image";
import Link from "next/link";
import { List } from 'postcss/lib/list';
import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons"

export default function Header() {
    const [menuData, setMenuData] = useState<any>(null);

    useEffect(() => {
        fetch("/data/menuData.json")
            .then(response => response.json())
            .then(data => setMenuData(data))
            .catch(error => console.error("Error loading menu data:", error));
    }, []);

    function HeaderContentCard({ name }: { name: string}) {
        if (menuData){
            let subLink: string[][] = menuData[name]["sub-link"]
            return(
                <div className="menu-detail fixed w-[500px] top-[120px] md:right-[2rem] lg:right-[calc(50vw-512px)] p-4 rounded-[20px] shadow-xl bg-white">
                    <Link href={menuData[name]["top-link"]} className="flex-column justify-start items-start py-4">
                        <div className="text-[var(--theme-1)] text-[0.8rem] font-bold">{menuData[name]["t-en"]}</div>
                        <div className="text-[1.2rem] font-bold">{menuData[name]["t-ja"]}</div>
                    </Link>
                    <div className="flex justify-between items-start py-4">
                        <div className="h-[200px] w-[200px]"><FontAwesomeIcon className="text-5xl" icon={faAddressCard} /></div>
                        <div className="flex-column justify-start items-start">
                            {subLink.map((item, index) => (
                                <Link className="hover-link" key={index} href={item[1]}>{item[0]}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>loading...</div>
            )
        }
    }

    useEffect(() => {
        $("#hd-menu-button, #hd-menu-ls > a").on("click",function(){
            $("header").toggleClass("sm-disp");
            $("#hd-inner-bottom").slideToggle(200);
        });
    }, []);

    return (
        <header className="z-10 sticky bottom-0 left-0 right-0 top-4 h-auto w-[calc(100vw-2rem)] m-auto rounded-[40px] bg-white shadow-lg lg:w-[1024px] px-8 overflow-hidden flex flex-col justify-start">
            <div id="hd-inner-top" className="w-full h-[80px] m-auto flex flex-nowrap justify-between items-center text-center  ">
                <div id="hd-icon-wrapper" className="flex flex-nowrap">
                    <Link href="/">
                        <Image
                            className="w-[200px]"
                            src="/assets/icon/icon-with-text.png"
                            alt="Site logo"
                            width={200}
                            height={20}
                            priority
                        />
                    </Link>
                    <h1 className="font-sans font-bold text-[2rem] text-blue-700"></h1>

                </div>
                <div id="hd-contents-wrapper" className="hidden md:flex flex-nowrap justify-between h-full">
                    <Link className="hd-content" href="/about">
                        <div className="hd-content-en">ABOUT</div>
                        <div className="hd-content-label">Raxisとは</div>
                    </Link>

                    <Link className="hd-content" href="/products">
                        <div className="hd-content-en">SERVICES</div>
                        <div className="hd-content-label">事業内容</div>
                    </Link>

                    <Link className="hd-content" href="/works">
                        <div className="hd-content-en">WORKS</div>
                        <div className="hd-content-label">制作物</div>
                    </Link>

                    <Link className="hd-content" href="/blog">
                        <div className="hd-content-en">BLOG</div>
                        <div className="hd-content-label">ブログ</div>
                    </Link>

                    <Link className="hd-content" href="/contact">
                        <div className="hd-content-en">CONTACT</div>
                        <div className="hd-content-label">お問い合わせ</div>
                    </Link>
                </div>

                <div id="hd-menu-button" className="md:hidden h-[30px] flex flex-col justify-between">
                    <div id="hd-menu-button-1" className="w-[40px] h-[3px] bg-[var(--theme-1)]"></div>
                    <div id="hd-menu-button-2" className="w-[40px] h-[3px] bg-[var(--theme-1)]"></div>
                    <div id="hd-menu-button-3" className="w-[40px] h-[3px] bg-[var(--theme-1)]"></div>
                </div>
            </div>

            <div id="hd-inner-bottom" className="hidden w-full bg-white my-4">
                <div className="flex flex-col justify-start align-center text-left" id="hd-menu-ls">
                    <Link href="/"><div className="top"><div className="hd-menu-en">HOME</div>ホーム</div></Link>
                    <Link href="/about"><div><div className="hd-menu-en">ABOUT</div>Raxisとは</div></Link>
                    <Link href="/products"><div><div className="hd-menu-en">SERVICES</div>事業内容</div></Link>
                    <Link href="/works"><div><div className="hd-menu-en">WORKS</div>ポートフォリオ</div></Link>
                    <Link href="/blog"><div><div className="hd-menu-en">BLOG</div>ブログ</div></Link>
                    <Link href="/contact"><div><div className="hd-menu-en">CONTACT</div>お問い合わせ</div></Link>
                </div>
            </div>

            <HeaderContentCard name="about"/>
            <HeaderContentCard name="products"/>
            <HeaderContentCard name="works"/>
        </header>
    );

    
}