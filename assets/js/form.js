import { saveBlogPost } from "./logic.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("blogForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (!username || !title || !content) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    saveBlogPost({
      username,
      title,
      content,
      date: new Date().toLocaleString(),
    });
    window.location.href = "blog.html";
  });
});
