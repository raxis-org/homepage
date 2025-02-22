//　メンバーについて書くページ

export default function MembersPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">メンバー</h1>
            {/* メンバーリスト */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* 田中 */}
                <MemberCard
                    name="田中"
                    role="CEO"
                    description="会社のリーダー。"
                />

                {/* 山口 */}
                <MemberCard
                    name="山口"
                    role="CTO"
                    description="技術のリーダー。"
                />

                {/* 村松 */}
                <MemberCard
                    name="村松"
                    role="システムマネージャー"
                    description="システムの管理を担当。"
                />

                {/* 黒川 */}
                <MemberCard
                    name="黒川"
                    role="AIストラテジスト"
                    description="AIの戦略を立てる。"
                />
            </div>
        </div>
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