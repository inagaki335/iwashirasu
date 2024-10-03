const csvUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/refs/heads/main/%E8%99%AB%E3%83%87%E3%83%BC%E3%82%BF1.csv';

fetch(csvUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('ネットワークエラー: ' + response.statusText);
        }
        return response.text(); // テキストとして取得
    })
    .then(csvText => {
        console.log(csvText[1][2]); // ここで取得したCSVデータをログに出力
        document.getElementById('output').textContent = csvText; // テキストを表示
    })
    .catch(error => {
        console.error('エラー:', error);
    });
