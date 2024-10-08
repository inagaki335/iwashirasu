const csvUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/refs/heads/main/%E8%99%AB%E3%83%87%E3%83%BC%E3%82%BF1.csv';
const word = "ハエトリグモ";

fetch(csvUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('ネットワークエラー: ' + response.statusText);
        }
        return response.text();
    })
    .then(csvText => {
        const rows = csvText.split('\n').map(row => row.split(','));
        const searchString = word.trim(); // スペースを削除

        console.log(`検索ワード: "${searchString}"`); // デバッグ用ログ

        // 一列目のセルが完全一致する行を検索
        const matchingRows = rows.filter(row => row[0] && row[0].trim() === searchString);
        console.log('一致した行:', matchingRows.map(row => row)); // 各行のデータを表示

        if (matchingRows.length > 0) {
            // 一致した行が存在する場合の処理
            matchingRows.forEach((row, rowIndex) => {
                row.forEach((cell, index) => {
                    const outputDiv = document.getElementById(`output${index+1}`);
                    if (outputDiv) {
                        // 行のインデックスを考慮して出力
                        const p = document.createElement('p');
                        p.textContent = cell; // 各セルのデータを表示
                        outputDiv.appendChild(p);
                    }
                });
            });
        } else {
            // 一致した行が存在しない場合
            const outputDiv = document.getElementById('output1'); // 一つのエリアにメッセージを表示
            if (outputDiv) {
                outputDiv.textContent = '一致する行が見つかりませんでした。';
            }
        }

    })
    .catch(error => {
        console.error('エラー:', error);
    });

window.addEventListener('DOMContentLoaded', function() {
    const imgPath = '蜂.jpg';
    const imgElement = document.getElementById('image1');
    imgElement.src = imgPath;
});
