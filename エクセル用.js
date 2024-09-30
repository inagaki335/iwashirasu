// GitHubのエクセルファイルのURLを設定
const xlsxUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/main/テストエクセルファイル.xlsx';

// ページが読み込まれたときにExcelファイルを取得
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
        const htmlString = XLSX.utils.sheet_to_html(sheet); // シートをHTMLに変換
        document.getElementById('output').innerHTML = htmlString; // HTMLを表示
    })
    .catch(error => {
        console.error('エラー:', error);
    });
