//　メンバーについて書くページ

export default function MembersPage() {
    return (
        <main>
            <h1 className="text-3xl font-bold mb-6">メンバー</h1>
            {/* メンバーリスト */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* 田中 */}
                <MemberCard
                    name="田中"
                    role="CEO"
                    description="東京大学入学後、情報系の学部に進学。サークルでIT技術やAIについて学び、インターン企業で経験を積む。在学中にRaxisを設立"
                />

                {/* 山口 */}
                <MemberCard
                    name="山口"
                    role="CTO"
                    description="京都大学に入学し、情報工学を専攻。大学院でAIの研究を行い、卒業後にRaxisのCTOとして技術戦略を担当。"
                />

                {/* 村松 */}
                <MemberCard
                    name="村松"
                    role="システムマネージャー"
                    description="京都大学卒業後、IT企業でシステムエンジニアとして経験を積む。Raxisではシステムの設計と運用を担当。"
                />

                {/* 黒川 */}
                <MemberCard
                    name="黒川"
                    role="AIストラテジスト"
                    description="京都大学でAIの研究を行い、企業での実務経験を経てRaxisに参加。AI技術の戦略立案とプロジェクト推進を担当。"
                />
            </div>
        </main>
    );
}

// メンバーカードコンポーネント
function MemberCard({ name, role, description }: { name: string; role: string; description: string }) {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-700 mt-2">{role}</p>
            <p className="text-gray-700 mt-2">{description}</p>
        </div>
    );
}