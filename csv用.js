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
        
        // 例: 2行目の3列目のセルを取得（行と列は0から始まる）
        const specificCell = rows[1][2];
        console.log(specificCell); // セルの値をログに出力

        // セルの値を表示
        document.getElementById('output').textContent = specificCell;
    })
    .catch(error => {
        console.error('エラー:', error);
    });
