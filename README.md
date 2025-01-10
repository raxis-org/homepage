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
lint設定を行って`npm run lint`により自動で体裁を整えてくれるようにする。  
具体的なlintルールの内容としては、  
- 命名規則：lowerCamelCase
- ロジック分岐：簡単な論理分岐はcase,switchではなくif,elseを用いる  
などがある。


