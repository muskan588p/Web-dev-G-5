let blogs = [];
let editingIndex = -1;


async function loadBlogs() {
  const stored = JSON.parse(localStorage.getItem("blogs"));
  if (stored && stored.length > 0) {
    blogs = stored;
  } else {
    const response = await fetch('blogs.json');
    blogs = await response.json();
    saveBlogs(); 
  }
  renderBlogs();
}

function saveBlogs() {
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

function renderBlogs(data = blogs) {
  const container = document.getElementById("blog-container");
  if (!container) return;
  container.innerHTML = "";

  data.forEach((blog, index) => {
    let buttons = "";
    if (document.title.includes("Admin")) {
      buttons = `
        <button onclick="editBlog(${index})">Edit</button>
        <button onclick="deleteBlog(${index})">Delete</button>
      `;
    }
    container.innerHTML += `
      <div class="blog-card">
        <img src="${blog.image}" alt="Blog Image">
        <h3>${blog.title}</h3>
        <p>${blog.desc}</p>
        <small>By ${blog.author} | ${blog.category} | ${blog.date}</small><br>
        ${buttons}
      </div>
    `;
  });
}

// Admin Functions
function initAdmin() {
  const blogForm = document.getElementById("blogForm");
  if (!blogForm) return;

  blogForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newBlog = {
      title: document.getElementById("title").value,
      desc: document.getElementById("desc").value,
      image: document.getElementById("image").value,
      author: document.getElementById("author").value,
      category: document.getElementById("category").value,
      date: document.getElementById("date").value,
      publishedBy: "Admin"
    };

    if (editingIndex === -1) {
      blogs.push(newBlog);
    } else {
      blogs[editingIndex] = newBlog;
      editingIndex = -1;
    }

    saveBlogs();
    renderBlogs();
    blogForm.reset();
  });
}

function editBlog(index) {
  document.getElementById("title").value = blogs[index].title;
  document.getElementById("desc").value = blogs[index].desc;
  document.getElementById("image").value = blogs[index].image;
  document.getElementById("author").value = blogs[index].author;
  document.getElementById("category").value = blogs[index].category;
  document.getElementById("date").value = blogs[index].date;
  editingIndex = index;
}

function deleteBlog(index) {
  if (confirm("Are you sure you want to delete this blog?")) {
    blogs.splice(index, 1);
    saveBlogs();
    renderBlogs();
  }
}

// Debounced Search
let searchInput = document.getElementById("search");
let debounceTimer;
if (searchInput) {
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      let query = searchInput.value.toLowerCase();
      let filtered = blogs.filter(blog =>
        blog.title.toLowerCase().includes(query)
      );
      renderBlogs(filtered);
    }, 300);
  });
}

// Sorting
function sortByDate() {
  blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  saveBlogs();
  renderBlogs();
}

// Filtering
function filterByCategory() {
  const category = document.getElementById("filterCategory").value;
  if (category === "all") {
    renderBlogs();
  } else {
    let filtered = blogs.filter(blog => blog.category === category);
    renderBlogs(filtered);
  }
}

// Load on page start
loadBlogs();
