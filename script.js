// GitHubのCSVファイルのURLを設定
const csvUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/main/test.csv
';

// ページが読み込まれたときにCSVを取得
fetch(csvUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('ネットワークエラー: ' + response.statusText);
        }
        return response.text(); // テキストとして取得
    })
    .then(csvText => {
        document.getElementById('output').textContent = csvText; // テキストを表示
    })
    .catch(error => {
        console.error('エラー:', error);
    });
