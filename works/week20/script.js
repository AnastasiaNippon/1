document.getElementById('fetchData').addEventListener('click', () => {
    const entity = document.getElementById('entity').value;
    const id = document.getElementById('id').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const loadingDiv = document.getElementById('loading');
  
    resultDiv.innerHTML = '';
    errorDiv.innerHTML = '';
    loadingDiv.style.display = 'block';
  
    fetch(`https://swapi.py4e.com/api/${entity}/${id}/`)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        loadingDiv.style.display = 'none';
        if (entity === 'people') {
          resultDiv.innerHTML = `Name: ${data.name}`;
        } else if (entity === 'films') {
          resultDiv.innerHTML = `Title: ${data.title}`;
        } else if (entity === 'planets') {
          resultDiv.innerHTML = `Name: ${data.name}`;
        } else if (entity === 'species') {
          resultDiv.innerHTML = `Name: ${data.name}`;
        } else if (entity === 'starships') {
          resultDiv.innerHTML = `Name: ${data.name}`;
        } else if (entity === 'vehicles') {
          resultDiv.innerHTML = `Name: ${data.name}`;
        }
      })
      .catch(error => {
        loadingDiv.style.display = 'none';
        errorDiv.innerHTML = error;
      })
      .finally(() => {
        loadingDiv.style.display = 'none';
      });
  });
  