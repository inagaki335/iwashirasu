// GitHubのエクセルファイルのURLを設定
const xlsxUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/main/テストエクセルファイル.xlsx';

// ページが読み込まれたときにCSVを取得
fetch(xlsxUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('ネットワークエラー: ' + response.statusText);
        }
        return response.arrayBuffer(); // バイナリデータとして取得
    })
    .then(data => {
        const workbook = XLSX.read(data); // Excelファイルを読み込む
        const sheetName = workbook.SheetNames[0]; // 最初のシートを取得
        const sheet = workbook.Sheets[sheetName]; // シートを取得
        const csv = XLSX.utils.sheet_to_csv(sheet); // シートをCSVに変換
        document.getElementById('output').textContent = csv; // CSVを表示
    })
    .catch(error => {
        console.error('エラー:', error);
    });
