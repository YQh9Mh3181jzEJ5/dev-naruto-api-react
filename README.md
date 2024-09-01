# ナルト キャラクター図鑑 

![New Project](https://github.com/user-attachments/assets/179b12a5-57ff-4de0-8a07-db80a4ab2ee9)

## プロジェクト概要 📚

このプロジェクトは、[[Naruto DB]](https://narutodb.xyz/) の API を使用して、ナルトのキャラクター情報をカード形式で表示するウェブアプリケーションです。

## 主な機能 🌟

- キャラクター情報の表示（画像、名前、所属など）
- ページネーション機能
- レスポンシブデザイン

## 使用技術 🛠️

- React 18.3.1
- TypeScript 5.2.2
- Vite 5.3.1
- Axios 1.7.2
- CSS Modules

## プロジェクト構造 📂

```shell
├── App.css
├── App.tsx
├── assets
│   └── dummy.png
├── components
│   ├── Card
│   │   ├── Card.css
│   │   └── Card.tsx
│   ├── Header
│   │   ├── Header.css
│   │   └── Header.tsx
│   └── Pager
│       ├── Pager.css
│       └── Pager.tsx
├── constant
│   └── limit.ts
├── hooks
│   └── useCharacters.ts
├── index.css
├── main.tsx
├── types
│   └── character.ts
└── vite-env.d.ts
```

## 使用方法 💻

- アプリケーションを起動すると、ナルトのキャラクター情報がカード形式で表示されます。
- ページネーションボタンを使用して、さらに多くのキャラクターを閲覧できます。

## デプロイ情報 🌐

このプロジェクトは Vercel にデプロイされています。
以下の URL からアクセスできます：

[[デプロイ先の URL]](https://naruto-library.vercel.app/)

## 今後の改善点 🔧

- 検索機能の追加
- キャラクター詳細ページの実装
- パフォーマンスの最適化
