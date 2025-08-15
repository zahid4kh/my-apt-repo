const appDetails = {
  composefordesktop: {
    title: "Compose for Desktop Wizard - Project Generator",
    description:
      "A native desktop application for generating production-ready Kotlin Compose for Desktop projects with advanced configuration options and offline workflow.",
    features: [
      "Generate complete Kotlin Compose Desktop projects offline",
      "Icon management with drag & drop PNG support and automatic conversion (ICO/ICNS)",
      "Dependency selection - 11 optional libraries (Retrofit, Ktor, SQLDelight, etc.)",
      "Preview of generated build.gradle.kts, settings.gradle.kts, and other files",
      "Material3 theming with dark mode support",
      "Expandable configuration sections for organized workflow",
      "Linux desktop integration with proper DEB packaging",
      "Cross-platform project generation (Windows, macOS, Linux distributions)",
      "Generated projects include hot reload support and ProGuard optimization",
      "MVVM architecture with Koin dependency injection in generated projects",
    ],
    install: "sudo apt install composefordesktop",
    github: "https://github.com/zahid4kh/compose-for-desktop/tree/desktop",
    note: "Also available as web version at composefordesktop.vercel.app for instant access without installation",
    requirements: "Java 17 or later (automatically installed as dependency)",
  },

  kached: {
    title: "Kached - Code Snippet Manager",
    description:
      "A simple desktop application for managing code snippets offline with syntax highlighting support.",
    features: [
      "Store code snippets with title, description, and code",
      "Syntax highlighting for 17+ programming languages",
      "Export snippets as .txt, .md, or language-specific files",
      "Dark/light mode support",
      "Offline storage - all data saved locally",
      "Cross-platform - Windows, Linux",
    ],
    install: "sudo apt install kached",
    github: "https://github.com/zahid4kh/kached",
    languages:
      "C, C++, C#, Dart, Go, Java, JavaScript, Kotlin, Perl, PHP, Python, Ruby, Rust, Shell, Swift, TypeScript",
  },

  markdownify: {
    title: "Markdownify - Markdown Editor",
    description:
      "A powerful desktop markdown editor with live preview, multiple tabs, and extended syntax support.",
    features: [
      "Live Preview - See markdown rendered in real-time",
      "Split-Pane Interface - Editor and preview side by side",
      "Multiple File Tabs - Work with multiple files simultaneously",
      "Auto-completion for markdown syntax",
      "Custom Banners - Info, warning, error, success banners",
      "Dark/Light Theme with persistent settings",
      "Clickable links and images in preview",
    ],
    install: "sudo apt install markdownify",
    github: "https://github.com/zahid4kh/markdownify",
    formats: "Standard Markdown, Tables, Code blocks, Images, Links",
  },

  pwdgen: {
    title: "PwdGen - Secure and Simple Password Generator",
    description:
      "A robust tool for generating secure, random passwords with customizable options and modern Material3 interface.",
    features: [
      "Generate secure passwords with customizable length (1-75 characters)",
      "Include/exclude character sets (uppercase, lowercase, numbers, special)",
      "Modern dark-themed UI",
      "Clipboard integration",
      "Comprehensive input validation",
      "Logging system for operations",
    ],
    install: "sudo apt install pwdgen",
    github: "https://github.com/zahid4kh/pwdgen",
  },

  sumpdf: {
    title: "SumPDF - PDF Management Tool",
    description:
      "Your all-in-one PDF tool for combining, splitting, and converting various document types to PDF format.",
    features: [
      "Combine multiple PDF files into a single document",
      "Split PDFs - extract all pages or specific ranges",
      "Convert files to PDF (TXT, PNG, JPG, JPEG, SVG, DOC, DOCX, ODT)",
      "Interactive page management - reorder, delete, merge",
      "Real-time progress tracking",
      "Drag & drop interface",
      "Dark/light mode support",
      "Recent folders for quick access",
    ],
    install: "sudo apt install sumpdf",
    github: "https://github.com/zahid4kh/sumpdf",
    note: "Document conversion (DOC, DOCX, ODT) requires LibreOffice: sudo apt install libreoffice",
  },
};

function showPage(pageType) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (pageType === "home") {
    document.getElementById("home-page").classList.add("active");
    document.getElementById("home-btn").classList.add("active");
  } else if (pageType === "apps") {
    document.getElementById("apps-page").classList.add("active");
    document.getElementById("apps-btn").classList.add("active");
  }
}

function showAppDetails(appName) {
  const app = appDetails[appName];
  const detailsPage = document.getElementById(`${appName}-details`);

  const featuresHTML = app.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  let additionalInfo = "";
  if (app.languages) {
    additionalInfo = `<p><strong>Supported Languages:</strong> ${app.languages}</p>`;
  } else if (app.formats) {
    additionalInfo = `<p><strong>Supported Formats:</strong> ${app.formats}</p>`;
  } else if (app.requirements) {
    additionalInfo = `<div class="warning"><strong>Requirements:</strong> ${app.requirements}</div>`;
  }

  if (app.note) {
    additionalInfo += `<div class="warning"><strong>Note:</strong> ${app.note}</div>`;
  }

  detailsPage.innerHTML = `
        <div class="app-header">
            <button onclick="showPage('apps')" class="back-btn">← Back to Applications</button>
            <h2>${app.title}</h2>
        </div>
        
        <p class="app-description">${app.description}</p>
        
        <div class="install-section">
            <h3>📦 Installation</h3>
            <div class="command">${app.install}</div>
        </div>
        
        <h3>✨ Features</h3>
        <ul class="features-list">
            ${featuresHTML}
        </ul>
        
        ${additionalInfo}
        
        <div class="links-section">
            <a href="${app.github}" target="_blank" class="github-link">
                📂 View on GitHub
            </a>
        </div>
    `;

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  detailsPage.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  showPage("home");
});
