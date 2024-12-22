// Save a blog post to localStorage
export function saveBlogPost(post) {
  const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  posts.push(post);
  localStorage.setItem("blogPosts", JSON.stringify(posts));
}

// Get all blog posts from localStorage
export function getBlogPosts() {
  return JSON.parse(localStorage.getItem("blogPosts")) || [];
}

// Toggle light/dark mode
export function toggleLightDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Apply saved theme on page load
export function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
}
