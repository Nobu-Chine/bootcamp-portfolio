export type Work = {
  title: string;
  summary: string;
  tech: string[];
  point: string;
  // 実際にどう使っているか（「実際に使い続けているツール」のカードだけ書く）
  usage?: string;
  url?: string;
  // 公開(Public)しているGitHubリポジトリだけ書く
  repo?: string;
};

// 実際に使い続けているツール
export const tools: Work[] = [
  {
    // TODO: summary（概要）は仮。あとで本人が差し替える
    title: "配送部門 半自動シフト作成ツール",
    summary: "配送部門のスタッフのシフト表のたたき台を自動で作るツール。",
    tech: ["HTML", "JavaScript", "ExcelJS"],
    point: "3人体制・4人体制を切り替えてシフトを作れます。担当コースの割り当てに偏りが出ないように調整し、Excelに出力して出勤回数などを自動で集計できるようにしました。最後は人の目で確認して手で調整する前提の半自動ツールです。",
    usage: "実際の業務で使用中。たたき台を自動で作り、最後に手で微調整",
  },
  {
    title: "月次請求書自動化",
    summary: "カレンダーの勤務記録をもとに、請求書を自動作成するスクリプト。",
    tech: ["Google Apps Script"],
    point: "カレンダーの予定タイトルから勤務時間・休憩時間を自動で読み取って集計し、金額計算から請求書ドキュメントの作成、PDF化、Gmail下書きへの添付までを、毎月5日に自動で実行される仕組みにしました。",
    usage: "毎月5日に自動で実行",
  },
  {
    title: "Gmail請求書自動保存ツール",
    summary: "サブスクしているAIサービスの請求書メールから、添付のPDFをパソコンの請求書フォルダに自動で保存するツール。",
    tech: ["Node.js", "Gmail API"],
    point: "パソコンを起動すると対象の請求書メールがあるかを自動で確認し、あれば添付のPDFをパソコンの請求書フォルダに保存して、そのメールは受信トレイから専用のフォルダに移して整理されるようにしました。",
    usage: "パソコン起動時に自動で実行",
  },
];

// その他の作品
export const otherWorks: Work[] = [
  {
    title: "バドミントン部サイト",
    summary: "地域のバドミントンクラブの公式サイト。日程・大会結果・活動動画などを発信。",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    point: "Matrix風の背景演出や、大会結果を年度ごとに振り返れるアーカイブ機能など、見た目と使いやすさの両方にこだわりました。",
    url: "https://badminton-site.vercel.app/",
  },
  {
    title: "簿記3級ドリルアプリ",
    summary: "簿記3級の仕訳問題を8分野・160問収録した学習アプリ。",
    tech: ["HTML（単一ファイル）", "Vercel"],
    point: "間違えた問題や正答率の低い分野を自動で判定して優先的に出題するほか、解説だけでは分からない場合に備えて、問題・自分の回答・模範解答・解説をまとめてコピーし、生成AIに質問できるボタンも用意しました。",
    url: "https://boki3-drill.vercel.app/",
    repo: "https://github.com/Nobu-Chine/boki3-drill",
  },
  {
    title: "学習クイズポータル",
    summary: "算数・理科・数学・沖縄マップの4種類のクイズを収録した、複数人で使える学習アプリ。",
    tech: ["Next.js", "Tailwind CSS", "Upstash Redis"],
    point: "娘の苦手分野を復習できるようにと作り始め、カテゴリ別の苦手分野表示やランキング、連続正解を競うストリークモードなど、続けたくなる工夫を盛り込みました。",
    url: "https://math-quiz-beige-iota.vercel.app/",
    repo: "https://github.com/Nobu-Chine/math-quiz",
  },
  {
    title: "SPI非言語 練習アプリ",
    summary: "適性検査（SPI）の非言語7分野を、スマホですきま時間に練習できるアプリ。",
    tech: ["HTML", "JavaScript", "Vercel"],
    point: "問題は固定ではなく、テンプレートと乱数で毎回自動で作ります。自動で作る以上、答えの正しさを人の目で確かめきれないため、全パターンを1000問ずつ作って別の計算方法で解き直す自動チェックを用意しました。不正解の選択肢はよくある計算ミスから作り、選んだ誤答がどのミスで出る数字かを表示するので、なぜ間違えたかまで振り返れます。",
    url: "https://spi-practice-app.vercel.app/",
    repo: "https://github.com/Nobu-Chine/spi-practice",
  },
];
