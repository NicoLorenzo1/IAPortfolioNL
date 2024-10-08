function loadMarkdown(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            // Usar marked.parse para procesar el contenido Markdown
            const htmlContent = marked.parse(text);
            document.getElementById('project-content').innerHTML = htmlContent;
        })
        .catch(error => console.error('Error al cargar el archivo Markdown:', error));
}
