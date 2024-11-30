fetch('https://phofc.systemhb.net/DPanel/usuario', { method: 'GET', credentials: 'include' })
  .then(function (request) {
    return request.text();
  })
  .then(function (htmlString) {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlString, 'text/html');
    const pagination = htmlDoc.querySelector('.paginacao span');
    const paginationFormatted = pagination.textContent.slice(3, 5);

    for (let i = 1; i <= paginationFormatted; i++) {
      fetch(`https://phofc.systemhb.net/DPanel/usuario?pagina=${i}`)
        .then(function (request) {
          return request.text();
        })
        .then(function (data) {
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(data, 'text/html');
          const tbody = htmlDoc.querySelector('table tbody');
          console.log(tbody);
        });
    }
  });
