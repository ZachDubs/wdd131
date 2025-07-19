const articles = [
  {
    title: "Wireshark",
    summary: "Wireshark is a tool that captures and analyzes data as it travels across a network. It’s like a microscope for network traffic—used to troubleshoot problems, detect suspicious activity, and learn how data flows. This article introduces you to Wireshark's basic features, use cases, and why it's so popular in cybersecurity.",
    image: "images/Wireshark_icon_new.png",
  },
  {
    title: "Nmap",
    summary: "Nmap is a powerful tool used by cybersecurity professionals to scan networks and discover what devices and services are running. It can help identify open ports, detect operating systems, and reveal potential vulnerabilities. In this beginner’s guide, you’ll learn what Nmap is, how it works, and how ethical hackers use it during security assessments.",
    image: "images/nmap_sc.jpg"
  },
  {
    title: "Strong Passwords",
    summary: "A strong password is the first line of defense against unauthorized access to your accounts. Using simple or reused passwords makes it easier for attackers to guess or crack them. This article explains how to create passwords that are long, unique, and hard to guess—and why using a password manager is a smart, secure choice for keeping track of them.",
    image: "images/strong_password.jpg"
  },
  {
    title: "Multi-Factor Authentication (MFA)",
    summary: "MFA adds an extra layer of security to your accounts by requiring more than just a password—usually something you have (like a phone or app) or something you are (like a fingerprint). Even if someone steals your password, MFA makes it much harder for them to break in. Learn how to enable MFA and which types offer the best protection.",
    image: "images/multifactor_authentication.jpg"
  },
  {
    title: "Phishing Attacks",
    summary: "Phishing is a common cyberattack where attackers pretend to be trustworthy sources to trick you into giving up personal information. These attacks often come in the form of fake emails, texts, or websites. This article helps you recognize the warning signs of phishing and gives you simple tips to avoid falling for these scams.",
    image: "images/phishing_attack.jpg"
  },
  {
    title: "Safe Browsing Habits",
    summary: "The internet is full of great resources—but also hidden threats. Learn how to identify secure websites, avoid dangerous downloads, and use browser tools to protect your privacy. We'll also cover what HTTPS means and how your browser can help warn you about suspicious pages.",
    image: "images/safe_web_browsing.png"
  },
  {
    title: "Device Security",
    summary: "Your phone, laptop, and other devices are valuable targets for attackers. Keeping them secure means regularly updating software, using built-in security tools like firewalls and antivirus, and being careful about what apps or programs you install. This article outlines basic steps for protecting your personal devices from common threats.",
    image: "images/device_security.jpg"
  },
  {
    title: "Public Wi-Fi Risks",
    summary: "Public Wi-Fi networks—like those in coffee shops or airports—are convenient but often unprotected. Hackers can intercept your data or trick you into connecting to fake networks. Here, you'll learn how to safely use public Wi-Fi, what a VPN does, and why you should avoid logging into sensitive accounts on open networks.",
    image: "images/free_wifi.jpg"
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