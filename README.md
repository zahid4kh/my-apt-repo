# My APT Repository

A personal APT repository hosting custom desktop applications built with modern technologies including Python/PyQt6 and Kotlin/Compose Desktop.

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
sudo apt install kached markdownify pwdgen sumpdf
```

### Install Individual Applications

```bash
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
- Run from terminal: `kached`, `markdownify`, `pwdgen`, or `sumpdf`

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
sudo apt remove kached
sudo apt remove markdownify
sudo apt remove pwdgen
sudo apt remove sumpdf

# Remove all repository apps
sudo apt remove kached markdownify pwdgen sumpdf
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

- **Kached & SumPDF & Markdownify**: JRE 17+ (automatically installed as dependency)
- **PwdGen**: Python 3.8+ and PyQt6 (automatically installed as dependency)
- **SumPDF**: For document conversion (.doc, .docx, .odt): `sudo apt install libreoffice`

## 📞 Support & Contact

- **Repository Website**: https://zahid4kh.github.io/my-apt-repo
- **GitHub**: [@zahid4kh](https://github.com/zahid4kh)
- **Email**: halilzahid@gmail.com

### Report Issues

Please report issues on the respective application's GitHub repository:

- [Kached Issues](https://github.com/zahid4kh/kached/issues)
- [Markdownify Issues](https://github.com/zahid4kh/markdownify/issues)
- [PwdGen Issues](https://github.com/zahid4kh/pwdgen/issues)
- [SumPDF Issues](https://github.com/zahid4kh/sumpdf/issues)

## 📜 License

Individual applications maintain their own licenses. Check each application's documentation for specific license information.

---

**Built with ❤️ by Zahid Khalilov**
