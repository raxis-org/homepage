// フッターコンポーネント
import { faSquareXTwitter, faSquareInstagram, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
                        <div className="ft-sitemap-box">
                            <h1 className="ft-sitemap-title"><Link href="/about">Raxisとは</Link></h1>
                            <div className="ft-sitemap-ls">
                                <Link href="/about">会社概要</Link>
                                <Link href="/about/missions">ミッション・ビジョン</Link>
                                <Link href="/contact">お問い合わせ/FAQ</Link>
                                <Link href="/about/members">メンバー</Link>
                            </div>
                        </div>

                        <div className="ft-sitemap-box">
                            <h1 className="ft-sitemap-title"><Link href="/products">事業内容</Link></h1>
                            <div className="ft-sitemap-ls">
                                <Link href="/products/web-dev">webアプリ・サイト制作</Link>
                                <Link href="/products/outsourcing">プログラム委託業務</Link>
                                <Link href="/products/mahjong-app">麻雀アプリ開発</Link>
                                <Link href="/products/platform-creation">プラットフォーム制作</Link>
                                <Link href="/products/sns-management">SNS運用代行</Link>
                            </div>
                        </div>

                        <div className="ft-sitemap-box">
                            <h1 className="ft-sitemap-title"><Link href="/works">制作物</Link></h1>
                            <div className="ft-sitemap-ls">
                                <Link href="/works">ポートフォリオ </Link>
                                <Link href="/works">導入事例</Link>
                                <Link href="/works">利用者の声</Link>
                            </div>
                        </div>

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
                        <div className="inline-block md:border-none border-t-[2px] border-[#777] mt-4 md:mt-0 pt-4 md:pt-0 text-gray-400 text-sm">Copyright © 2025 All Right Reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}