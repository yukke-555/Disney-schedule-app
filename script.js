const attractions = [
  { "name": "オムニバス", "park": "LAND", "category": "アトラクション", "lat": 35.6322, "lng": 139.8814 },
  { "name": "ペニーアーケード", "park": "LAND", "category": "アトラクション", "lat": 35.6322, "lng": 139.8816 },
  { "name": "ウエスタンリバー鉄道", "park": "LAND", "category": "アトラクション", "lat": 35.6311, "lng": 139.8806 },
  { "name": "カリブの海賊", "park": "LAND", "category": "アトラクション", "lat": 35.6314, "lng": 139.8814 },
  { "name": "ジャングルクルーズ", "park": "LAND", "category": "アトラクション", "lat": 35.631, "lng": 139.8805 },
  { "name": "スイスファミリーツリーハウス", "park": "LAND", "category": "アトラクション", "lat": 35.6306, "lng": 139.8798 },
  { "name": "魅惑のチキルーム", "park": "LAND", "category": "アトラクション", "lat": 35.6302, "lng": 139.8804 },
  { "name": "ウエスタンランド・シューティングギャラリー", "park": "LAND", "category": "アトラクション", "lat": 35.6304, "lng": 139.8778 },
  { "name": "カントリーベア・シアター", "park": "LAND", "category": "アトラクション", "lat": 35.6309, "lng": 139.8779 },
  { "name": "蒸気船マークトウェイン号", "park": "LAND", "category": "アトラクション", "lat": 35.6311, "lng": 139.8763 },
  { "name": "トムソーヤ島いかだ", "park": "LAND", "category": "アトラクション", "lat": 35.6316, "lng": 139.8757 },
  { "name": "ビッグサンダー・マウンテン", "park": "LAND", "category": "アトラクション", "lat": 35.6323, "lng": 139.8765 },
  { "name": "スプラッシュ・マウンテン", "park": "LAND", "category": "アトラクション", "lat": 35.634, "lng": 139.8764 },
  { "name": "ビーバーブラザーズのカヌー探険", "park": "LAND", "category": "アトラクション", "lat": 35.6344, "lng": 139.8757 },
  { "name": "アリスのティーパーティー", "park": "LAND", "category": "アトラクション", "lat": 35.6324, "lng": 139.8789 },
  { "name": "イッツ・ア・スモールワールド", "park": "LAND", "category": "アトラクション", "lat": 35.6328, "lng": 139.879 },
  { "name": "キャッスルカルーセル", "park": "LAND", "category": "アトラクション", "lat": 35.632, "lng": 139.879 },
  { "name": "白雪姫と七人のこびと", "park": "LAND", "category": "アトラクション", "lat": 35.6318, "lng": 139.8793 },
  { "name": "空飛ぶダンボ", "park": "LAND", "category": "アトラクション", "lat": 35.632, "lng": 139.8797 },
  { "name": "美女と野獣“魔法のものがたり”", "park": "LAND", "category": "アトラクション", "lat": 35.6315, "lng": 139.8817 },
  { "name": "ピノキオの冒険旅行", "park": "LAND", "category": "アトラクション", "lat": 35.6318, "lng": 139.8795 },
  { "name": "ピーターパン空の旅", "park": "LAND", "category": "アトラクション", "lat": 35.6317, "lng": 139.8799 },
  { "name": "プーさんのハニーハント", "park": "LAND", "category": "アトラクション", "lat": 35.6322, "lng": 139.881 },
  { "name": "ホーンテッドマンション", "park": "LAND", "category": "アトラクション", "lat": 35.6325, "lng": 139.8784 },
  { "name": "ミッキーのフィルハーマジック", "park": "LAND", "category": "アトラクション", "lat": 35.6322, "lng": 139.8791 },
  { "name": "グーフィーのペイント＆プレイハウス", "park": "LAND", "category": "アトラクション", "lat": 35.634, "lng": 139.8794 },
  { "name": "チップとデールのツリーハウス", "park": "LAND", "category": "アトラクション", "lat": 35.6343, "lng": 139.8792 },
  { "name": "ドナルドのボート", "park": "LAND", "category": "アトラクション", "lat": 35.6343, "lng": 139.8796 },
  { "name": "ガジェットのゴーコースター", "park": "LAND", "category": "アトラクション", "lat": 35.6345, "lng": 139.8799 },
  { "name": "ロジャーラビットのカートゥーンスピン", "park": "LAND", "category": "アトラクション", "lat": 35.6341, "lng": 139.8802 },
  { "name": "スター・ツアーズ", "park": "LAND", "category": "アトラクション", "lat": 35.6323, "lng": 139.8824 },
  { "name": "スティッチ・エンカウンター", "park": "LAND", "category": "アトラクション", "lat": 35.6326, "lng": 139.8821 },
  { "name": "スペース・マウンテン", "park": "LAND", "category": "アトラクション", "lat": 35.6323, "lng": 139.8833 },
  { "name": "バズ・ライトイヤー", "park": "LAND", "category": "アトラクション", "lat": 35.633, "lng": 139.8823 },
  { "name": "モンスターズ・インク", "park": "LAND", "category": "アトラクション", "lat": 35.6333, "lng": 139.8829 },
  { "name": "ベイマックスのハッピーライド", "park": "LAND", "category": "アトラクション", "lat": 35.6322, "lng": 139.882 },
  { "name": "オムニバス", "park": "LAND", "category": "アトラクション", "lat": 35.6329, "lng": 139.8806 },
  { "name": "ペニーアーケード", "park": "LAND", "category": "アトラクション", "lat": 35.6326, "lng": 139.8809 },
  { "name": "カリブの海賊", "park": "LAND", "category": "アトラクション", "lat": 35.6322, "lng": 139.8817 },
  { "name": "ジャングルクルーズ", "park": "LAND", "category": "アトラクション", "lat": 35.6329, "lng": 139.8821 },
  { "name": "ウエスタンリバー鉄道", "park": "LAND", "category": "アトラクション", "lat": 35.6331, "lng": 139.8823 },
  { "name": "スイスファミリーツリーハウス", "park": "LAND", "category": "アトラクション", "lat": 35.6325, "lng": 139.8825 },
  { "name": "魅惑のチキルーム", "park": "LAND", "category": "アトラクション", "lat": 35.632, "lng": 139.8827 },
  { "name": "シューティングギャラリー", "park": "LAND", "category": "アトラクション", "lat": 35.6323, "lng": 139.8837 },
  { "name": "カントリーベア・シアター", "park": "LAND", "category": "アトラクション", "lat": 35.6321, "lng": 139.8841 },
  { "name": "蒸気船マークトウェイン号", "park": "LAND", "category": "アトラクション", "lat": 35.6315, "lng": 139.8846 },
  { "name": "トムソーヤ島いかだ", "park": "LAND", "category": "アトラクション", "lat": 35.631, "lng": 139.885 },
  { "name": "ビッグサンダーマウンテン", "park": "LAND", "category": "アトラクション", "lat": 35.6317, "lng": 139.8856 },
  { "name": "スプラッシュマウンテン", "park": "LAND", "category": "アトラクション", "lat": 35.6302, "lng": 139.8864 },
  { "name": "カヌー探険", "park": "LAND", "category": "アトラクション", "lat": 35.6298, "lng": 139.8868 },
  { "name": "アイスクリームコーン", "park": "LAND", "category": "レストラン", "lat": 35.6322, "lng": 139.8811 },
  { "name": "イーストサイド・カフェ", "park": "LAND", "category": "レストラン", "lat": 35.6325, "lng": 139.881 },
  { "name": "グレートアメリカン・ワッフルカンパニー", "park": "LAND", "category": "レストラン", "lat": 35.6325, "lng": 139.8808 },
  { "name": "スウィートハート・カフェ", "park": "LAND", "category": "レストラン", "lat": 35.6325, "lng": 139.8813 },
  { "name": "センターストリート・コーヒーハウス", "park": "LAND", "category": "レストラン", "lat": 35.6328, "lng": 139.8809 },
  { "name": "リフレッシュメントコーナー", "park": "LAND", "category": "レストラン", "lat": 35.6322, "lng": 139.8813 },
  { "name": "ロイヤルストリート・ベリエ", "park": "LAND", "category": "レストラン", "lat": 35.632, "lng": 139.8815 },
  { "name": "カフェ・オーリンズ", "park": "LAND", "category": "レストラン", "lat": 35.6319, "lng": 139.8814 },
  { "name": "クリスタルパレス・レストラン", "park": "LAND", "category": "レストラン", "lat": 35.632, "lng": 139.8821 },
  { "name": "ザ・ガゼーボ", "park": "LAND", "category": "レストラン", "lat": 35.6318, "lng": 139.8821 },
  { "name": "スキッパーズ・ギャレー", "park": "LAND", "category": "レストラン", "lat": 35.6312, "lng": 139.881 },
  { "name": "スクウィーザーズ・トロピカル・ジュースバー", "park": "LAND", "category": "レストラン", "lat": 35.631, "lng": 139.8808 },
  { "name": "チャイナボイジャー", "park": "LAND", "category": "レストラン", "lat": 35.6316, "lng": 139.8813 },
  { "name": "パークサイドワゴン", "park": "LAND", "category": "レストラン", "lat": 35.6316, "lng": 139.8824 },
  { "name": "ブルーバイユー・レストラン", "park": "LAND", "category": "レストラン", "lat": 35.6315, "lng": 139.8817 },
  { "name": "ボイラールーム・バイツ", "park": "LAND", "category": "レストラン", "lat": 35.6316, "lng": 139.8814 },
  { "name": "ポリネシアンテラス・レストラン", "park": "LAND", "category": "レストラン", "lat": 35.6306, "lng": 139.881 },
  { "name": "キャンプ・ウッドチャック・キッチン", "park": "LAND", "category": "レストラン", "lat": 35.6317, "lng": 139.8845 },
  { "name": "カウボーイ・クックハウス", "park": "LAND", "category": "レストラン", "lat": 35.632, "lng": 139.8839 },
  { "name": "ザ・ダイヤモンドホースシュー", "park": "LAND", "category": "レストラン", "lat": 35.6319, "lng": 139.8834 },
  { "name": "ハングリーベア・レストラン", "park": "LAND", "category": "レストラン", "lat": 35.6319, "lng": 139.8841 },
  { "name": "プラザパビリオン・レストラン", "park": "LAND", "category": "レストラン", "lat": 35.6322, "lng": 139.883 },
  { "name": "ペコスビル・カフェ", "park": "LAND", "category": "レストラン", "lat": 35.6322, "lng": 139.8837 },
  { "name": "キャプテンフックス・ギャレー", "park": "LAND", "category": "レストラン", "lat": 35.6323, "lng": 139.8798 },
  { "name": "クイーン・オブ・ハートのバンケットホール", "park": "LAND", "category": "レストラン", "lat": 35.6328, "lng": 139.8789 },
  { "name": "クレオズ", "park": "LAND", "category": "レストラン", "lat": 35.632, "lng": 139.8795 },
  { "name": "トルバドールタバン", "park": "LAND", "category": "レストラン", "lat": 35.6322, "lng": 139.8797 },
  { "name": "ビレッジペイストリー", "park": "LAND", "category": "レストラン", "lat": 35.632, "lng": 139.8804 },
  { "name": "マジカルマーケット", "park": "LAND", "category": "レストラン", "lat": 35.632, "lng": 139.881 },
  { "name": "ラ・タベルヌ・ド・ガストン", "park": "LAND", "category": "レストラン", "lat": 35.6325, "lng": 139.8819 },
  { "name": "ル・フウズ", "park": "LAND", "category": "レストラン", "lat": 35.6324, "lng": 139.8817 },
  { "name": "グランマ・サラのキッチン", "park": "LAND", "category": "レストラン", "lat": 35.6338, "lng": 139.8767 },
  { "name": "ラケッティのラクーンサルーン", "park": "LAND", "category": "レストラン", "lat": 35.6343, "lng": 139.8764 },
  { "name": "ディンギードリンク", "park": "LAND", "category": "レストラン", "lat": 35.6343, "lng": 139.8795 },
  { "name": "トゥーントーン・トリート", "park": "LAND", "category": "レストラン", "lat": 35.6343, "lng": 139.8799 },
  { "name": "ヒューイ・デューイ・ルーイのグッドタイム・カフェ", "park": "LAND", "category": "レストラン", "lat": 35.6343, "lng": 139.88 },
  { "name": "ミッキーのトレーラー", "park": "LAND", "category": "レストラン", "lat": 35.634, "lng": 139.8796 },
  { "name": "ソフトランディング", "park": "LAND", "category": "レストラン", "lat": 35.6331, "lng": 139.8824 },
  { "name": "トゥモローランド・テラス", "park": "LAND", "category": "レストラン", "lat": 35.6328, "lng": 139.8823 },
  { "name": "パン・ギャラクティック・ピザ・ポート", "park": "LAND", "category": "レストラン", "lat": 35.6331, "lng": 139.8828 },
  { "name": "ビッグポップ", "park": "LAND", "category": "レストラン", "lat": 35.6322, "lng": 139.8825 },
  { "name": "プラズマ・レイズ・ダイナー", "park": "LAND", "category": "レストラン", "lat": 35.6326, "lng": 139.8823 },
  { "name": "ポッピングポッド", "park": "LAND", "category": "レストラン", "lat": 35.6326, "lng": 139.8824 },
  { "name": "キャリッジハウス・リフレッシュメント", "park": "LAND", "category": "レストラン", "lat": 35.6338, "lng": 139.8833 },
  { "name": "ジャンボリミッキー！レッツ・ダンス！", "park": "LAND", "category": "ショー", "lat": 35.6321, "lng": 139.8814 },
  { "name": "ミッキーのマジカルミュージックワールド", "park": "LAND", "category": "ショー", "lat": 35.6328, "lng": 139.8822 },
  { "name": "クラブマウスビート", "park": "LAND", "category": "ショー", "lat": 35.6334, "lng": 139.8825 },
  { "name": "ディズニー・ハーモニー・イン・カラー", "park": "LAND", "category": "ショー", "lat": 35.632, "lng": 139.881 },
  { "name": "東京ディズニーランド・エレクトリカルパレード", "park": "LAND", "category": "ショー", "lat": 35.632, "lng": 139.881 },
  { "name": "ザ・ヴィランズ・ハロウィーン", "park": "LAND", "category": "ショー", "lat": 35.632, "lng": 139.881 },
  { "name": "ナイトハイ・ハロウィーン", "park": "LAND", "category": "ショー", "lat": 35.632, "lng": 139.881 },
  { "name": "スカイ・フル・オブ・カラーズ", "park": "LAND", "category": "ショー", "lat": 35.632, "lng": 139.881 },
  { "name": "メインストリート・デイリー", "park": "LAND", "category": "その他", "lat": 35.6322, "lng": 139.881 },
  { "name": "シルエットスタジオ", "park": "LAND", "category": "その他", "lat": 35.6324, "lng": 139.8808 },
  { "name": "ビビディ・バビディ・ブティック", "park": "LAND", "category": "その他", "lat": 35.6328, "lng": 139.8805 },
  { "name": "マジックショップ", "park": "LAND", "category": "その他", "lat": 35.6323, "lng": 139.8811 },
  { "name": "ラ・プティート・パフュームリー", "park": "LAND", "category": "その他", "lat": 35.6318, "lng": 139.8815 },
  { "name": "フロンティア・ウッドクラフト", "park": "LAND", "category": "その他", "lat": 35.632, "lng": 139.8837 },
  { "name": "ウッドチャック・グリーティングトレイル", "park": "LAND", "category": "その他", "lat": 35.6318, "lng": 139.8847 },
  { "name": "プラザパビリオン・バンドスタンド前", "park": "LAND", "category": "その他", "lat": 35.6322, "lng": 139.8828 },
  { "name": "ミッキーの家とミート・ミッキー", "park": "LAND", "category": "その他", "lat": 35.634, "lng": 139.8797 },
  { "name": "ミニーのスタイルスタジオ", "park": "LAND", "category": "その他", "lat": 35.634, "lng": 139.8791 },
  { "name": "ソアリン", "park": "SEA", "category": "アトラクション", "lat": 35.6268, "lng": 139.8856 },
  { "name": "トイ・ストーリー・マニア！", "park": "SEA", "category": "アトラクション", "lat": 35.6248, "lng": 139.8851 },
  { "name": "タワー・オブ・テラー", "park": "SEA", "category": "アトラクション", "lat": 35.6258, "lng": 139.8854 },
  { "name": "タートル・トーク", "park": "SEA", "category": "アトラクション", "lat": 35.6253, "lng": 139.8848 },
  { "name": "エレクトリックレールウェイ(W)", "park": "SEA", "category": "アトラクション", "lat": 35.625, "lng": 139.8845 },
  { "name": "トランジットスチーマーライン(W)", "park": "SEA", "category": "アトラクション", "lat": 35.6255, "lng": 139.884 },
  { "name": "ヴェネツィアン・ゴンドラ", "park": "SEA", "category": "アトラクション", "lat": 35.6262, "lng": 139.8835 },
  { "name": "アクアトピア", "park": "SEA", "category": "アトラクション", "lat": 35.6265, "lng": 139.881 },
  { "name": "ニモ＆フレンズ・シーライダー", "park": "SEA", "category": "アトラクション", "lat": 35.626, "lng": 139.8812 },
  { "name": "エレクトリックレールウェイ(P)", "park": "SEA", "category": "アトラクション", "lat": 35.6268, "lng": 139.8815 },
  { "name": "トランジットスチーマーライン(P)", "park": "SEA", "category": "アトラクション", "lat": 35.627, "lng": 139.8818 },
  { "name": "インディ・ジョーンズ", "park": "SEA", "category": "アトラクション", "lat": 35.6275, "lng": 139.8805 },
  { "name": "レイジングスピリッツ", "park": "SEA", "category": "アトラクション", "lat": 35.6278, "lng": 139.8808 },
  { "name": "トランジットスチーマーライン(L)", "park": "SEA", "category": "アトラクション", "lat": 35.628, "lng": 139.8812 },
  { "name": "キャラバンカルーセル", "park": "SEA", "category": "アトラクション", "lat": 35.6272, "lng": 139.8825 },
  { "name": "ジャスミンのフライングカーペット", "park": "SEA", "category": "アトラクション", "lat": 35.6275, "lng": 139.8828 },
  { "name": "シンドバッド・ストーリーブック", "park": "SEA", "category": "アトラクション", "lat": 35.6278, "lng": 139.8832 },
  { "name": "マジックランプシアター", "park": "SEA", "category": "アトラクション", "lat": 35.6281, "lng": 139.8835 },
  { "name": "アリエルのプレイグラウンド", "park": "SEA", "category": "アトラクション", "lat": 35.624, "lng": 139.8815 },
  { "name": "ジャンピン・ジェリーフィッシュ", "park": "SEA", "category": "アトラクション", "lat": 35.6242, "lng": 139.8817 },
  { "name": "スカットルのスクーター", "park": "SEA", "category": "アトラクション", "lat": 35.6244, "lng": 139.8819 },
  { "name": "フランダーのコースター", "park": "SEA", "category": "アトラクション", "lat": 35.6246, "lng": 139.8821 },
  { "name": "ブローフィッシュ・バルーンレース", "park": "SEA", "category": "アトラクション", "lat": 35.6248, "lng": 139.8823 },
  { "name": "マーメイドラグーンシアター", "park": "SEA", "category": "アトラクション", "lat": 35.625, "lng": 139.8825 },
  { "name": "ワールプール", "park": "SEA", "category": "アトラクション", "lat": 35.6252, "lng": 139.8827 },
  { "name": "センター・オブ・ジ・アース", "park": "SEA", "category": "アトラクション", "lat": 35.6265, "lng": 139.8838 },
  { "name": "海底2万マイル", "park": "SEA", "category": "アトラクション", "lat": 35.6268, "lng": 139.8841 },
  { "name": "ピーターパンのネバーランドアドベンチャー", "park": "SEA", "category": "アトラクション", "lat": 35.629, "lng": 139.8753 },
  { "name": "フェアリー・ティンカーベルのビジーバギー", "park": "SEA", "category": "アトラクション", "lat": 35.6293, "lng": 139.876 },
  { "name": "アナとエルサのフローズンジャーニー", "park": "SEA", "category": "アトラクション", "lat": 35.6275, "lng": 139.8755 },
  { "name": "ラプンツェルのランタンフェスティバル", "park": "SEA", "category": "アトラクション", "lat": 35.6285, "lng": 139.8768 },
  { "name": "カフェ・ポルトフィーノ", "park": "SEA", "category": "レストラン", "lat": 35.6265, "lng": 139.8858 },
  { "name": "ザンビーニ・ブラザーズ・リストランテ", "park": "SEA", "category": "レストラン", "lat": 35.6265, "lng": 139.8862 },
  { "name": "マゼランズ", "park": "SEA", "category": "レストラン", "lat": 35.626, "lng": 139.885 },
  { "name": "リストランテ・ディ・カナレット", "park": "SEA", "category": "レストラン", "lat": 35.626, "lng": 139.8832 },
  { "name": "マゼランズ・ラウンジ", "park": "SEA", "category": "レストラン", "lat": 35.626, "lng": 139.8851 },
  { "name": "マンマ・ビスコッティーズ・ベーカリー", "park": "SEA", "category": "レストラン", "lat": 35.6268, "lng": 139.886 },
  { "name": "リフレッシュメント・ステーション(M)", "park": "SEA", "category": "レストラン", "lat": 35.6268, "lng": 139.8855 },
  { "name": "S.S.コロンビア・ダイニングルーム", "park": "SEA", "category": "レストラン", "lat": 35.6248, "lng": 139.8845 },
  { "name": "セイリングデイ・ブッフェ", "park": "SEA", "category": "レストラン", "lat": 35.6245, "lng": 139.8848 },
  { "name": "レストラン櫻", "park": "SEA", "category": "レストラン", "lat": 35.6245, "lng": 139.8842 },
  { "name": "テディ・ルーズヴェルト・ラウンジ", "park": "SEA", "category": "レストラン", "lat": 35.6248, "lng": 139.8846 },
  { "name": "デランシー・ケータリング", "park": "SEA", "category": "レストラン", "lat": 35.625, "lng": 139.8848 },
  { "name": "ニューヨーク・デリ", "park": "SEA", "category": "レストラン", "lat": 35.625, "lng": 139.8842 },
  { "name": "バーナクル・ビルズ", "park": "SEA", "category": "レストラン", "lat": 35.6245, "lng": 139.8845 },
  { "name": "ハイタイド・トリート", "park": "SEA", "category": "レストラン", "lat": 35.6255, "lng": 139.8854 },
  { "name": "ハドソンリバー・ハーベスト", "park": "SEA", "category": "レストラン", "lat": 35.625, "lng": 139.8845 },
  { "name": "パパダキス・フレッシュフルーツ", "park": "SEA", "category": "レストラン", "lat": 35.6252, "lng": 139.8842 },
  { "name": "リバティ・ランディング・ダイナー", "park": "SEA", "category": "レストラン", "lat": 35.6245, "lng": 139.8842 },
  { "name": "シーサイドスナック", "park": "SEA", "category": "レストラン", "lat": 35.6258, "lng": 139.881 },
  { "name": "ベイサイド・テイクアウト", "park": "SEA", "category": "レストラン", "lat": 35.626, "lng": 139.881 },
  { "name": "ホライズンベイ・レストラン", "park": "SEA", "category": "レストラン", "lat": 35.6258, "lng": 139.8817 },
  { "name": "ポップコーンワゴン(アクアトピア横)", "park": "SEA", "category": "レストラン", "lat": 35.6265, "lng": 139.8795 },
  { "name": "エクスペディション・イート", "park": "SEA", "category": "レストラン", "lat": 35.6265, "lng": 139.8814 },
  { "name": "トロピック・アルズ", "park": "SEA", "category": "レストラン", "lat": 35.6273, "lng": 139.8821 },
  { "name": "ミゲルズ・エルドラド・キャンティーナ", "park": "SEA", "category": "レストラン", "lat": 35.6263, "lng": 139.8822 },
  { "name": "ユカタン・ベースキャンプ・グリル", "park": "SEA", "category": "レストラン", "lat": 35.6273, "lng": 139.8812 },
  { "name": "ロストリバークックハウス", "park": "SEA", "category": "レストラン", "lat": 35.6275, "lng": 139.8812 },
  { "name": "ポップコーンワゴン(ハンガーステージ横)", "park": "SEA", "category": "レストラン", "lat": 35.6261, "lng": 139.8821 },
  { "name": "アレンデール・ロイヤルバンケット", "park": "SEA", "category": "レストラン", "lat": 35.6273, "lng": 139.8755 },
  { "name": "オーケンのオーケーフード", "park": "SEA", "category": "レストラン", "lat": 35.6277, "lng": 139.8763 },
  { "name": "スナグリーダックリング", "park": "SEA", "category": "レストラン", "lat": 35.6288, "lng": 139.8767 },
  { "name": "ルックアウト・クックアウト", "park": "SEA", "category": "レストラン", "lat": 35.6296, "lng": 139.8752 },
  { "name": "ポップコーンワゴン(ティンカーベル横)", "park": "SEA", "category": "レストラン", "lat": 35.6294, "lng": 139.8764 },
  { "name": "オープンセサミ", "park": "SEA", "category": "レストラン", "lat": 35.6268, "lng": 139.8811 },
  { "name": "カスバ・フードコート", "park": "SEA", "category": "レストラン", "lat": 35.6274, "lng": 139.883 },
  { "name": "サルタンズ・オアシス", "park": "SEA", "category": "レストラン", "lat": 35.6263, "lng": 139.8817 },
  { "name": "ポップコーンワゴン(アラビアンコースト前)", "park": "SEA", "category": "レストラン", "lat": 35.6271, "lng": 139.8816 },
  { "name": "セバスチャンのカリプソキッチン", "park": "SEA", "category": "レストラン", "lat": 35.6238, "lng": 139.8805 },
  { "name": "ポップコーンワゴン(コート・オヴ・ワンダー横)", "park": "SEA", "category": "レストラン", "lat": 35.6253, "lng": 139.8824 },
  { "name": "ポップコーン(スカットルのスクーター前)", "park": "SEA", "category": "レストラン", "lat": 35.6247, "lng": 139.8817 },
  { "name": "ヴォケイニア・レストラン", "park": "SEA", "category": "レストラン", "lat": 35.6264, "lng": 139.8841 },
  { "name": "ノーチラスギャレー", "park": "SEA", "category": "レストラン", "lat": 35.6271, "lng": 139.8845 },
  { "name": "リフレッシュメント・ステーション", "park": "SEA", "category": "レストラン", "lat": 35.6258, "lng": 139.8837 },
  { "name": "スカイ・フル・オブ・カラーズ", "park": "SEA", "category": "ショー", "lat": 35.625, "lng": 139.885 },
  { "name": "スパークリング・ジュビリー", "park": "SEA", "category": "ショー", "lat": 35.6262, "lng": 139.886 },
  { "name": "ビリーヴ！", "park": "SEA", "category": "ショー", "lat": 35.6262, "lng": 139.886 },
  { "name": "ダッフィー＆フレンズのワンダフル・フレンドシップ", "park": "SEA", "category": "ショー", "lat": 35.6245, "lng": 139.8851 },
  { "name": "ジャンボリミッキー！レッツ・ダンス！(S)", "park": "SEA", "category": "ショー", "lat": 35.6246, "lng": 139.8875 },
  { "name": "ヴィレッジ・グリーティングプレイス", "park": "SEA", "category": "その他", "lat": 35.6243, "lng": 139.8858 },
  { "name": "サルードス・アミーゴス！グリーティングドック", "park": "SEA", "category": "その他", "lat": 35.6261, "lng": 139.8825 },
  { "name": "ミッキー＆フレンズ・グリーティングトレイル", "park": "SEA", "category": "その他", "lat": 35.6288, "lng": 139.8805 }
];

let selectedItem = null;
let currentPark = 'ALL';
let map, markers = [];

function init() {
    filterItems();
    createTimeline();
    initMap();
}

// 無料の航空写真マップ（Esri World Imagery）の初期化
function initMap() {
    // 視点を少し低く（ズーム16）して建物を見やすく設定
    map = L.map('map').setView([35.632, 139.881], 16);

    // 航空写真タイルを追加
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EBP, and the GIS User Community'
    }).addTo(map);

    // 建物名などがなくて不安な場合は、さらに「境界線とラベル」を重ねることも可能です
    // 不要であれば下の L.tileLayer の部分は削除してください
    L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        opacity: 0.7 // ラベルを少し薄く表示
    }).addTo(map);
}

// パーク切り替え・リストフィルタリングなどの関数は前回と同様です
function setPark(park) {
    currentPark = park;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const idMap = { 'ALL': 'btn-all', 'LAND': 'btn-land', 'SEA': 'btn-sea' };
    document.getElementById(idMap[park]).classList.add('active');
    filterItems();
}

function filterItems() {
    const searchTxt = document.getElementById('search-input').value.toLowerCase();
    const category = document.getElementById('category-select').value;
    const list = document.getElementById('item-list');
    list.innerHTML = "";

    const filtered = attractions.filter(item => {
        const matchSearch = item.name.toLowerCase().includes(searchTxt);
        const matchPark = (currentPark === 'ALL' || item.park === currentPark || (currentPark === 'LAND' && item.park === 'ランド') || (currentPark === 'SEA' && item.park === 'シー'));
        const matchCat = (category === 'ALL' || item.category === category);
        return matchSearch && matchPark && matchCat;
    });

    filtered.forEach(item => {
        const div = document.createElement('div');
        const pClass = (item.park === 'LAND' || item.park === 'ランド') ? 'land' : 'sea';
        div.className = `item ${pClass}`;
        div.innerText = item.name;
        div.onclick = () => {
            document.querySelectorAll('.item').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            selectedItem = item;
        };
        list.appendChild(div);
    });
}

function createTimeline() {
    const timeline = document.getElementById('timeline-container');
    for (let h = 8; h <= 21; h++) {
        ["00", "30"].forEach(m => {
            const slot = document.createElement('div');
            slot.className = 'time-slot';
            slot.innerHTML = `<div class="time-label">${h}:${m}</div><div class="slot-dropzone"></div>`;
            slot.onclick = () => {
                if (selectedItem) {
                    addSchedule(slot.querySelector('.slot-dropzone'), selectedItem);
                    selectedItem = null;
                    document.querySelectorAll('.item').forEach(el => el.classList.remove('selected'));
                }
            };
            timeline.appendChild(slot);
        });
    }
}

function addSchedule(zone, item) {
    const div = document.createElement('div');
    const colorClass = (item.park === 'LAND' || item.park === 'ランド') ? 'bg-land' : 'bg-sea';
    div.className = `schedule-item ${colorClass}`;
    div.innerText = item.name;
    div.onclick = (e) => { e.stopPropagation(); div.remove(); removeMarker(item.name); };
    zone.appendChild(div);

    // ピンを追加（航空写真の上で見やすいようデフォルトのピンを使用）
    if (item.lat && item.lng) {
        const marker = L.marker([item.lat, item.lng]).addTo(map).bindPopup(item.name).openPopup();
        markers.push({ name: item.name, marker: marker });
    }
}

function removeMarker(name) {
    const index = markers.findIndex(m => m.name === name);
    if (index > -1) {
        map.removeLayer(markers[index].marker);
        markers.splice(index, 1);
    }
}

function switchTab(tab) {
    document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    
    if (tab === 'list') {
        document.getElementById('list-view').classList.add('active');
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
    } else {
        document.getElementById('map-view').classList.add('active');
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        // タブを切り替えた瞬間に地図の表示をリセット（これがないと真っ暗になることがあります）
        setTimeout(() => { map.invalidateSize(); }, 200);
    }
}

document.addEventListener('DOMContentLoaded', init);