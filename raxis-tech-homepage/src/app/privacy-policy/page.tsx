import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">1. 個人情報の取り扱いについて</h2>
                <p className="mb-4">
                    当社は、個人情報の保護に関する法律、その他の関係法令を遵守し、お客様のプライバシー保護に最大限の注意を払います。
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">2. 個人情報の収集・利用目的</h2>
                <p className="mb-4">
                    当社は、以下の目的のために個人情報を収集・利用いたします：
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>お問い合わせへの対応</li>
                    <li>サービスの提供・運営</li>
                    <li>新規サービスの開発</li>
                    <li>お知らせ・メールマガジンの配信</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">3. 個人情報の管理</h2>
                <p className="mb-4">
                    当社は、お客様の個人情報を適切に管理し、以下に該当する場合を除き、個人情報を第三者に開示いたしません。
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>お客様の同意がある場合</li>
                    <li>法令に基づき開示することが必要である場合</li>
                    <li>業務委託先に対して、必要な範囲で個人情報を開示する場合</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">4. 個人情報の安全対策</h2>
                <p className="mb-4">
                    当社は、個人情報の正確性及び安全性確保のために、セキュリティ対策を実施し、個人情報の漏洩、滅失または毀損を防止します。
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">5. 個人情報の開示・訂正・利用停止</h2>
                <p className="mb-4">
                    当社は、お客様ご本人からの個人情報の開示、訂正、利用停止等のご要請に対して、合理的な範囲で速やかに対応いたします。
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">6. プライバシーポリシーの変更</h2>
                <p className="mb-4">
                    当社は、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更がある場合は、当社ウェブサイトでお知らせいたします。
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">7. お問い合わせ</h2>
                <p className="mb-4">
                    本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
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