// 「Raxisについて」のメインページを作成するコードを書く。
// 以下はChat GPTにより生成させた仮のコード
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Raxisについて</h1>

      {/* 会社概要 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">会社概要</h2>
        <ul className="bg-gray-100 p-4 rounded-lg">
          <li><strong>会社名:</strong> 株式会社Raxis</li>
          <li><strong>役員:</strong> 田中(CEO), 山口(CTO), 村松 (システムマネージャー), 黒川 (AIストラテジスト)</li>
          <li><strong>設立日:</strong> 2023年12月7日</li>
          <li><strong>本拠地:</strong> 京都, 日本</li>
          <li><strong>理念:</strong> 未来を支えるIT技術の創造</li>
          <li><strong>資本金:</strong> 1000万円</li>
        </ul>
      </section>

      {/* ミッション・ビジョンへのリンク */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">ミッション・ビジョン</h2>
        <p>私たちの目指す未来についてはこちらをご覧ください。</p>
        <Link href="/about/missions" className="text-blue-600 underline">
          ミッション・ビジョンを見る →
        </Link>
      </section>

      {/* メンバー紹介へのリンク */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">メンバー紹介</h2>
        <p>Raxisのメンバーを紹介します。</p>
        <Link href="/about/members" className="text-blue-600 underline">
          メンバー紹介を見る →
        </Link>
      </section>
    </div>
  );
}