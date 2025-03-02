// ヘッダーコンポーネント
"use client";
import $ from 'jquery';
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';

export default function Header() {
    useEffect(() => {
        $("#hd-menu-button").on("click",function(){
            $("header").toggleClass("sm-disp")
            
            $("#hd-inner-bottom").slideToggle(300)
            // if($("header").hasClass("sm-disp")){
            //     $("#hd-inner-bottom").show(300)
            // }else{
            //     $("#hd-inner-bottom").css("display","none")
            // }
        })   
        $("#hd-menu").on("click",function(){
            $("header").toggleClass("sm-disp")
            $("#hd-inner-bottom").slideToggle(300)
        }) 
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
                    <Link className="header-content" href="/about">
                        <div className="header-content-en">ABOUT</div>
                        <div className="header-content-label">Raxisとは</div>
                    </Link>

                    <Link className="header-content" href="/products">
                        <div className="header-content-en">PRODUCTS</div>
                        <div className="header-content-label">事業内容</div>
                    </Link>

                    <Link className="header-content" href="/works">
                        <div className="header-content-en">WORKS</div>
                        <div className="header-content-label">ポートフォリオ</div>
                    </Link>

                    <Link className="header-content" href="/blog">
                        <div className="header-content-en">BLOG</div>
                        <div className="header-content-label">ブログ</div>
                    </Link>

                    <Link className="header-content" href="/contact">
                        <div className="header-content-en">CONTACT</div>
                        <div className="header-content-label">お問い合わせ</div>
                    </Link>
                </div>

                <div id="hd-menu-button" className="sm:hidden h-[30px] flex flex-col justify-between">
                    <div id="hd-menu-button-1" className="w-[40px] h-[3px] bg-[var(--theme-1)]"></div>
                    <div id="hd-menu-button-2" className="w-[40px] h-[3px] bg-[var(--theme-1)]"></div>
                    <div id="hd-menu-button-3" className="w-[40px] h-[3px] bg-[var(--theme-1)]"></div>
                </div>
            </div>
            
            <div id="hd-inner-bottom" className="hidden w-full bg-white my-4">
                <div className="flex flex-col justify-start align-center text-left" id="hd-menu-ls">
                    <div className="top"><div className="header-menu-en">HOME</div><Link href="/">ホーム</Link></div>
                    <div><Link href="/about"><div className="header-menu-en">ABOUT</div>Raxisとは</Link></div>
                    <div><Link href="/products"><div className="header-menu-en">PRODUCTS</div>事業内容</Link></div>
                    <div><Link href="/works"><div className="header-menu-en">WORKS</div>ポートフォリオ</Link></div>
                    <div><Link href="/blog"><div className="header-menu-en">BLOG</div>ブログ</Link></div>
                    <div><Link href="/contact"><div className="header-menu-en">CONTACT</div>お問い合わせ</Link></div>
                </div>
            </div>
        </header>
    );
}