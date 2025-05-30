// 理念について書くページ

export default function MissionsPage() {
    return (
        <main>
            <h1 className="text-3xl font-bold mb-6">理念</h1>
            {/* 理念リスト */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* 技術革新による社会貢献 */}
                <MissionCard
                    title="技術革新の推進"
                    description="最先端のIT技術を活用し、社会の課題解決と発展に貢献します。"
                />

                {/* 誠実な行動と信頼の構築 */}
                <MissionCard
                    title="誠実と信頼"
                    description="常に誠実な姿勢で行動し、お客様や社会との信頼関係を大切にします。"
                />

                {/* 持続可能な未来への取り組み */}
                <MissionCard
                    title="持続可能な未来の実現"
                    description="環境や社会に配慮した事業活動を通じて、持続可能な未来を目指します。"
                />
            </div>
        </main>
    );
}

// 理念カードコンポーネント
function MissionCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-700 mt-2">{description}</p>
        </div>
    );
}

