const csvUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/main/test.csv';

fetch(csvUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('ネットワークエラー: ' + response.statusText);
        }
        return response.text(); // テキストとして取得
    })
    .then(csvText => {
        console.log(csvText); // ここで取得したCSVデータをログに出力
        document.getElementById('output').textContent = csvText; // テキストを表示
    })
    .catch(error => {
        console.error('エラー:', error);
    });
