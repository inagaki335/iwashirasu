const csvUrl = 'https://api.github.com/repos/inagaki335/iwashirasu/contents/test.csv';

fetch(csvUrl)
    .then(response => response.json())  // GitHub APIはJSON形式で返す
    .then(data => {
        const content = atob(data.content); // Base64でエンコードされた内容をデコード
        document.getElementById('output').textContent = content; // テキストを表示
    })
    .catch(error => {
        console.error('エラー:', error);
    });
