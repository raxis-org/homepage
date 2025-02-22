// フッターコンポーネント
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="">
            <div className="w-[100vw] bg-white p-8">
                <div className="lg:w-[1024px] m-auto flex flex-nowrap justify-between items-top">
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
                        <div className="flex flex-nowrap justify-start gap-2 m-4" id="ft-sns-links">
                            <Link href="https://x.com/raxis.org/" className="bg-gradient-to-tr from-[var(--theme-1)] to-[var(--theme-3)]"><i className="fa-brands fa-x-twitter"></i></Link>
                            <Link href="https://www.instagram.com/raxis.tech/" className="bg-gradient-to-tr from-[var(--theme-1)] to-[var(--theme-3)]"><i className="fa-brands fa-instagram"></i></Link>
                            <Link href="https://github.com/raxis-tech" className="bg-gradient-to-tr from-[var(--theme-1)] to-[var(--theme-3)]"><i className="fa-brands fa-github"></i></Link>
                        </div>
                        <div>
                        〒181-0004 <br/>東京都三鷹市新川6-22-20
                        </div>
                    </div>
                    <div id="ft-sitemap" className="smmax:hidden w-[calc(100%-250px-50px)] ml-[50px] flex flex-nowrap justify-right items-start gap-4 hover-link-black">
                        <div className="ft-sitemap-box">
                            <h1 className="ft-sitemap-title">Raxisについて</h1>
                            <div className="ft-sitemap-ls">
                                <Link href="/about">会社概要</Link>
                                <Link href="/about/missions">ミッション・ビジョン</Link>
                                <Link href="/about/contact">お問い合わせ/FAQ</Link>
                                <Link href="/about/members">メンバー</Link>
                            </div>
                        </div>

                        <div className="ft-sitemap-box">
                            <h1 className="ft-sitemap-title">事業内容</h1>
                            <div className="ft-sitemap-ls">
                                <Link href="#">webアプリ・サイト制作</Link>
                                <Link href="#">プログラム委託業務</Link>
                                <Link href="#">麻雀アプリ開発</Link>
                                <Link href="#">プラットフォーム制作</Link>
                                <Link href="#">SNS運用代行</Link>
                            </div>
                        </div>

                        <div className="ft-sitemap-box">
                            <h1 className="ft-sitemap-title">制作物</h1>
                            <div className="ft-sitemap-ls">
                                <Link href="#">ポートフォリオ </Link>
                                <Link href="#">導入事例</Link>
                                <Link href="#">メンバー紹介</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-full bg-slate-800 p-4">
                <div className="container lg:w-[1000px] m-auto flex flex-nowrap justify-between items-center">
                    <div>
                        <div className="text-gray-400">Copyright © 2025 All Right Reserved.</div>
                    </div>
                    <div className="flex flex-nowrap justify-start text-gray-400 gap-8">
                        <Link href="#">プライバシーポリシー</Link>
                        <Link href="#">cookieポリシー</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}