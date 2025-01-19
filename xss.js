var xhr = new XMLHttpRequest();
xhr.open("GET", "https://app.netlify.com", true);  // Fazendo a requisição para o subdomínio
xhr.withCredentials = true;  // Envia cookies com a requisição CORS

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // A resposta contém os cookies da resposta 'Set-Cookie'
    var cookies = xhr.getResponseHeader('Set-Cookie');
    
    // Exibe os cookies no console
    alert('Cookies recebidos: ', cookies);
  }
};
xhr.send();  // Envia a requisição
