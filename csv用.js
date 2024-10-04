const csvUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/refs/heads/main/%E8%99%AB%E3%83%87%E3%83%BC%E3%82%BF1.csv';

fetch(csvUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('ネットワークエラー: ' + response.statusText);
        }
        return response.text();
    })
    .then(csvText => {
        const rows = csvText.split('\n').map(row => row.split(','));
        const searchString = 'アリ'.trim(); // スペースを削除

        console.log(`検索ワード: "${searchString}"`); // デバッグ用ログ

        // 一列目のセルが完全一致する行を検索
        const matchingRows = rows.filter(row => row[0] && row[0].trim() === searchString);
        console.log('一致した行:', matchingRows.map(row => row)); // 各行のデータを表示

        if (matchingRows.length > 0) {
            matchingRows.forEach(row => {
                // 各列に対応する出力エリアへ出力
                row.forEach((cell, index) => {
                    const outputDiv = document.getElementById(`output${index + 1}`); // output1, output2など

                    if (outputDiv) {
                        const p = document.createElement('p');
                        p.textContent = cell; // 各セルのデータを表示
                        outputDiv.appendChild(p);
                    }
                });
            });
        } else {
            for (let i = 1; i <= row[0].length; i++) {
                const outputDiv = document.getElementById(`output${i}`);
                if (outputDiv) {
                    outputDiv.textContent = '一致する行が見つかりませんでした。';
                }
            }
        }
    })
    .catch(error => {
        console.error('エラー:', error);
    });
