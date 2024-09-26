document.getElementById('loadCsvBtn').addEventListener('click', function() {
    // GitHubのCSVファイルのURL
    const csvUrl = 'https://raw.githubusercontent.com/<ユーザー名>/<リポジトリ名>/main/<ファイル名>.csv';

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
});
