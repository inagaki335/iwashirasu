// GitHubのエクセルファイルのURLを設定
const xlsxUrl = 'https://raw.githubusercontent.com/inagaki335/iwashirasu/main/テストエクセルファイル.xlsx';

// ページが読み込まれたときにExcelファイルを取得
window.onload = function() {
    fetch(xlsxUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('ネットワークエラー: ' + response.statusText);
            }
            return response.arrayBuffer(); // バイナリデータとして取得
        })
        .then(data => {
            const uint8Array = new Uint8Array(data); // バイナリデータをUint8Arrayに変換
            const workbook = XLSX.read(uint8Array, {type: "array"}); // Excelファイルを読み込む
            const sheetName = workbook.SheetNames[0]; // 最初のシートを取得
            const sheet = workbook.Sheets[sheetName]; // シートを取得
            const htmlString = XLSX.utils.sheet_to_html(sheet); // シートをHTMLに変換
            document.getElementById('output').innerHTML = htmlString; // HTMLを表示
        })
        .catch(error => {
            console.error('エラー:', error);
        });
};
