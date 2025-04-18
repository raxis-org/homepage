# ホームページサイト
## 概要
Raxisの静的ホームページサイトです。
デプロイ先は[こちら](デプロイ先URL)

## ファイル変更手順
ターミナルにて（初回）
```bash
mkdir raxis
cd ./raxis
git clone https://github.com/raxis-org/homepage.git
cd ./homepage/raxis-tech-homepage
npm install
npm run dev #サーバーが立ち上がる。Ctr + C でターミナルに復帰できる
```
一度cloneした後(続き)
```bash
git checkout -b issue/番号-編集内容 #例：issue/1-add-css-file
git add 編集(追加)したファイル名
git push commit -m "コミット内容"
git push origin ブランチ名
```
pushした後は、[ここ](https://github.com/raxis-org/homepage)からpull requestを出すこと。

## コードルール（順次追加予定）
```bash
npm run lint #このコマンドを実行することで自動的に修正してくれる。
```
具体的なlintルールの内容としては、  
- 命名規則：lowerCamelCase
- ロジック分岐：簡単な論理分岐はcase,switchではなくif,elseを用いる  
などがある。（eslint.config.mjsに記載）
インデントが揃ってないやつを修正するのもやりたい。

# 0. 作成目的・背景

以下のような役割を果たすためにホームページを作成します

- 自社の会社理念・会社概要・活動実績を紹介
- ポートフォリオ

将来的には、以下のような用途でも活用できるかと思います

- 外部団体からの問い合わせ受付
- Raxis車の発売のホームページ

# 1. 機能要件

## 1-1. 基本的な機能要件

- 会社の紹介
- ポートフォリオの閲覧
- お問い合わせ

## 1-2. ターゲットユーザーごとの機能要件

サイトが想定するターゲットユーザーごとに、満たすべき機能要件を追記します

### クラウドソーシングの委託先

外部にリンクを張ってそこから飛んでくる人が多い

- ポートフォリオの閲覧
- 実績確認

### 外部の企業・団体・銀

新聞や、ネットニュースなどで取り上げられた際には、**「ブラウザ検索での訪問」「外部リンクからの訪問」**の2種類が考えられます。適切なSEO対策(サイトの要約やタイトルを工夫して検索に引っかかったりクリックしてもらいやすくすること)も大事です。行

- 活動紹介
- お問い合わせ

### 外国人対策

- 翻訳切り替えボタンの設置

# 2. サイト構成

## ページ構成(サイトマップ)

以下は、想定しているサイトマップです。

- **トップページ**
    - ヘッダー：ロゴ、メニュー、言語切替
    - メインビジュアル　Rのでっかいやつとか、写真
    - 事業内容の概要　事業内容３つ
    - 過去の制作サイトの一覧
    - フッター：SNSリンク、お問い合わせ
- **Raxisについて**
    - **会社概要**
        - 会社名
        - 役員
        - 設立日
        - 本拠地
        - 理念
        - 資本金
    - **ミッション・ビジョン**
        - はるとの顔
        - はるとの言葉
    - **メンバー紹介**
        - システムマネージャー村松
        - AIストラテジスト黒川
        - エグゼクティブディレクター松原
- **事業内容**
    - **webアプリ・webサイト制作**
    - **その他プログラム業務委託**
    - **麻雀アプリ**
    - **プラットフォームづくり**
    - **SNS運用代行**
    
    - それぞれの詳細ページもあり
- **ポートフォリオ**
    - プロジェクトギャラリー
        - それぞれのサイトの紹介(こだわりポイント、)
        - ほんまのサイトのリンク
- **ブログ**
    - 活動報告
    - イベント情報
- **お問い合わせ**
    - 問い合わせフォーム
    - FAQ

# 3. デザイン要件

### 目指したいページのイメージ・雰囲気

- スマートで賢くて仕事できて潔くて透明性がある
- 派手過ぎない(シンプルで洗練されたやつ)
- ベースの色は黒・青・白

# 4. 維持管理方法・コスト

## **コスト**

サイトを運営する上で発生する支払いをまとめます

| 項目 | 初期・定期 | 金額 |
| --- | --- | --- |
| ドメイン購入・更新 | 初期買い切り | 249円
(raxis.techを取得済) |
| レンタルサーバー(Netlify) | 定期 | 0円(2025年1月～) |

※サイト内で車の販売・支払いができるような簡易のECサイト化を実現する場合、VercelやHerokuに金を積む

---

以下3項目は、サイトの管理方法や引継ぎ方法などについてです。

# 5. 技術・システム要件

簡易のECサイトを内包するかどうかが大きなシステム事案ですが、販売商品が生まれるまではとりあえず省略します。

### レンタルサーバー

NetlifyにReactベースのアプリをデプロイ(バックエンドは無し)

### ドメイン

1/17に「raxis**.tech**』0円にて購入済。とりあえずはこちらのドメインを使います。

### 

### 用いるツールや言語

- バージョン管理：　Git
- リポジトリ：　GibHub
- サーバー：　Netlify
- フロントエンド：React / typescript / CSS系のやつ
    - SASS
    - TailWind CSS
    - Styled Components
    - Material UI(https://mui.com/)
    - Mantine(https://ui.mantine.dev/)


