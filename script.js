 const attractions = [
    { "name": "オムニバス", "park": "LAND", "category": "アトラクション", "lat": 35.63255, "lng": 139.88145 },
    { "name": "ペニーアーケード", "park": "LAND", "category": "アトラクション", "lat": 35.63220, "lng": 139.88125 },
    { "name": "ウエスタンリバー鉄道", "park": "LAND", "category": "アトラクション", "lat": 35.63390, "lng": 139.87850 },
    { "name": "カリブの海賊", "park": "LAND", "category": "アトラクション", "lat": 35.63260, "lng": 139.88035 },
    { "name": "ジャングルクルーズ", "park": "LAND", "category": "アトラクション", "lat": 35.63310, "lng": 139.87970 },
    { "name": "スイスファミリー・ツリーハウス", "park": "LAND", "category": "アトラクション", "lat": 35.63245, "lng": 139.87950 },
    { "name": "魅惑のチキルーム：スティッチ・プレゼンツ アロハ・エ・コモ・マイ！", "park": "LAND", "category": "アトラクション", "lat": 35.63275, "lng": 139.87880 },
    { "name": "ウエスタンランド・シューティングギャラリー", "park": "LAND", "category": "アトラクション", "lat": 35.63355, "lng": 139.87820 },
    { "name": "蒸気船マークトウェイン号", "park": "LAND", "category": "アトラクション", "lat": 35.63385, "lng": 139.87735 },
    { "name": "トムソーヤ島いかだ", "park": "LAND", "category": "アトラクション", "lat": 35.63345, "lng": 139.87800 },
    { "name": "ビックサンダー・マウンテン", "park": "LAND", "category": "アトラクション", "lat": 35.63530, "lng": 139.87780 },
    { "name": "スプラッシュ・マウンテン", "park": "LAND", "category": "アトラクション", "lat": 35.63660, "lng": 139.87840 },
    { "name": "ビーバーブラザーズのカヌー探検", "park": "LAND", "category": "アトラクション", "lat": 35.63645, "lng": 139.87750 },
    { "name": "アリスのティーパーティー", "park": "LAND", "category": "アトラクション", "lat": 35.63315, "lng": 139.88235 },
    { "name": "イッツ・ア・スモールワールド", "park": "LAND", "category": "アトラクション", "lat": 35.63400, "lng": 139.88280 },
    { "name": "キャッスルカルーセル", "park": "LAND", "category": "アトラクション", "lat": 35.63295, "lng": 139.88190 },
    { "name": "白雪姫と七人のこびと", "park": "LAND", "category": "アトラクション", "lat": 35.63270, "lng": 139.88155 },
    { "name": "シンデレラのフェアリーテイル・ホール", "park": "LAND", "category": "アトラクション", "lat": 35.63228, "lng": 139.88200 },
    { "name": "空飛ぶダンボ", "park": "LAND", "category": "アトラクション", "lat": 35.63335, "lng": 139.88185 },
    { "name": "美女と野獣 魔法のものがたり", "park": "LAND", "category": "アトラクション", "lat": 35.6348, "lng": 139.8858 },
    { "name": "ピーターパン空の旅", "park": "LAND", "category": "アトラクション", "lat": 35.63260, "lng": 139.88135 },
    { "name": "ピノキオの冒険旅行", "park": "LAND", "category": "アトラクション", "lat": 35.63255, "lng": 139.88180 },
    { "name": "ピノキオの冒険旅行", "park": "LAND", "category": "アトラクション", "lat": 35.63255, "lng": 139.88180 },
    { "name": "プーさんのハニーハント", "park": "LAND", "category": "アトラクション", "lat": 35.63405, "lng": 139.88410 },
    { "name": "ホーンテッドマンション", "park": "LAND", "category": "アトラクション", "lat": 35.63340, "lng": 139.88080 },
    { "name": "ミッキーのフィルハーマジック", "park": "LAND", "category": "アトラクション", "lat": 35.63300, "lng": 139.88220 },
    { "name": "ガジェットのゴーコースター", "park": "LAND", "category": "アトラクション", "lat": 35.63450, "lng": 139.88330 },
    { "name": "グーフィーのペイント＆プレイハウス", "park": "LAND", "category": "アトラクション", "lat": 35.63435, "lng": 139.88290 },
    { "name": "チップとデールのツリーハウス", "park": "LAND", "category": "アトラクション", "lat": 35.63455, "lng": 139.88260 },
    { "name": "トゥーンパーク", "park": "LAND", "category": "アトラクション", "lat": 35.63415, "lng": 139.88240 },
    { "name": "ドナドナドのボート", "park": "LAND", "category": "アトラクション", "lat": 35.63480, "lng": 139.88295 },
    { "name": "ミニーの家", "park": "LAND", "category": "アトラクション", "lat": 35.63465, "lng": 139.88335 },
    { "name": "ロジャーラビットのカートゥーンスピン", "park": "LAND", "category": "アトラクション", "lat": 35.63490, "lng": 139.88365 },
    { "name": "スター・ツアーズ：ザ・アドベンチャーズ・コンティニュー", "park": "LAND", "category": "アトラクション", "lat": 35.63270, "lng": 139.88320 },
    { "name": "スティッチ・エンカウンター", "park": "LAND", "category": "アトラクション", "lat": 35.63245, "lng": 139.88275 },
    { "name": "ベイマックスのハッピーライド", "park": "LAND", "category": "アトラクション", "lat": 35.63355, "lng": 139.88440 },
    { "name": "モンスターズ・インク ライド＆ゴーシーク！", "park": "LAND", "category": "アトラクション", "lat": 35.63185, "lng": 139.88285 },
    { "name": "スペース・マウンテン", "park": "LAND", "category": "アトラクション", "lat": 35.63375, "lng": 139.88365 },
  
  // --- 東京ディズニーランド：レストラン (56) ---
    { "name": "アイスクリームコーン", "park": "LAND", "category": "レストラン", "lat": 35.63222, "lng": 139.88100 },
    { "name": "イーストサイド・カフェ", "park": "LAND", "category": "レストラン", "lat": 35.63190, "lng": 139.88135 },
    { "name": "グレートアメリカン・ワッフル・カンパニー", "park": "LAND", "category": "レストラン", "lat": 35.63225, "lng": 139.88050 },
    { "name": "スイートハート・カフェ", "park": "LAND", "category": "レストラン", "lat": 35.63240, "lng": 139.88135 },
    { "name": "センターストリート・コーヒーハウス", "park": "LAND", "category": "レストラン", "lat": 35.63185, "lng": 139.88160 },
    { "name": "リフレッシュメントコーナー", "park": "LAND", "category": "レストラン", "lat": 35.63215, "lng": 139.88085 },
    { "name": "れすとらん北齋", "park": "LAND", "category": "レストラン", "lat": 35.63180, "lng": 139.88120 },
    { "name": "ポップコーンワゴン（スイートハート・カフェ前）", "park": "LAND", "category": "レストラン", "lat": 35.63225, "lng": 139.88145 },
    { "name": "カフェ・オーリンズ", "park": "LAND", "category": "レストラン", "lat": 35.63270, "lng": 139.87975 },
    { "name": "クリスタルパレス・レストラン", "park": "LAND", "category": "レストラン", "lat": 35.63285, "lng": 139.88035 },
    { "name": "ザ・ガゼーボ", "park": "LAND", "category": "レストラン", "lat": 35.63255, "lng": 139.88015 },
    { "name": "スキッパーズ・ギャレー", "park": "LAND", "category": "レストラン", "lat": 35.63310, "lng": 139.87950 },
    { "name": "スクウィーザーズ・トロピカル・ジュースバー", "park": "LAND", "category": "レストラン", "lat": 35.63290, "lng": 139.87940 },
    { "name": "チャイナボイジャー", "park": "LAND", "category": "レストラン", "lat": 35.63295, "lng": 139.87870 },
    { "name": "パークサイドワゴン", "park": "LAND", "category": "レストラン", "lat": 35.63265, "lng": 139.88050 },
    { "name": "ブルーバイユー・レストラン", "park": "LAND", "category": "レストラン", "lat": 35.63250, "lng": 139.87995 },
    { "name": "フレッシュフルーツオアシス", "park": "LAND", "category": "レストラン", "lat": 35.63300, "lng": 139.87910 },
    { "name": "ボイラールーム・バイツ", "park": "LAND", "category": "レストラン", "lat": 35.63285, "lng": 139.87885 },
    { "name": "ポリネシアンテラス・レストラン", "park": "LAND", "category": "レストラン", "lat": 35.63305, "lng": 139.87895 },
    { "name": "ロイヤルストリート・ベランダ", "park": "LAND", "category": "レストラン", "lat": 35.63250, "lng": 139.87970 },
    { "name": "ポップコーンワゴン（カフェ・オーリンズ前）", "park": "LAND", "category": "レストラン", "lat": 35.63260, "lng": 139.87955 },
    { "name": "ポップコーンワゴン（ザ・ガゼーボ横）", "park": "LAND", "category": "レストラン", "lat": 35.63245, "lng": 139.88010 },
    { "name": "カウボーイ・クックハウス", "park": "LAND", "category": "レストラン", "lat": 35.63385, "lng": 139.87890 },
    { "name": "キャンプ・ウッドチャック・キッチン", "park": "LAND", "category": "レストラン", "lat": 35.63465, "lng": 139.87730 },
    { "name": "ザ・ダイヤモンドホースシュー", "park": "LAND", "category": "レストラン", "lat": 35.63350, "lng": 139.87910 },
    { "name": "ハングリーベア・レストラン", "park": "LAND", "category": "レストラン", "lat": 35.63415, "lng": 139.87815 },
    { "name": "プラザパビリオン・レストラン", "park": "LAND", "category": "レストラン", "lat": 35.63410, "lng": 139.87965 },
    { "name": "ペコスビル・カフェ", "park": "LAND", "category": "レストラン", "lat": 35.63375, "lng": 139.87865 },
    { "name": "ポップコーンワゴン（カウボーイ・クックハウス前）", "park": "LAND", "category": "レストラン", "lat": 35.63375, "lng": 139.87895 },
    { "name": "ポップコーンワゴン（トレーディングポスト横）", "park": "LAND", "category": "レストラン", "lat": 35.63350, "lng": 139.87840 },
    { "name": "グランマ・サラのキッチン", "park": "LAND", "category": "レストラン", "lat": 35.63545, "lng": 139.87830 },
    { "name": "キャプテンフックス・ギャレー", "park": "LAND", "category": "レストラン", "lat": 35.63325, "lng": 139.88100 },
    { "name": "クイーン・オブ・ハートのバンケットホール", "park": "LAND", "category": "レストラン", "lat": 35.63425, "lng": 139.88240 },
    { "name": "トルバドールタバン", "park": "LAND", "category": "レストラン", "lat": 35.63315, "lng": 139.88125 },
    { "name": "ビレッジペイストリー", "park": "LAND", "category": "レストラン", "lat": 35.63370, "lng": 139.88210 },
    { "name": "マジカルマーケット", "park": "LAND", "category": "レストラン", "lat": 35.63430, "lng": 139.88410 },
    { "name": "ラ・タベルヌ・ド・ガストン", "park": "LAND", "category": "レストラン", "lat": 35.63495, "lng": 139.88450 },
    { "name": "ル・フウズ", "park": "LAND", "category": "レストラン", "lat": 35.63475, "lng": 139.88435 },
    { "name": "ル・プティポッパー", "park": "LAND", "category": "レストラン", "lat": 35.63455, "lng": 139.88445 },
    { "name": "ポップコーンワゴン（イッツ・ア・スモールワールド前）", "park": "LAND", "category": "レストラン", "lat": 35.63405, "lng": 139.88265 },
    { "name": "ポップコーンワゴン（プーさんのハニーハント前）", "park": "LAND", "category": "レストラン", "lat": 35.63435, "lng": 139.88375 },
    { "name": "トゥーンタウン・トリート", "park": "LAND", "category": "レストラン", "lat": 35.63450, "lng": 139.88310 },
    { "name": "トゥーンポップ", "park": "LAND", "category": "レストラン", "lat": 35.63455, "lng": 139.88355 },
    { "name": "ヒューイ・デューイ・ルーイのグッドタイム・カフェ", "park": "LAND", "category": "レストラン", "lat": 35.63475, "lng": 139.88300 },
    { "name": "ポップ・ア・ロット・ポップコーン", "park": "LAND", "category": "レストラン", "lat": 35.63480, "lng": 139.88340 },
    { "name": "ミッキーのトレーラー", "park": "LAND", "category": "レストラン", "lat": 35.63465, "lng": 139.88300 },
    { "name": "ソフトランディング", "park": "LAND", "category": "レストラン", "lat": 35.63300, "lng": 139.88315 },
    { "name": "トゥモローランド・テラス", "park": "LAND", "category": "レストラン", "lat": 35.63245, "lng": 139.88350 },
    { "name": "パン・ギャラクティック・ピザ・ポート", "park": "LAND", "category": "レストラン", "lat": 35.63315, "lng": 139.88370 },
    { "name": "ビッグポップ", "park": "LAND", "category": "レストラン", "lat": 35.63385, "lng": 139.88435 },
    { "name": "プラズマ・レイズ・ダイナー", "park": "LAND", "category": "レストラン", "lat": 35.63235, "lng": 139.88275 },
    { "name": "ポッピングポッド", "park": "LAND", "category": "レストラン", "lat": 35.63290, "lng": 139.88325 },
    { "name": "ポップコーンワゴン（トレジャーコメット横）", "park": "LAND", "category": "レストラン", "lat": 35.63305, "lng": 139.88355 },
    { "name": "ラケッティのラクーンサルーン", "park": "LAND", "category": "レストラン", "lat": 35.63660, "lng": 139.87785 },
    { "name": "アイスクリームワゴン（ファンタジーランド・フォレストシアター横）", "park": "LAND", "category": "レストラン", "lat": 35.63490, "lng": 139.88540 },
    { "name": "アイスクリームワゴン（ラ・タベルヌ・ド・ガストン横）", "park": "LAND", "category": "レストラン", "lat": 35.63485, "lng": 139.88460 },

  // --- 東京ディズニーランド：ショー・グリーティング (14) ---
    { "name": "ディズニー・ハーモニー・イン・カラー", "park": "LAND", "category": "ショー", "lat": 35.63220, "lng": 139.88125 },
    { "name": "東京ディズニーランド・エレクトリカルパレード・ドリームライツ", "park": "LAND", "category": "ショー", "lat": 35.63210, "lng": 139.88135 },
    { "name": "Reach for the Stars", "park": "LAND", "category": "ショー", "lat": 35.63185, "lng": 139.88200 },
    { "name": "スカイ・フル・オブ・カラーズ", "park": "LAND", "category": "ショー", "lat": 35.63200, "lng": 139.88100 },
    { "name": "ジャンボリミッキー！", "park": "LAND", "category": "ショー", "lat": 35.63225, "lng": 139.88285 },
    { "name": "ミッキーのレインボー・ルアウ", "park": "LAND", "category": "ショー", "lat": 35.63300, "lng": 139.87895 },
    { "name": "ザ・ダイヤモンド・バラエティマスター", "park": "LAND", "category": "ショー", "lat": 35.63350, "lng": 139.87915 },
    { "name": "ミッキーのマジカルミュージックワールド", "park": "LAND", "category": "ショー", "lat": 35.63485, "lng": 139.88535 },
    { "name": "クラブマウスビート", "park": "LAND", "category": "ショー", "lat": 35.63310, "lng": 139.88370 },
    { "name": "メインストリート・ハウス前（キャラクターグリーティング）", "park": "LAND", "category": "グリーティング", "lat": 35.63120, "lng": 139.88120 },
    { "name": "ウッドチャック・グリーティングトレイル（ドナルド）", "park": "LAND", "category": "グリーティング", "lat": 35.63480, "lng": 139.87715 },
    { "name": "ウッドチャック・グリーティングトレイル（デイジー）", "park": "LAND", "category": "グリーティング", "lat": 35.63485, "lng": 139.87700 },
    { "name": "ミッキーの家とミート・ミッキー", "park": "LAND", "category": "グリーティング", "lat": 35.63475, "lng": 139.88370 },
    { "name": "ミニーのスタイルスタジオ", "park": "LAND", "category": "グリーティング", "lat": 35.63415, "lng": 139.88415 },

  // --- 東京ディズニーシー：アトラクション (30) ---
    { "name": "ヴェネツィアン・ゴンドラ", "park": "SEA", "category": "アトラクション", "lat": 35.62625, "lng": 139.88450 },
    { "name": "ソアリン：ファンタスティック・フライト", "park": "SEA", "category": "アトラクション", "lat": 35.62735, "lng": 139.88525 },
    { "name": "ディズニーシー・トランジットスチーマーライン（メディテレニアンハーバー）", "park": "SEA", "category": "アトラクション", "lat": 35.62580, "lng": 139.88485 },
    { "name": "フォートレス・エクスプロレーション", "park": "SEA", "category": "アトラクション", "lat": 35.62635, "lng": 139.88565 },
    { "name": "フォートレス・エクスプロレーション”ザ・レオナルドチャレンジ”", "park": "SEA", "category": "アトラクション", "lat": 35.62635, "lng": 139.88565 },
    { "name": "タートル・トーク", "park": "SEA", "category": "アトラクション", "lat": 35.62410, "lng": 139.88470 },
    { "name": "タワー・オブ・テラー", "park": "SEA", "category": "アトラクション", "lat": 35.62475, "lng": 139.88520 },
    { "name": "ディズニーシー・エレクトリックレールウェイ（アメリカンウォーターフロント）", "park": "SEA", "category": "アトラクション", "lat": 35.62485, "lng": 139.88410 },
    { "name": "ディズニーシー・トランジットスチーマーライン（アメリカンウォーターフロント）", "park": "SEA", "category": "アトラクション", "lat": 35.62355, "lng": 139.88440 },
    { "name": "トイ・ストーリー・マニア！", "park": "SEA", "category": "アトラクション", "lat": 35.62460, "lng": 139.88350 },
    { "name": "ビッグシティ・ヴィーグル", "park": "SEA", "category": "アトラクション", "lat": 35.62540, "lng": 139.88470 },
    { "name": "アクアトピア", "park": "SEA", "category": "アトラクション", "lat": 35.62580, "lng": 139.88090 },
    { "name": "ディズニーシー・エレクトリックレールウェイ（ポートディスカバリー）", "park": "SEA", "category": "アトラクション", "lat": 35.62540, "lng": 139.88125 },
    { "name": "ニモ＆フレンズ・シーライダー", "park": "SEA", "category": "アトラクション", "lat": 35.62480, "lng": 139.88065 },
    { "name": "インディ・ジョーンズ・アドベンチャー クリスタルスカルの魔宮", "park": "SEA", "category": "アトラクション", "lat": 35.62885, "lng": 139.88100 },
    { "name": "ディズニーシー・トランジットスチーマーライン（ロストリバーデルタ）", "park": "SEA", "category": "アトラクション", "lat": 35.62860, "lng": 139.88210 },
    { "name": "レイジングスピリッツ", "park": "SEA", "category": "アトラクション", "lat": 35.62930, "lng": 139.88050 },
    { "name": "アナとエルサのフローズンジャーニー", "park": "SEA", "category": "アトラクション", "lat": 35.62805, "lng": 139.87850 },
    { "name": "ラプンツェルのランタンフェスティバル", "park": "SEA", "category": "アトラクション", "lat": 35.62880, "lng": 139.87785 },
    { "name": "ピーターパンのネバーランドアドベンチャー", "park": "SEA", "category": "アトラクション", "lat": 35.62950, "lng": 139.87730 },
    { "name": "フェアリー・ティンカーベルのビジーバギー", "park": "SEA", "category": "アトラクション", "lat": 35.62965, "lng": 139.87840 },
    { "name": "キャラバンカルーセル", "park": "SEA", "category": "アトラクション", "lat": 35.62990, "lng": 139.88640 },
    { "name": "ジャスミンのフライングカーペット", "park": "SEA", "category": "アトラクション", "lat": 35.62940, "lng": 139.88560 },
    { "name": "シンドバッド・ストーリーブック・ヴォヤッジ", "park": "SEA", "category": "アトラクション", "lat": 35.63045, "lng": 139.88565 },
    { "name": "マジックランプシアター", "park": "SEA", "category": "アトラクション", "lat": 35.63030, "lng": 139.88640 },
    { "name": "アリエルのプレイグラウンド", "park": "SEA", "category": "アトラクション", "lat": 35.62955, "lng": 139.88725 },
    { "name": "ジャンピング・ジェリーフィッシュ", "park": "SEA", "category": "アトラクション", "lat": 35.62935, "lng": 139.88775 },
    { "name": "スカットルのスクーター", "park": "SEA", "category": "アトラクション", "lat": 35.62885, "lng": 139.88765 },
    { "name": "フランダーのフライングフィッシュコースター", "park": "SEA", "category": "アトラクション", "lat": 35.62985, "lng": 139.88855 },
    { "name": "ブローフィッシュ・バルーンレース", "park": "SEA", "category": "アトラクション", "lat": 35.62955, "lng": 139.88785 },
    { "name": "ワールプール", "park": "SEA", "category": "アトラクション", "lat": 35.62915, "lng": 139.88755 },
    { "name": "海底2万マイル", "park": "SEA", "category": "アトラクション", "lat": 35.62725, "lng": 139.88500 },
    { "name": "センター・オブ・ジ・アース", "park": "SEA", "category": "アトラクション", "lat": 35.62665, "lng": 139.88525 },

  // --- 東京ディズニーシー：レストラン (54) ---
    { "name": "カフェ・ポルトフィーノ", "park": "SEA", "category": "レストラン", "lat": 35.62685, "lng": 139.88630 },
    { "name": "ゴンドリエ・スナック", "park": "SEA", "category": "レストラン", "lat": 35.62625, "lng": 139.88510 },
    { "name": "ザンビーニ・ブラザーズ・リストランテ", "park": "SEA", "category": "レストラン", "lat": 35.62725, "lng": 139.88685 },
    { "name": "マゼランズ", "park": "SEA", "category": "レストラン", "lat": 35.62620, "lng": 139.88585 },
    { "name": "マンマ・ビスコッティーズ・ベーカリー", "park": "SEA", "category": "レストラン", "lat": 35.62660, "lng": 139.88675 },
    { "name": "リストランテ・ディ・カナレット", "park": "SEA", "category": "レストラン", "lat": 35.62605, "lng": 139.88470 },
    { "name": "リフレスコス", "park": "SEA", "category": "レストラン", "lat": 35.62695, "lng": 139.88580 },
    { "name": "ポップコーンワゴン（ソアリン：ファンタスティック・フライト前）", "park": "SEA", "category": "レストラン", "lat": 35.62730, "lng": 139.88555 },
    { "name": "S.S.コロンビア・ダイニングルーム", "park": "SEA", "category": "レストラン", "lat": 35.62340, "lng": 139.88535 },
    { "name": "ケープコッド・クックオフ", "park": "SEA", "category": "レストラン", "lat": 35.62470, "lng": 139.88240 },
    { "name": "ケープコッド・クックオフ（ショーダイニングエリア）", "park": "SEA", "category": "レストラン", "lat": 35.62485, "lng": 139.88235 },
    { "name": "ケープコッド・コンフェクション", "park": "SEA", "category": "レストラン", "lat": 35.62485, "lng": 139.88270 },
    { "name": "ドックサイドダイナー", "park": "SEA", "category": "レストラン", "lat": 35.62425, "lng": 139.88510 },
    { "name": "テディ・ルーズヴェルト・ラウンジ", "park": "SEA", "category": "レストラン", "lat": 35.62345, "lng": 139.88540 },
    { "name": "テディ・ルーズヴェルト・ラウンジ テラス席", "park": "SEA", "category": "レストラン", "lat": 35.62350, "lng": 139.88560 },
    { "name": "デランシー・ケータリング", "park": "SEA", "category": "レストラン", "lat": 35.62465, "lng": 139.88460 },
    { "name": "ニューヨーク・デリ", "park": "SEA", "category": "レストラン", "lat": 35.62510, "lng": 139.88485 },
    { "name": "ハイタイ・トリート", "park": "SEA", "category": "レストラン", "lat": 35.62365, "lng": 139.88485 },
    { "name": "ハドソンリバー・ハーベスト", "park": "SEA", "category": "レストラン", "lat": 35.62445, "lng": 139.88530 },
    { "name": "パパダキス・フレッシュフルーツ", "park": "SEA", "category": "レストラン", "lat": 35.62530, "lng": 139.88520 },
    { "name": "リバティ・ランディング・ダイナー", "park": "SEA", "category": "レストラン", "lat": 35.62510, "lng": 139.88435 },
    { "name": "レストラン櫻", "park": "SEA", "category": "レストラン", "lat": 35.62475, "lng": 139.88540 },
    { "name": "ウォーターサイドテラス", "park": "SEA", "category": "レストラン", "lat": 35.62465, "lng": 139.88560 },
    { "name": "スパークリング・ジュビリーワゴン", "park": "SEA", "category": "レストラン", "lat": 35.62680, "lng": 139.88565 },
    { "name": "ポップコーンワゴン（ケープコッド・クックオフ前）", "park": "SEA", "category": "レストラン", "lat": 35.62505, "lng": 139.88275 },
    { "name": "ポップコーンワゴン（ドックサイドステージ前）", "park": "SEA", "category": "レストラン", "lat": 35.62425, "lng": 139.88525 },
    { "name": "ポップコーンワゴン（リバティ・ランディング・ダイナー前）", "park": "SEA", "category": "レストラン", "lat": 35.62495, "lng": 139.88420 },
    { "name": "シーサイドスナック", "park": "SEA", "category": "レストラン", "lat": 35.62435, "lng": 139.88085 },
    { "name": "ブリーズウェイ・バイツ", "park": "SEA", "category": "レストラン", "lat": 35.62560, "lng": 139.88175 },
    { "name": "ベイサイド・テイクアウト", "park": "SEA", "category": "レストラン", "lat": 35.62535, "lng": 139.88155 },
    { "name": "ホライズンベイ・レストラン", "park": "SEA", "category": "レストラン", "lat": 35.62525, "lng": 139.88210 },
    { "name": "ポップコーンワゴン（アクアトピア横）", "park": "SEA", "category": "レストラン", "lat": 35.62590, "lng": 139.88140 },
    { "name": "エクスペディション・イート", "park": "SEA", "category": "レストラン", "lat": 35.62845, "lng": 139.88045 },
    { "name": "トロピック・アルズ", "park": "SEA", "category": "レストラン", "lat": 35.62950, "lng": 139.88110 },
    { "name": "ミゲルズ・エルドラド・キャンティーナ", "park": "SEA", "category": "レストラン", "lat": 35.62860, "lng": 139.88190 },
    { "name": "ユカタン・ベースキャンプ・グリル", "park": "SEA", "category": "レストラン", "lat": 35.62945, "lng": 139.88185 },
    { "name": "ロストリバークックハウス", "park": "SEA", "category": "レストラン", "lat": 35.62890, "lng": 139.88050 },
    { "name": "ポップコーンワゴン（ハンガーステージ横）", "park": "SEA", "category": "レストラン", "lat": 35.62915, "lng": 139.87995 },
    { "name": "アレンデール・ロイヤルバンケット", "park": "SEA", "category": "レストラン", "lat": 35.62820, "lng": 139.87895 },
    { "name": "オーケンのオーケーフード", "park": "SEA", "category": "レストラン", "lat": 35.62865, "lng": 139.87875 },
    { "name": "スナグリーダックリング", "park": "SEA", "category": "レストラン", "lat": 35.62915, "lng": 139.87815 },
    { "name": "ルックアウト・クックアウト", "park": "SEA", "category": "レストラン", "lat": 35.62945, "lng": 139.87760 },
    { "name": "ポップコーンワゴン（フェアリー・ティンカーベルのビジーバギー前）", "park": "SEA", "category": "レストラン", "lat": 35.62965, "lng": 139.87855 },
    { "name": "オープンセサミ", "park": "SEA", "category": "レストラン", "lat": 35.63005, "lng": 139.88540 },
    { "name": "カスバ・フードコート", "park": "SEA", "category": "レストラン", "lat": 35.63050, "lng": 139.88645 },
    { "name": "サルタンズ・オアシス", "park": "SEA", "category": "レストラン", "lat": 35.62985, "lng": 139.88580 },
    { "name": "ポップコーンワゴン（アラビアンコースト前）", "park": "SEA", "category": "レストラン", "lat": 35.63015, "lng": 139.88525 },
    { "name": "セバスチャンのカリプソキッチン", "park": "SEA", "category": "レストラン", "lat": 35.62915, "lng": 139.88795 },
    { "name": "ポップコーンワゴン（コート・オブ・ワンダー横）", "park": "SEA", "category": "レストラン", "lat": 35.62935, "lng": 139.88665 },
    { "name": "ポップコーンワゴン（スカットルのスクーター前）", "park": "SEA", "category": "レストラン", "lat": 35.62895, "lng": 139.88755 },
    { "name": "ヴォルケイニア・レストラン", "park": "SEA", "category": "レストラン", "lat": 35.62725, "lng": 139.88635 },
    { "name": "ノーチラスギャレー", "park": "SEA", "category": "レストラン", "lat": 35.62685, "lng": 139.88570 },
    { "name": "リフレッシュメント・ステーション", "park": "SEA", "category": "レストラン", "lat": 35.62785, "lng": 139.88525 },

  // --- 東京ディズニーシー：ショー・グリーティング (13) ---
    { "name": "スカイ・フル・オブ・カラーズ", "park": "SEA", "category": "ショー", "lat": 35.62565, "lng": 139.88500 },
    { "name": "スパークリング・ジュビリー・セレブレーション", "park": "SEA", "category": "ショー", "lat": 35.62570, "lng": 139.88510 },
    { "name": "ビリーヴ！〜シー・オブ・ドリームス〜", "park": "SEA", "category": "ショー", "lat": 35.62575, "lng": 139.88505 },
    { "name": "ダッフィー＆フレンズのワンダフル・フレンドシップ", "park": "SEA", "category": "ショー", "lat": 35.62475, "lng": 139.88240 },
    { "name": "ダンス・ザ・グローブ！", "park": "SEA", "category": "ショー", "lat": 35.62535, "lng": 139.88125 },
    { "name": "ヴィレッジ・グリーティングプレイス", "park": "SEA", "category": "グリーティング", "lat": 35.62410, "lng": 139.88295 },
    { "name": "”サルードス・アミーゴ！”グリーティングドック", "park": "SEA", "category": "グリーティング", "lat": 35.62855, "lng": 139.88225 },
    { "name": "ミッキー＆フレンズ・グリーティングトレイル（ミッキー）", "park": "SEA", "category": "グリーティング", "lat": 35.62955, "lng": 139.88085 },
    { "name": "ミッキー＆フレンズ・グリーティングトレイル（ミニー）", "park": "SEA", "category": "グリーティング", "lat": 35.62945, "lng": 139.88075 },
    { "name": "ミッキー＆フレンズ・グリーティングトレイル（ドナルド）", "park": "SEA", "category": "グリーティング", "lat": 35.62935, "lng": 139.88065 },
    { "name": "ディズニーシー・プラザ（キャラクターグリーティング）", "park": "SEA", "category": "グリーティング", "lat": 35.62735, "lng": 139.88845 },
];
  

let selectedItem = null;
let currentPark = 'LAND';
let map, markers = [];

function createShareUrl() {
    const zones = document.querySelectorAll('.slot-dropzone');
    let planData = [];
    
    zones.forEach((zone, tIdx) => {
        zone.querySelectorAll('.schedule-item').forEach(item => {
            planData.push({ t: tIdx, n: item.innerText });
        });
    });

    if (planData.length === 0) return alert("予定が空です。");

    // 日本語を壊さないための最新の変換ルール
    const jsonStr = JSON.stringify(planData);
    const utf8Bytes = new TextEncoder().encode(jsonStr);
    const binString = String.fromCharCode(...utf8Bytes);
    const code = btoa(binString);

    const url = window.location.origin + window.location.pathname + "?p=" + encodeURIComponent(code);
    
    document.getElementById('share-url-display').value = url;
    document.getElementById('group-initial-menu').style.display = 'none';
    document.getElementById('group-result-display').style.display = 'block';
}
function applySharedData(code) {
    try {
        // デコード処理
        const binString = atob(decodeURIComponent(code));
        const uint8Array = Uint8Array.from(binString, c => c.charCodeAt(0));
        const jsonStr = new TextDecoder().decode(uint8Array);
        const planData = JSON.parse(jsonStr);

        const zones = document.querySelectorAll('.slot-dropzone');
        // 一旦空にする
        zones.forEach(z => z.innerHTML = "");

        planData.forEach(d => {
            const item = attractions.find(a => a.name === d.n);
            if (item && zones[d.t]) {
                addSchedule(zones[d.t], item, false);
            }
        });
        
        saveMyPlan();
        console.log("復元成功！");
    } catch (e) {
        console.error("復元失敗:", e);
        alert("データの復元に失敗しました。もう一度URLを発行し直してみてください。");
    }
}
window.onload = () => {
    // 1. まず土台を作る
    createTimeline();
    initMap();
    filterItems();
    
    const urlParams = new URLSearchParams(window.location.search);
    const p = urlParams.get('p');
    
    if (p) {
        // --- 共有URLから来た場合 ---
        console.log("共有データを復元します...");
        applySharedData(p);
        
        // 【ここが重要！】
        // 読み込みが終わったら、URLの「?p=...」の部分だけを消した状態にブラウザの履歴を書き換える
        // これにより、リロードしても「p=...」がない状態で読み込まれる
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
        
    } else {
        // --- 通常のアクセス（またはリロード時） ---
        console.log("自分の保存データを読み込みます...");
        loadMyPlan();
    }
};
// --- 5. 基本機能 (addSchedule, filterItems, etc.) ---
function addSchedule(zone, item, shouldSave = true) {
    const div = document.createElement('div');
    const pClass = (item.park === 'ランド' || item.park === 'LAND') ? 'bg-land' : 'bg-sea';
    div.className = `schedule-item ${pClass}`;
    div.innerText = item.name;

    // --- 削除時の処理 ---
    div.onclick = (e) => {
        e.stopPropagation(); // 親要素のクリック（追加イベント）が発動するのを防ぐ
        
        // 1. 画面から要素を消す
        div.remove();
        
        // 2. マップからピンを消す
        if (typeof removeMarker === 'function') {
            removeMarker(item.name);
        }
        
        // 3. 【重要】消した後の状態を即座に保存
        saveMyPlan(); 
        console.log(item.name + " を削除して保存しました");
    };

    zone.appendChild(div);

    // --- マップにピンを刺す処理 ---
    if (item.lat && item.lng && map) {
        const marker = L.marker([item.lat, item.lng]).addTo(map).bindPopup(item.name);
        markers.push({ name: item.name, marker: marker });
    }

    // --- 追加したことを保存 ---
    if (shouldSave) {
        saveMyPlan();
    }
}
function filterItems() {
    const searchTxt = document.getElementById('search-input').value.toLowerCase();
    // カテゴリー選択の値を取得（ここが重要！）
    const category = document.getElementById('category-select').value;
    const list = document.getElementById('item-list');
    list.innerHTML = "";

    const filtered = attractions.filter(i => {
        // 1. 検索ワード一致
        const matchSearch = i.name.toLowerCase().includes(searchTxt);
        
        // 2. パーク一致
        const p = i.park;
        const matchPark = (currentPark === 'ALL' || p === currentPark || (currentPark === 'LAND' && p === 'ランド') || (currentPark === 'SEA' && p === 'シー'));
        
        // 3. カテゴリー一致（ここを追加！）
        const matchCat = (category === 'ALL' || i.category === category);
        
        return matchSearch && matchPark && matchCat;
    });

    filtered.forEach(i => {
        const div = document.createElement('div');
        const pClass = (i.park === 'ランド' || i.park === 'LAND') ? 'land' : 'sea';
        div.className = `item ${pClass}`;
        div.innerText = i.name;
        
        div.onclick = () => {
            selectedItem = i;
            // 1. リストの見た目を変える
            document.querySelectorAll('.item').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');

            // 2. マップにピンを刺す（ここを追加！）
            if (i.lat && i.lng && map) {
                // 既存の「選択用ピン」があれば消す
                if (window.currentSelectionMarker) {
                    map.removeLayer(window.currentSelectionMarker);
                }
                
                // 新しいピンを立てて、そこへ移動する
                window.currentSelectionMarker = L.marker([i.lat, i.lng])
                    .addTo(map)
                    .bindPopup(`<b>${i.name}</b>`)
                    .openPopup();
                
                map.setView([i.lat, i.lng], 17); // ズームして場所を表示
            }
        };
        list.appendChild(div);
    });
}
// --- 以下、既存のcreateTimeline, saveMyPlan, loadMyPlan, initMap, switchTab等はそのまま ---
function createTimeline() {
    const tl = document.getElementById('timeline-container');
    tl.innerHTML = "";
    for(let h=8; h<=21; h++) {
        ["00", "30"].forEach(m => {
            const slot = document.createElement('div');
            slot.className = 'time-slot';
            slot.innerHTML = `<div class="time-label">${h}:${m}</div><div class="slot-dropzone"></div>`;
            slot.onclick = () => { if(selectedItem) { addSchedule(slot.querySelector('.slot-dropzone'), selectedItem); selectedItem = null; } };
            tl.appendChild(slot);
        });
    }
}
function saveMyPlan() {
    const data = [];
    // 全てのタイムスロット（dropzone）を順番にチェック
    document.querySelectorAll('.slot-dropzone').forEach((zone, tIdx) => {
        // そのスロットの中にあるアイテムをすべて取得
        const items = zone.querySelectorAll('.schedule-item');
        items.forEach(item => {
            data.push({
                t: tIdx,       // 何番目の時間帯か
                n: item.innerText // 施設名
            });
        });
    });

    // 以前のセーブデータを完全に上書きする
    localStorage.setItem('disney_plan_v3', JSON.stringify(data));
    console.log("現在の状態をセーブしました", data);
}
function loadMyPlan() {
    const saved = localStorage.getItem('disney_plan_v3');
    if(saved) applyPlanDataDirect(JSON.parse(saved));
}
function applyPlanDataDirect(data) {
    const zones = document.querySelectorAll('.slot-dropzone');
    data.forEach(d => {
        const item = attractions.find(a => a.name === d.n);
        if(item && zones[d.t]) addSchedule(zones[d.t], item, false);
    });
}
function setPark(p) {
    currentPark = p;
    
    // 全ボタンからactiveクラスを除去
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // クリックされたボタンにactiveクラスを付与（CSSで色が変わるようにします）
    const targetBtn = document.getElementById('btn-' + p.toLowerCase());
    if (targetBtn) {
        targetBtn.classList.add('active');
    }
    
    filterItems();
}
function initMap() {
    if (map) return;
    // 座標を 35.6330, 139.8820 (パーク中央) に変更
    map = L.map('map', { tap: false }).setView([35.6330, 139.8820], 16); 
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);
}
function openGroupModal() { document.getElementById('group-modal').style.display = 'block'; }
function closeGroupModal() { document.getElementById('group-modal').style.display = 'none'; }
function copyUrl() { const t = document.getElementById('share-url-display'); t.select(); document.execCommand('copy'); alert('コピーしました'); }
function switchTab(t) {
    document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
    document.getElementById(t + '-view').classList.add('active');

    if (t === 'map') {
        setTimeout(() => {
            map.invalidateSize(); // 地図のサイズを今の画面にフィットさせる
            // 全てのピンが画面に収まるように自動調整
            if (markers.length > 0) {
                const group = new L.featureGroup(markers.map(m => m.marker));
                map.fitBounds(group.getBounds().pad(0.1));
            }
        }, 200);
    }
}
const disneyIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],    // アイコンのサイズ
    iconAnchor: [12, 41],  // 重要：[左右の真ん中, 下端] を座標に合わせる
    popupAnchor: [1, -34]
});
