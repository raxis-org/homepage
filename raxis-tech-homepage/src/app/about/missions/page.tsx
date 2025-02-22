// 理念について書くページ

export default function MissionsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">理念</h1>
            {/* 理念リスト */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* 未来を支えるIT技術の創造 */}
                <MissionCard
                    title="学業に邁進"
                    description="東大医学部頭悪くないか"
                />

                {/* 人々の生活を豊かにする */}
                <MissionCard
                    title="礼節の実践"
                    description="中田ひろみ以外には敬語を使おう。"
                />

                {/* 社会の発展に貢献 */}
                <MissionCard
                    title="山水の愛護"
                    description="洛北にある銀杏は全て刈り取ろう"
                />
            </div>

        </div>
    );
}

// 理念カードコンポーネント
export function MissionCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-700 mt-2">{description}</p>
        </div>
    );
}

