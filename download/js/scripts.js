function downloadFile() {
    const link = document.createElement('a');
    link.href = 'Warriors of Light.torrent'; // Substitua pelo caminho do seu arquivo
    link.download = 'Warriors of Light.torrent'; // Nome do arquivo que será baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
