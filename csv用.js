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
        console.log('一致した行:', matchingRows);

        const outputDiv = document.getElementById('output');

        if (matchingRows.length > 0) {
            matchingRows.forEach(row => {
                const p = document.createElement('p');
                
                // ここで特定の列を出力（例：2列目 row[1]）
                p.textContent = row[2]; 
                
                outputDiv.appendChild(p);
            });
        } else {
            outputDiv.textContent = '一致する行が見つかりませんでした。';
        }
    })
    .catch(error => {
        console.error('エラー:', error);
    });
