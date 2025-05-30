// 事業概要について書くページ 以下はgptの出力例
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">事業内容</h1>
        {/* 事業内容リスト */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Webアプリ・Webサイト制作 */}
          <ServiceCard
            title="Webアプリ・Webサイト制作"
            description="最先端の技術を活用したWeb開発を行います。"
            link="/products/web-dev"
          />

          {/* その他プログラム業務委託 */}
          <ServiceCard
            title="その他プログラム業務委託"
            description="システム開発やAI開発の業務委託を承ります。"
            link="/products/outsourcing"
          />

          {/* 麻雀アプリ */}
          <ServiceCard
            title="麻雀アプリ開発"
            description="オンライン麻雀アプリの開発・運営を行っています。"
            link="/products/mahjong-app"
          />

          {/* プラットフォームづくり */}
          <ServiceCard
            title="プラットフォームづくり"
            description="新規プラットフォームの企画・開発を支援します。"
            link="/products/platform-creation"
          />

          {/* SNS運用代行 */}
          <ServiceCard
            title="SNS運用代行"
            description="SNSアカウントの戦略立案から運用までサポートします。"
            link="/products/sns-management"
          />
        </div>
      </div>
    </main>
  );
}

// 事業内容カードコンポーネント
function ServiceCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link href={link} className="block p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </Link>
  );
}