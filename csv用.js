const csvUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/refs/heads/main/%E8%99%AB%E3%83%87%E3%83%BC%E3%82%BF%20(%E4%BB%AE).csv';
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

if (name) {
    console.log(`取得したname: ${name}`); // デバッグ用
} else {
    console.error('クエリパラメータ "name" が取得できませんでした。');
}

if (name) {
    const searchString = name.trim(); // スペースを削除

    fetch(csvUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('ネットワークエラー: ' + response.statusText);
            }
            return response.text();
        })
        .then(csvText => {
            const rows = csvText.split('\n').map(row => row.split(','));

            // 一致する行を検索
            const matchingRows = rows.filter(row => row[0] && row[0].trim() === searchString);

            if (matchingRows.length > 0) {
                matchingRows.forEach((row, rowIndex) => {
                    row.forEach((cell, index) => {
                        const outputDiv = document.getElementById(`output${index+1}`);
                        if (outputDiv) {
                            const p = document.createElement('p');
                            p.textContent = cell; // 各セルのデータを表示
                            outputDiv.appendChild(p);
                        }
                    });
                });
            } else {
                const outputDiv = document.getElementById('output1');
                if (outputDiv) {
                    outputDiv.textContent = '一致する行が見つかりませんでした。';
                }
            }
        })
        .catch(error => {
            console.error('エラー:', error);
        });
} else {
    console.error('クエリパラメータ "name" が指定されていません。');
    const outputDiv = document.getElementById('output1');
    if (outputDiv) {
        outputDiv.textContent = 'クエリパラメータ "name" が指定されていません。';
    }
}
