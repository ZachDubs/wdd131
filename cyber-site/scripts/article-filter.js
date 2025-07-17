const articles = [
  {
    title: "Wireshark",
    summary: "Wireshark Summary",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Wireshark_icon_new.png",
  },
  {
    title: "Nmap",
    summary: "Nmap Summary",
    image: "nmap_sc.jpg"
  },
  {
    title: "What Is Multi-Factor Authentication?",
    summary: "Add another layer of security to your logins by enabling MFA.",
    image: "images/mfa.jpg"
  },
  {
    title: "Why You Should Avoid Public Wi-Fi",
    summary: "Discover the risks of free public networks and how to stay safe when you have to use one.",
    image: "images/public-wifi.jpg"
  },
  {
    title: "Keep Your Software Updated",
    summary: "Outdated apps and systems are common entry points for attackers. Stay secure by staying updated.",
    image: "images/updates.jpg"
  }
];

// Render articles to the page
function renderArticles(list) {
  const container = document.getElementById("articles-container");
  container.innerHTML = ""; // Clear previous content

  list.forEach(article => {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    articleDiv.innerHTML = `
      <div class="article-text">
        <h3>${article.title}</h3>
        <img src="${article.image}" alt="${article.title}" class="article-image">
        <p>${article.summary}</p>
      </div>
    `;

    container.appendChild(articleDiv);
  });
}

// Search handler
function handleSearch(event) {
  event.preventDefault();
  const input = document.querySelector("input[type='search']");
  const query = input.value.toLowerCase();

  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(query) ||
    article.summary.toLowerCase().includes(query)
  );

  renderArticles(filtered);
}

// Setup
document.addEventListener("DOMContentLoaded", () => {
  renderArticles(articles); // initial render

  const form = document.querySelector(".search-form");
  form.addEventListener("submit", handleSearch);
});