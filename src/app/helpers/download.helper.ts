/*
    Função para descarregar os arquivos de download
    no navegador e tratando o seu formato (PDF ou Excel)
*/
export function downloadFile(data: any, type: string, filename: string) {

    var blob = null; // Armazenar o arquivo em bytes

    switch(type) {
        case 'pdf':
            blob = new Blob([data], { type: 'application/pdf' })
            break;
        
        case 'excel':
            blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
            break;
    }

    // Download do arquivo
    var url = window.URL.createObjectURL(blob as Blob);
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = filename;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.removeChild(downloadLink);
    
}