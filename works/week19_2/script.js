// Функция для создания HTML-разметки поста
function createPostHTML(post) {
    return `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;
  }
  
  // Функция для добавления HTML-разметки поста в контейнер
  function addPostToContainer(container, postHTML) {
    container.innerHTML += postHTML;
  }
  
  // Функция для создания поста и добавления его на страницу
  function createPost(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(post => {
      const postHTML = createPostHTML(post);
      const container = document.getElementById('postsContainer');
      addPostToContainer(container, postHTML);
    })
    .catch(error => console.error('Ошибка при создании поста:', error));
  }
  
  // Обработчик отправки формы
  document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    createPost(title, body);
    document.getElementById('postForm').reset();
  });
  