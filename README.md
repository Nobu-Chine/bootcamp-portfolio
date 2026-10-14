# BootCamp応募用ポートフォリオ

Singularity Society BootCamp 応募用の自己紹介サイト。
身の回りの困りごとを生成AIと一緒にツールにして、実際に使い続けている例を紹介する。

## ページの構成

1ページ構成で、上のメニューから各セクションへ移動できる。

| セクション | 内容 | 編集する場所 |
|---|---|---|
| トップ | 見出し・サブ文 | `src/components/Hero.tsx` |
| 実際に使い続けているツール | 使用状況つきのカード | `src/data/works.ts` の `tools` |
| その他の作品 | 公開しているサイト・アプリ | `src/data/works.ts` の `otherWorks` |
| 私の作り方 | AIとの作り方 | `src/components/Approach.tsx` |
| ブートキャンプで作りたいもの | 作りたいアプリの説明 | `src/components/Bootcamp.tsx` |
| 制作で使っているツール | 技術・ツールの一覧 | `src/data/skills.ts` |
| フッター | GitHubへのリンク | `src/components/Footer.tsx` |

上のメニューは `src/data/nav.ts`。

## 使っている技術

- Next.js 16（App Router）/ React 19 / TypeScript
- Tailwind CSS 4
- Vercel（デプロイ）

## ローカルで動かす

```bash
npm install
npm run dev
```

http://localhost:3000 を開く。

## デプロイ

`main` ブランチに push すると Vercel が自動でデプロイする。
