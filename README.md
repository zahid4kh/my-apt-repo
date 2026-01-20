# My APT Repository

A personal APT repository hosting custom desktop applications built with modern technologies including Kotlin/Compose Desktop and Python/PyQt6.

## ⚡ Quick Installation

### Prerequisites

- Ubuntu/Debian-based Linux distribution
- sudo privileges

### Installation Steps

#### 1. Add the repository GPG key

```bash
wget -qO- https://zahid4kh.github.io/my-apt-repo/KEY.gpg | sudo gpg --dearmor -o /usr/share/keyrings/zahid-archive-keyring.gpg
```

#### 2. Add the repository to your sources list

```bash
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/zahid-archive-keyring.gpg] https://zahid4kh.github.io/my-apt-repo stable main" | sudo tee /etc/apt/sources.list.d/zahid-apps.list
```

#### 3. Update package list and install applications

```bash
sudo apt update
sudo apt install composefordesktop kached markdownify pwdgen sumpdf
```

### Install Individual Applications

```bash
# Compose for Desktop project generator
sudo apt install composefordesktop

# Code snippet manager
sudo apt install kached

# Markdown editor
sudo apt install markdownify

# Password generator
sudo apt install pwdgen

# PDF management tool
sudo apt install sumpdf
```

### Launching Applications

After installation, you can:

- Launch from Applications menu
- Run from terminal: `composefordesktop`, `kached`, `markdownify`, `pwdgen`, or `sumpdf`

## 🌐 Browse Applications

Visit the **[Repository Website](https://zahid4kh.github.io/my-apt-repo)** to:

- Browse detailed information about each application
- View features, screenshots, and usage instructions
- Access direct download links for manual installation
- Get platform-specific installation guides

## 📦 Manual Installation

You can also download `.deb` files directly from the [repository pool](https://zahid4kh.github.io/my-apt-repo/pool/main/) and install manually:

```bash
sudo dpkg -i package-name.deb
sudo apt install -f
```

## 🗑️ Uninstalling

### Remove specific applications

```bash
# Remove individual apps
sudo apt remove composefordesktop
sudo apt remove kached
sudo apt remove markdownify
sudo apt remove pwdgen
sudo apt remove sumpdf

# Remove all repository apps (if installed any)
sudo apt remove composefordesktop kached markdownify pwdgen sumpdf
```

### Remove the entire repository

```bash
sudo rm /etc/apt/sources.list.d/zahid-apps.list
sudo rm /usr/share/keyrings/zahid-archive-keyring.gpg
sudo apt update
```

## 🔧 Repository Information

- **Repository URL**: https://zahid4kh.github.io/my-apt-repo
- **Distribution**: stable
- **Component**: main
- **Architecture**: amd64
- **GPG Key ID**: F6C1BB08C8138D234A54D3D30940F1449316DE37

## Application-Specific Requirements

- **Compose for Desktop Wizard**: JRE 17+ (included as a depndency and will be installed automatically)
- **Kached & SumPDF & Markdownify**: JRE 17+ (is bundled with the application)
- **PwdGen**: Python 3.8+ and PyQt6 (automatically installed as dependency)
- **SumPDF**: For document conversion (.doc, .docx, .odt): `sudo apt install libreoffice`

## 📋 Application Overview

### 🚀 Compose for Desktop Wizard

**Project generator for Kotlin Compose Desktop applications**

- Generate complete Kotlin projects with advanced configuration
- Icon management with drag & drop support
- 11 optional dependencies (Retrofit, Ktor, SQLDelight, etc.)
- Preview of generated files
- Offline workflow with Material3 UI

### 📝 Kached

**Code snippet manager with syntax highlighting**

- Support for 17+ programming languages
- Offline storage and export capabilities
- Dark/light mode themes

### ✍️ Markdownify

**Desktop markdown editor with live preview**

- Split-pane interface with real-time preview
- Multiple file tabs and auto-completion
- Extended markdown syntax support

### 🔐 PwdGen

**Secure password generator**

- Customizable password options (1-75 characters)
- Modern Material3 interface
- Clipboard integration

### 📄 SumPDF

**PDF management and conversion tool**

- Combine, split, and convert documents
- Support for multiple formats (TXT, PNG, JPG, DOC, DOCX, ODT)
- Drag & drop interface

## 📞 Support & Contact

- **Repository Website**: https://zahid4kh.github.io/my-apt-repo
- **GitHub**: [@zahid4kh](https://github.com/zahid4kh)

### Report Issues

Please report issues on the respective application's GitHub repository:

- [Compose for Desktop Wizard Issues](https://github.com/zahid4kh/compose-for-desktop/issues)
- [Kached Issues](https://github.com/zahid4kh/kached/issues)
- [Markdownify Issues](https://github.com/zahid4kh/markdownify/issues)
- [PwdGen Issues](https://github.com/zahid4kh/pwdgen/issues)
- [SumPDF Issues](https://github.com/zahid4kh/sumpdf/issues)

## 📜 License

Individual applications maintain their own licenses. Check each application's documentation for specific license information.

---

**Built with ❤️ by Zahid Khalilov**
