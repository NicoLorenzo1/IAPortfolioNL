function loadMarkdown(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            document.getElementById('project-content').innerHTML = marked(text);
        })
        .catch(error => console.error('Error al cargar el archivo Markdown:', error));
}
