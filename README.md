


# 機能・コンポーネント一覧

**Card(カード)**
情報をわかりやすくするためのカード。
**LanguagePicker(言語)**
言語選択が可能になります。翻訳は/i18n/ui.ts で大部分が可能（ローカライズする可能性のあるコンテンツはページごとに書いてね）
**Modal(ポップアップ)**
リンクを踏む前の注意書きとかで使うのを想定しているが色々なところで使えるので、今後１つのページ内で複数使えるように'検討'中です
**Navbar(メニューバー)**
レスポンシブ対応。Layoutに内包されているので書かなくても自動的に適用されます。メニューボタンのタイトルには文章は直接書かず、以下の様に書いてください

    {t('nav.TITLE')}
そして、ui.tsにてそれに該当する項目を書いてください。
**Layout(レイアウト)**
全てのページで必ず使用してください。テンプレを動かすのに使用していたりしているため、これを使わないと正しく動作しない可能性があります。




# Slot一覧

## Modal（ポップアップ）

> *注意：現時点(4/19時点)では１つのページに１つのmodal（ポップアップ）しか使えません*

*スロット設定
現在のModalスロットの種類です：*

	<!-- タイトル -->
	<slot  name="modal-title"/> 
	<!-- 文章１ -->
	<slot  name="modal-text-1"/>
	<!-- 文章２ -->
	<slot  name="modal-text-2"/>
*スロット呼び出し（例）
以下のスロットに代入してスロットに割り当てます：*
	
    <!-- タイトル -->
    <p  slot="modal-title">タイトル</p>
    <!-- 文章１ -->
    <p  slot="modal-text-1"  class=" text-gray-900 dark:text-white">文章がここに</p>
    <!-- 文章２ -->
    <p  slot="modal-text-1"  class=" text-gray-900 dark:text-white">
  

## Card(カード)
*スロット設定
現在のCardスロットの種類です：*

      <!-- アイコン -->
      <slot  name="icon"/>
      <!-- ヘッダー -->
      <slot  name="header"/>
      <!-- 本文 -->
      <slot  name="sentence"/>
      <!-- リンク -->
      <slot  name="weblink"/>

*スロット呼び出し（例）
以下のスロットに代入してスロットに割り当てます：*

      <!-- アイコン -->
      <p  slot="icon"></p>
      <!-- ヘッダー -->
      <p  slot="header"  class="text-blue-400 dark:text-blue-300">Learn+</p>
      <!-- 本文 -->
      <p  slot="sentence">チーム逸般人が提供するDiscordをベースとしたコミュニティ。</p>
      <!-- リンク -->
      <p  slot="weblink"><a class="inline-flex items-center text-blue-500 hover:underline"  href="https://	 ...</p>
