// 1. Функция, которая принимает объект поста и возвращает строку HTML-разметки
function createPostHTML(post) {
    return `
      <div class="post">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;
  }
  
  // 2. Функция, которая добавляет полученную разметку в контейнер
  function addPostToContainer(container, postHTML) {
    container.innerHTML += postHTML;
  }
  
  // 3. Функция, которая делает GET запрос по адресу и добавляет посты на страницу
  async function fetchAndDisplayPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      const container = document.getElementById('postsContainer');
      
      posts.forEach(post => {
        const postHTML = createPostHTML(post);
        addPostToContainer(container, postHTML);
      });
    } catch (error) {
      console.error('Ошибка при получении постов:', error);
    }
  }
  
  // Вызов функции для получения и отображения постов
  fetchAndDisplayPosts();
  