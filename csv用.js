const csvUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/refs/heads/main/%E8%99%AB%E3%83%87%E3%83%BC%E3%82%BF1.csv';

fetch(csvUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('ネットワークエラー: ' + response.statusText);
        }
        return response.text(); // テキストとして取得
    })
    .then(csvText => {
        // CSVを行ごとに分割
        const rows = csvText.split('\n').map(row => row.split(',')); // 各行をカンマで分割して配列にする
        
        // 検索する文字列
        const searchString = 'アリ'; // ここを変更して検索する文字列を入力
        
        // 文字列を含む行を検索
        const matchingRows = rows.filter(row => row.some(cell => cell.includes(searchString)));
        
        // 出力エリアの取得

        if (matchingRows.length > 0) {
            matchingRows.forEach(row => {
                const p = document.createElement('p');
                p.textContent = row.join(', '); // 行の内容をカンマで区切って表示
                outputDiv.appendChild(p);
            });
        } else {
            outputDiv.textContent = '一致する行が見つかりませんでした。';
        }
    })
    .catch(error => {
        console.error('エラー:', error);
    });
