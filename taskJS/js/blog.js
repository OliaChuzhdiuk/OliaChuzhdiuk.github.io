// Запитуємо дані з сервера dummyjson.com/posts
fetch("https://dummyjson.com/posts")
  .then((response) => response.json())
  .then((data) => {
    const posts = data.posts;
    const postsContainer = document.querySelector(".main-content");
    postsContainer.innerHTML = "";

    posts.forEach((post) => {
      postsContainer.innerHTML += `
         <article class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
 </article>
        `;
    });
    console.log(posts);
    console.log(postsContainer);
  })
  .catch((error) => {
    console.error("Помилка:", error);
  });
