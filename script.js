const attractions = [
    // --- ランド：アトラクション ---
    { name: "オムニバス", lat: 35.6322, lng: 139.8814 },
    { name: "ベニーアーケード", lat: 35.6322, lng: 139.8816 },
    { name: "ウエスタンリバー鉄道", lat: 35.6311, lng: 139.8806 },
    { name: "カリブの海賊", lat: 35.6314, lng: 139.8814 },
    { name: "ジャングルクルーズ", lat: 35.631, lng: 139.8805 },
    { name: "スイスファミリーツリーハウス", lat: 35.6306, lng: 139.8798 },
    { name: "魅惑のチキルーム", lat: 35.6304, lng: 139.8804 },
    { name: "ウエスタンランドシューティングギャラリー", lat: 35.6313, lng: 139.8788 },
    { name: "蒸気船マークトウェイン号", lat: 35.6315, lng: 139.8785 },
    { name: "トムソーヤ島いかだ", lat: 35.6318, lng: 139.8793 },
    { name: "ビックサンダー・マウンテン", lat: 35.6322, lng: 139.8782 },
    { name: "スプラッシュ・マウンテン", lat: 35.6318, lng: 139.877 },
    { name: "ビーバーブラザーズのカヌー探検", lat: 35.631, lng: 139.8768 },
    { name: "アリスのティーパーティー", lat: 35.6326, lng: 139.8822 },
    { name: "イッツ・ア・スモールワールド", lat: 35.6331, lng: 139.8817 },
    { name: "キャッスルカルーセル", lat: 35.6326, lng: 139.8814 },
    { name: "白雪姫と七人のこびと", lat: 35.6324, lng: 139.8812 },
    { name: "シンデレラのフェアリーテイル・ホール", lat: 35.6326, lng: 139.8811 },
    { name: "空飛ぶダンボ", lat: 35.6328, lng: 139.8815 },
    { name: "美女と野獣魔法のものがたり", lat: 35.6328, lng: 139.8837 },
    { name: "ピーターパン空の旅", lat: 35.6323, lng: 139.8811 },
    { name: "ビノキオの冒険旅行", lat: 35.6324, lng: 139.8809 },
    { name: "プーさんのハニーハント", lat: 35.6323, lng: 139.8824 },
    { name: "ホーンテッドマンション", lat: 35.6326, lng: 139.8801 },
    { name: "ミッキーのフィルハーマジック", lat: 35.6326, lng: 139.8808 },
    { name: "ガジェットのゴーコースター", lat: 35.6338, lng: 139.8845 },
    { name: "グーフィーのペイント&プレイハウス", lat: 35.6335, lng: 139.884 },
    { name: "チップとデールのツリーハウス", lat: 35.6337, lng: 139.8842 },
    { name: "トゥーンパーク", lat: 35.6332, lng: 139.8842 },
    { name: "ドナルドのポート", lat: 35.6338, lng: 139.8838 },
    { name: "ミニーの家", lat: 35.634, lng: 139.8836 },
    { name: "ロジャーラビットのカートゥーンスピン", lat: 35.6334, lng: 139.8848 },
    { name: "スター・ツアーズ", lat: 35.6324, lng: 139.8831 },
    { name: "ステッチ・エンカウンター", lat: 35.6328, lng: 139.883 },
    { name: "ベイマックスのハッピーライド", lat: 35.633, lng: 139.8832 },
    { name: "モンスターズ・イングライド&ゴーシーク!", lat: 35.6335, lng: 139.8828 },
    { name: "スペース・マウンテン", lat: 35.6328, lng: 139.8844 },

    // --- ランド：レストラン ---
    { name: "アイスクリームコーン", lat: 35.6321, lng: 139.881 },
    { name: "イーストサイド・カフェ", lat: 35.6322, lng: 139.8808 },
    { name: "グレートアメリカン・ワッフル・カンパニー", lat: 35.632, lng: 139.8804 },
    { name: "スイートハート・カフェ", lat: 35.6325, lng: 139.882 },
    { name: "センターストリート・コーヒーハウス", lat: 35.6326, lng: 139.8815 },
    { name: "リフレッシュメントコーナー", lat: 35.632, lng: 139.8814 },
    { name: "れすとらん北斎", lat: 35.6325, lng: 139.8814 },
    { name: "ポップコーンワゴン(スイートハート前)", lat: 35.6323, lng: 139.8821 },
    { name: "カフェ・オーリンズ", lat: 35.6313, lng: 139.8808 },
    { name: "クリスタルパレス・レストラン", lat: 35.6318, lng: 139.8804 },
    { name: "ザ・ガゼーボ", lat: 35.6316, lng: 139.8809 },
    { name: "スキッパーズ・ギャレー", lat: 35.6309, lng: 139.8801 },
    { name: "スクウィーザーズ・トロピカル", lat: 35.6308, lng: 139.8804 },
    { name: "チャイナボイジャー", lat: 35.6308, lng: 139.8808 },
    { name: "パークサイドワゴン", lat: 35.6318, lng: 139.8809 },
    { name: "ブルーバイユー・レストラン", lat: 35.6315, lng: 139.8815 },
    { name: "フレッシュフルーツオアシス", lat: 35.6309, lng: 139.8803 },
    { name: "ポイラールーム・バイツ", lat: 35.6308, lng: 139.8809 },
    { name: "ポリネシアンテラス・レストラン", lat: 35.6306, lng: 139.8802 },
    { name: "ロイヤルストリート・ベランダ", lat: 35.6315, lng: 139.8812 },
    { name: "ポップコーンワゴン (オーリンズ前)", lat: 35.6312, lng: 139.8809 },
    { name: "ポップコーンワゴン(ガゼーボ横)", lat: 35.6316, lng: 139.881 },
    { name: "カウボーイ・クックハウス", lat: 35.6315, lng: 139.8788 },
    { name: "キャンプ・ウッドチャック・キッチン", lat: 35.6309, lng: 139.8778 },
    { name: "ザ・ダイヤモンドホースシュー", lat: 35.6313, lng: 139.8797 },
    { name: "ハングリーベア・レストラン", lat: 35.6318, lng: 139.8785 },
    { name: "プラザバビリオン・レストラン", lat: 35.6321, lng: 139.8795 },
    { name: "ペコスビル・カフェ", lat: 35.6315, lng: 139.8791 },
    { name: "ポップコーンワゴン(カウボーイ前)", lat: 35.6315, lng: 139.8789 },
    { name: "ポップコーンワゴン(トレーディングポスト横)", lat: 35.6314, lng: 139.8794 },
    { name: "グランマ・サラのキッチン", lat: 35.6315, lng: 139.8778 },
    { name: "キャプテンフックス・ギャレー", lat: 35.6323, lng: 139.8808 },
    { name: "クイーン・オブ・ハートのバンケットホール", lat: 35.6328, lng: 139.8804 },
    { name: "トルバドールタパン", lat: 35.6324, lng: 139.8807 },
    { name: "ビレッジベイストリー", lat: 35.6331, lng: 139.8814 },
    { name: "マジカルマーケット", lat: 35.6324, lng: 139.8821 },
    { name: "ラ・タベルヌ・ド・ガストン", lat: 35.6325, lng: 139.8845 },
    { name: "ルフウズ", lat: 35.6324, lng: 139.8843 },
    { name: "ル・ブティボッパー", lat: 35.6327, lng: 139.8833 },
    { name: "ポップコーンワゴン(スモワ前)", lat: 35.633, lng: 139.8818 },
    { name: "ポップコーンワゴン(ハニハン前)", lat: 35.6323, lng: 139.8826 },
    { name: "トゥーントーン・トリート", lat: 35.6332, lng: 139.8841 },
    { name: "トゥーンポップ", lat: 35.6333, lng: 139.8846 },
    { name: "ヒューイ・デューイ・ルーイのカフェ", lat: 35.6335, lng: 139.8844 },
    { name: "ポップ・ア・ロット・ポップコーン", lat: 35.6331, lng: 139.8846 },
    { name: "ミッキーのトレーラー", lat: 35.6331, lng: 139.8846 },
    { name: "ソフトランディング", lat: 35.633, lng: 139.8826 },
    { name: "トゥモローランド・テラス", lat: 35.633, lng: 139.882 },
    { name: "パン・ギャラクティック・ビザ・ポート", lat: 35.633, lng: 139.8827 },
    { name: "ビックポップ", lat: 35.6331, lng: 139.8835 },
    { name: "プラズマ・レイズ・ダイナー", lat: 35.6328, lng: 139.8825 },
    { name: "ポッピングポッド", lat: 35.6329, lng: 139.8828 },
    { name: "ポップコーンワゴン(トレコメ横)", lat: 35.6329, lng: 139.8836 },
    { name: "ラケッティのラクーンサルーン", lat: 35.6312, lng: 139.8767 },
    { name: "アイスクリームワゴン(フォレスト)", lat: 35.6335, lng: 139.8847 },
    { name: "アイスクリームワゴン(ガストン)", lat: 35.6327, lng: 139.8841 },

    // --- ランド：パレード・ショー・グリーティング ---
    { name: "ハーモニー・イン・カラー", lat: 35.6322, lng: 139.8814 },
    { name: "エレクトリカルパレード", lat: 35.6322, lng: 139.8814 },
    { name: "Reach for the Stars", lat: 35.6322, lng: 139.8814 },
    { name: "スカイ・フル・オブ・カラーズ(L)", lat: 35.6322, lng: 139.8814 },
    { name: "ジャンボリミッキー!(L)", lat: 35.6341, lng: 139.8815 },
    { name: "ミッキーのレインボー・ルアウ", lat: 35.6332, lng: 139.8829 },
    { name: "バラエティマスター", lat: 35.6326, lng: 139.8817 },
    { name: "マジカルミュージックワールド", lat: 35.6313, lng: 139.8778 },
    { name: "クラブマウスビート", lat: 35.633, lng: 139.8781 },
    { name: "メインストリート・ハウス前(G)", lat: 35.6349, lng: 139.8799 },
    { name: "ウッドチャック(ドナルド)", lat: 35.6322, lng: 139.8845 },
    { name: "ウッドチャック(デイジー)", lat: 35.6322, lng: 139.8845 },
    { name: "ミート・ミッキー", lat: 35.6301, lng: 139.8787 },
    { name: "ミニーのスタイルスタジオ", lat: 35.6307, lng: 139.8794 },

    // --- シー：アトラクション ---
    { name: "ヴェネツィアン・ゴンドラ", lat: 35.6261, lng: 139.888 },
    { name: "ソアリン", lat: 35.6275, lng: 139.8858 },
    { name: "トランジットスチーマー(メディ)", lat: 35.6266, lng: 139.8859 },
    { name: "フォートレス・エクスプロレーション", lat: 35.6258, lng: 139.8852 },
    { name: "レオナルド・チャレンジ", lat: 35.626, lng: 139.8853 },
    { name: "タートル・トーク", lat: 35.6235, lng: 139.8872 },
    { name: "タワーオブテラー", lat: 35.6241, lng: 139.888 },
    { name: "エレクトリックレールウェイ(アメ)", lat: 35.6249, lng: 139.8877 },
    { name: "トランジットスチーマー(アメ)", lat: 35.6242, lng: 139.8856 },
    { name: "トイ・ストーリー・マニア!", lat: 35.6247, lng: 139.889 },
    { name: "ビッグシティ・ヴィーグル", lat: 35.6243, lng: 139.887 },
    { name: "アクアトピア", lat: 35.6263, lng: 139.88 },
    { name: "エレクトリックレールウェイ(ポト)", lat: 35.6258, lng: 139.8804 },
    { name: "ニモ&フレンズ・シーライダー", lat: 35.6254, lng: 139.881 },
    { name: "インディ・ジョーンズ", lat: 35.6293, lng: 139.8784 },
    { name: "トランジットスチーマー(ロス)", lat: 35.6288, lng: 139.8794 },
    { name: "レイジングスピリッツ", lat: 35.6298, lng: 139.8804 },
    { name: "フローズンジャーニー", lat: 35.6276, lng: 139.8758 },
    { name: "ラプンツェルのランタン", lat: 35.6288, lng: 139.8762 },
    { name: "ネバーランドアドベンチャー", lat: 35.6293, lng: 139.8755 },
    { name: "ティンカーベルのビジーバギー", lat: 35.6295, lng: 139.8762 },
    { name: "キャラバンカルーセル", lat: 35.6268, lng: 139.8821 },
    { name: "ジャスミンのフライングカーペット", lat: 35.6274, lng: 139.8824 },
    { name: "シンドバッド", lat: 35.6272, lng: 139.8833 },
    { name: "マジックランプシアター", lat: 35.627, lng: 139.8818 },
    { name: "アリエルのプレイグラウンド", lat: 35.6242, lng: 139.8813 },
    { name: "ジャンピング・ジェリーフィッシュ", lat: 35.6241, lng: 139.8811 },
    { name: "スカットルのスクーター", lat: 35.6245, lng: 139.8818 },
    { name: "フランダーのコースター", lat: 35.6249, lng: 139.8817 },
    { name: "ブローフィッシュ・バルーン", lat: 35.6243, lng: 139.881 },
    { name: "ワールブール", lat: 35.6239, lng: 139.8812 },
    { name: "海底2万マイル", lat: 35.6268, lng: 139.8848 },
    { name: "センター・オブ・ジ・アース", lat: 35.6262, lng: 139.8845 },

    // --- シー：レストラン ---
    { name: "カフェ・ポルトフィーノ", lat: 35.6268, lng: 139.8865 },
    { name: "ゴンドリエ・スナック", lat: 35.6262, lng: 139.8875 },
    { name: "ザンビーニ・ブラザーズ", lat: 35.6272, lng: 139.8872 },
    { name: "マゼランズ", lat: 35.6256, lng: 139.8853 },
    { name: "マンマ・ビスコッティーズ", lat: 35.6271, lng: 139.8861 },
    { name: "ディ・カナレット", lat: 35.6261, lng: 139.8877 },
    { name: "リフレスコス", lat: 35.626, lng: 139.8848 },
    { name: "ポップコーンワゴン(ソアリン前)", lat: 35.6277, lng: 139.8856 },
    { name: "S.Sコロンビア・ダイニング", lat: 35.6234, lng: 139.8872 },
    { name: "ケープコッド・クックオフ", lat: 35.6245, lng: 139.8851 },
    { name: "ケープコッド・コンフェクション", lat: 35.6246, lng: 139.885 },
    { name: "ドッグサイドダイナー", lat: 35.6238, lng: 139.8876 },
    { name: "テディ・ルーズヴェルト", lat: 35.6234, lng: 139.8872 },
    { name: "デランシー・ケータリング", lat: 35.6249, lng: 139.8875 },
    { name: "ニューヨーク・デリ", lat: 35.6254, lng: 139.8879 },
    { name: "ハイタイ・トリート", lat: 35.625, lng: 139.8844 },
    { name: "ハドソンリバー・ハーベスト", lat: 35.6238, lng: 139.8874 },
    { name: "パパダキス・フルーツ", lat: 35.6241, lng: 139.887 },
    { name: "リバティ・ランディング", lat: 35.6245, lng: 139.887 },
    { name: "レストラン櫻", lat: 35.6248, lng: 139.8871 },
    { name: "櫻・ウォーターサイドテラス", lat: 35.6248, lng: 139.8871 },
    { name: "ジュビリーワゴン", lat: 35.6241, lng: 139.8875 },
    { name: "ポップコーン(ケープ前)", lat: 35.6244, lng: 139.8854 },
    { name: "ポップコーンワゴン(ドック前)", lat: 35.6241, lng: 139.887 },
    { name: "ポップコーンワゴン(リバティ前)", lat: 35.6245, lng: 139.8873 },
    { name: "シーサイドスナック", lat: 35.6263, lng: 139.8815 },
    { name: "ブリーズウェイ・バイツ", lat: 35.6258, lng: 139.8808 },
    { name: "ベイサイド・テイクアウト", lat: 35.6253, lng: 139.8812 },
    { name: "ホライズンベイ", lat: 35.6258, lng: 139.8817 },
    { name: "ポップコーンワゴン(アクア前)", lat: 35.6265, lng: 139.8795 },
    { name: "エクスペディション・イート", lat: 35.6265, lng: 139.8814 },
    { name: "トロピック・アルズ", lat: 35.6273, lng: 139.8821 },
    { name: "ミゲルズ", lat: 35.6263, lng: 139.8822 },
    { name: "ユカタン", lat: 35.6273, lng: 139.8812 },
    { name: "ロストリバークックハウス", lat: 35.6275, lng: 139.8812 },
    { name: "ポップコーン(ハンガー横)", lat: 35.6261, lng: 139.8821 },
    { name: "ロイヤルバンケット", lat: 35.6273, lng: 139.8755 },
    { name: "オーケンのフード", lat: 35.6277, lng: 139.8763 },
    { name: "スナグリーダックリング", lat: 35.6288, lng: 139.8767 },
    { name: "ルックアウト・クックアウト", lat: 35.6296, lng: 139.8752 },
    { name: "ポップコーンワゴン(ティンカー横)", lat: 35.6294, lng: 139.8764 },
    { name: "オープンセサミ", lat: 35.6268, lng: 139.8811 },
    { name: "カスバ・フードコート", lat: 35.6274, lng: 139.883 },
    { name: "サルタンズ・オアシス", lat: 35.6263, lng: 139.8817 },
    { name: "ポップコーンワゴン(アラビアン前)", lat: 35.6271, lng: 139.8816 },
    { name: "セバスチャンのキッチン", lat: 35.6238, lng: 139.8805 },
    { name: "ポップコーンワゴン(コート横)", lat: 35.6253, lng: 139.8824 },
    { name: "ポップコーン(スカットル前)", lat: 35.6247, lng: 139.8817 },
    { name: "ヴォケイニア・レストラン", lat: 35.6264, lng: 139.8841 },
    { name: "ノーチラスギャレー", lat: 35.6271, lng: 139.8845 },
    { name: "リフレッシュメント・ステーション", lat: 35.6258, lng: 139.8837 },

    // --- シー：パレード・ショー・グリーティング ---
    { name: "スカイ・フル・オブ・カラーズ(S)", lat: 35.625, lng: 139.885 },
    { name: "スパークリング・ジュビリー", lat: 35.6262, lng: 139.886 },
    { name: "ビリーヴ!", lat: 35.6262, lng: 139.886 },
    { name: "ダッフィー&フレンズのショー", lat: 35.6245, lng: 139.8851 },
    { name: "ダンス・ザ・グローブ!", lat: 35.6246, lng: 139.8875 },
    { name: "ヴィレッジ・グリーティング", lat: 35.6243, lng: 139.8858 },
    { name: "サルードス・アミーゴ!", lat: 35.6261, lng: 139.8825 },
    { name: "トレイル(ミッキー)", lat: 35.6288, lng: 139.8805 },
    { name: "トレイル(ミニー)", lat: 35.6286, lng: 139.8803 },
    { name: "トレイル(ドナルド)", lat: 35.6284, lng: 139.8801 },
    { name: "プラザ(グリーティング)", lat: 35.6272, lng: 139.8891 }
];

let selectedItemName = null;

function init() {
    const list = document.getElementById('attraction-list');
    const timeline = document.getElementById('timeline-container');

    if (!list || !timeline) return;

    // リストの表示
    renderList(attractions);

    // 8:00〜21:00の時間枠生成
    timeline.innerHTML = "";
    for (let hour = 8; hour <= 20; hour++) {
        ["00", "30"].forEach(min => {
            const timeStr = `${hour}:${min}`;
            const slot = document.createElement('div');
            slot.className = 'time-slot';
            slot.innerHTML = `<div class="time-label">${timeStr}</div><div class="slot-dropzone"></div>`;

            const dropzone = slot.querySelector('.slot-dropzone');

            // 【スマホ対応】タップで追加
            dropzone.addEventListener('click', () => {
                if (selectedItemName) {
                    addItemToSlot(dropzone, selectedItemName);
                    selectedItemName = null; 
                    document.querySelectorAll('.item').forEach(el => el.classList.remove('selected'));
                }
            });

            // 【PC対応】ドロップで追加
            dropzone.addEventListener('dragover', (e) => e.preventDefault());
            dropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                const name = e.dataTransfer.getData('text/plain');
                addItemToSlot(dropzone, name);
            });

            timeline.appendChild(slot);
        });
    }
}

// リストを描画する関数
function renderList(data) {
    const list = document.getElementById('attraction-list');
    list.innerHTML = "";
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerText = item.name;
        
        // 【スマホ対応】タップで選択
        div.addEventListener('click', () => {
            document.querySelectorAll('.item').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
            selectedItemName = item.name;
        });

        // 【PC対応】ドラッグ開始
        div.draggable = true;
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.name);
        });

        list.appendChild(div);
    });
}

// 検索機能
function filterAttractions() {
    const filter = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('#attraction-list .item');
    items.forEach(item => {
        const name = item.innerText.toLowerCase();
        item.style.display = name.includes(filter) ? "block" : "none";
    });
}

function addItemToSlot(container, name) {
    const newItem = document.createElement('div');
    newItem.className = 'item schedule-item';
    newItem.innerText = name;
    newItem.onclick = (e) => {
        e.stopPropagation();
        newItem.remove();
    };
    container.appendChild(newItem);
}

document.addEventListener('DOMContentLoaded', init);