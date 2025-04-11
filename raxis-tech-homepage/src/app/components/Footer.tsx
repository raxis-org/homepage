// フッターコンポーネント
"use client"
import { faSquareXTwitter, faSquareInstagram, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect,useState } from 'react';

export default function Footer() {
    const [menuData, setMenuData] = useState<any>(null);

    useEffect(() => {
        fetch("/data/menuData.json")
            .then(response => response.json())
            .then(data => setMenuData(data))
            .catch(error => console.error("Error loading menu data:", error));
    }, []);

    function FooterContentCard({ name }: { name: string}) {
        if (menuData){
            let subLink: string[][] = menuData[name]["sub-link"]
            return(
                <div className="ft-sitemap-box">
                    <h1 className="ft-sitemap-title"><Link href={menuData[name]["top-link"]}>{menuData[name]["t-ja"]}</Link></h1>
                    <div className="ft-sitemap-ls">
                        {subLink.map((item, index) => (
                            <Link key={index} href={item[1]}>{item[0]}</Link>
                        ))}
                    </div>
                </div>
            )
        }else{
            return(
                <div>loading...</div>
            )
        }
    }

    return (
        <footer className="">
            <div className="w-[100vw] mt-24 p-8 pt-12 border-t-8 border-[var(--theme-1)]">
                <div className="lg:w-[1024px] m-auto flex-column justify-start items-start md:flex md:flex-nowrap md:justify-between items-top">
                    <div className="flex flex-col w-[250px]">
                        <Link href="/">
                            <Image
                                src="/assets/icon/icon-with-text.png"
                                alt="Site logo"
                                width={200}
                                height={54.5}
                                priority
                            />
                        </Link>
                        <div className="flex flex-nowrap justify-start gap-2 m-4 text-black" id="ft-sns-links">
                            <Link target="_blank" href="https://x.com/raxis.org/">
                                <FontAwesomeIcon icon={faSquareXTwitter} size="3x"/>
                            </Link>
                            <Link target="_blank" href="https://www.instagram.com/raxis.tech/">
                                <FontAwesomeIcon icon={faSquareInstagram} size="3x"/>
                            </Link>
                            <Link target="_blank" href="https://github.com/raxis-tech">
                                <FontAwesomeIcon icon={faSquareGithub} />
                            </Link>
                        </div>
                        <div>
                            〒107-0052 <br/>東京都港区赤坂1丁目1番地
                        </div>
                    </div>
                    <div id="ft-sitemap" className="w-full md:w-[calc(100%-250px-50px)] mt-8 md:mt-0 md:ml-[50px] flex-column flex-nowrap justify-start items-start md:flex md:justify-end md:gap-4 hover-link">

                        <FooterContentCard name="about"/>
                        <FooterContentCard name="products"/>
                        <FooterContentCard name="works"/>

                    </div>
                </div>
            </div>
            <div className="w-full bg-slate-800 p-4">
                <div className="container lg:w-[1000px] m-auto flex flex-col items-start md:flex-row md:flex-nowrap md:justify-between md:items-center">
                    <div className="flex flex-nowrap justify-start text-gray-400 gap-8">
                        <Link href="#">プライバシーポリシー</Link>
                        <Link href="#">cookieポリシー</Link>
                    </div>
                    <div>
                        <div className="inline-block md:border-none border-t-[2px] border-[#777] mt-4 md:mt-0 pt-4 md:pt-0 text-gray-400 text-sm">Copyright © 2025 Raxis.tech</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}