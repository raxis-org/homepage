import React from 'react';

export default function CookiePolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Cookieポリシー</h1>
            
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. Cookieとは</h2>
                <p className="mb-4">
                    Cookieとは、ウェブサイトがお客様のデバイスに保存する小さなテキストファイルです。これにより、ウェブサイトはお客様の訪問履歴や設定を記憶し、より良いユーザー体験を提供することができます。
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. 当社が使用するCookieの種類</h2>
                <p className="mb-4">当社は以下の種類のCookieを使用しています：</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>必須Cookie：ウェブサイトの基本的な機能を提供するために必要なCookie</li>
                    <li>機能Cookie：お客様の設定や選択を記憶するCookie</li>
                    <li>分析Cookie：ウェブサイトの利用状況を分析するためのCookie</li>
                    <li>マーケティングCookie：お客様の興味に基づいた広告を表示するためのCookie</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. Cookieの使用目的</h2>
                <p className="mb-4">当社はCookieを以下の目的で使用しています：</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>ウェブサイトの機能性の向上</li>
                    <li>ユーザー体験の改善</li>
                    <li>ウェブサイトの利用状況の分析</li>
                    <li>セキュリティの確保</li>
                    <li>パーソナライズされたコンテンツの提供</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">4. サードパーティCookie</h2>
                <p className="mb-4">
                    当社は、Google Analyticsなどのサードパーティサービスを使用しており、これらのサービスもCookieを使用する場合があります。これらのCookieの使用については、各サービスのプライバシーポリシーをご確認ください。
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">5. Cookieの管理</h2>
                <p className="mb-4">
                    お客様は、ブラウザの設定を変更することでCookieの使用を制限したり、ブロックしたりすることができます。ただし、その場合、ウェブサイトの一部の機能が正常に動作しない可能性があります。
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">6. ポリシーの更新</h2>
                <p className="mb-4">
                    当社は、必要に応じて本Cookieポリシーを更新することがあります。重要な変更がある場合は、当社ウェブサイトでお知らせいたします。
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">7. お問い合わせ</h2>
                <p className="mb-4">
                    本Cookieポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
                </p>
                <p>
                    Raxis株式会社<br />
                    〒107-0052 東京都港区赤坂1丁目1番地<br />
                    Email: info@raxis.org
                </p>
            </section>
        </div>
    );
} 