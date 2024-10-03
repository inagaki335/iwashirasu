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
        const searchString = 'アリ'; // 検索する文字列を指定
        const matchingRows = rows.filter(row => row[0] && row[0] === searchString);
        
        const outputDiv = document.getElementById('output');

        if (matchingRows.length > 0) {
            matchingRows.forEach(row => {
                const p = document.createElement('p');
                p.textContent = row.join(', ');
                outputDiv.appendChild(p);
            });
        } else {
            outputDiv.textContent = '一致する行が見つかりませんでした。';
        }
    })
    .catch(error => {
        console.error('エラー:', error);
    });
