// GitHubのエクセルファイルのURLを設定
const xlsxUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/main/テストエクセルファイル.xlsx';

// ページが読み込まれたときにCSVを取得
fetch(xlsxUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('ネットワークエラー: ' + response.statusText);
        }
        return response.text(); // テキストとして取得
    })
    .then(xlsxText => {
        document.getElementById('output').textContent = xlsxText; // テキストを表示
    })
    .catch(error => {
        console.error('エラー:', error);
    });
