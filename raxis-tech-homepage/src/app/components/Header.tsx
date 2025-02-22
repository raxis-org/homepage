// ヘッダーコンポーネント
import Image from "next/image";

export default function Header() {
    return (
        <header className="z-10 sticky bottom-0 left-0 right-0 top-4 h-[80px] w-[100vw] m-auto rounded-full bg-white shadow-lg lg:w-[1024px] px-8 overflow-hidden">
            <div id="header-inner" className="w-full m-auto flex flex-nowrap justify-between items-center text-center  ">
                <div id="header-icon-wrapper" className="flex flex-nowrap">
                <Image
                    className="dark:invert"
                    src="/assets/icon/icon-with-text.png"
                    alt="Site logo"
                    width={250}
                    height={20}
                    priority
                />
                <h1 className="font-sans font-bold text-[2rem] text-blue-700"></h1>

                </div>
                <div id="header-contents-wrapper" className="flex flex-nowrap justify-between">
                    <a className="header-content" href="/about">
                        <div className="header-content-en">ABOUT</div>
                        <div className="header-content-label">Raxisとは</div>
                    </a>

                    <a className="header-content" href="/products">
                        <div className="header-content-en">PRODUCTS</div>
                        <div className="header-content-label">事業内容</div>
                    </a>

                    <a className="header-content" href="/works">
                        <div className="header-content-en">WORKS</div>
                        <div className="header-content-label">ポートフォリオ</div>
                    </a>

                    <a className="header-content" href="/blog">
                        <div className="header-content-en">BLOG</div>
                        <div className="header-content-label">ブログ</div>
                    </a>

                    <a className="header-content" href="/contact">
                        <div className="header-content-en">CONTACT</div>
                        <div className="header-content-label">お問い合わせ</div>
                    </a>
                </div>
            </div>
        </header>
    );
}