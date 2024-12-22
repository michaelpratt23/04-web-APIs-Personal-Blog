import { getBlogPosts, toggleLightDarkMode, applySavedTheme } from "./logic.js";

document.addEventListener("DOMContentLoaded", () => {
  const posts = getBlogPosts();
  const blogPostsContainer = document.getElementById("blogPosts");

  if (posts.length === 0) {
    blogPostsContainer.innerHTML = "<p>No blog posts yet. Start writing!</p>";
  } else {
    posts.forEach((post) => {
      const postElement = createPostElement(post);
      blogPostsContainer.appendChild(postElement);
    });
  }

  applySavedTheme();

  document
    .getElementById("toggleMode")
    .addEventListener("click", toggleLightDarkMode);
  document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

function createPostElement(post) {
  const article = document.createElement("article");

  const title = document.createElement("h3");
  title.textContent = post.title;

  const author = document.createElement("p");
  author.innerHTML = `<strong>By:</strong> ${post.username}`;

  const content = document.createElement("p");
  content.textContent = post.content;

  const date = document.createElement("p");
  date.innerHTML = `<em>${post.date}</em>`;

  article.appendChild(title);
  article.appendChild(author);
  article.appendChild(content);
  article.appendChild(date);

  return article;
}
