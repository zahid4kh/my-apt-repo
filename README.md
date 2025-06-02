# My APT Repository

A personal APT repository hosting custom applications built with modern technologies including Python/PyQt6 and Kotlin/Compose Desktop.

## 🚀 Available Applications

### PwdGen

- **Description**: Secure password generator with customizable options
- **Technology**: Python + PyQt6
- **Features**:
  - Customizable password length (1-128 characters)
  - Include/exclude character sets (uppercase, lowercase, numbers, special)
  - Modern dark-themed UI
  - Clipboard integration
  - Input validation

### SumPDF

- **Description**: A tool for combining PDF files and converting various files into PDFs
- **Technology**: Kotlin + Compose Desktop
- **Features**:
  - **Combine PDFs**: Merge multiple PDF files into a single document
  - **Convert to PDF**: Support for text files (.txt), images (.png, .jpg, .jpeg), vector graphics (.svg), and documents (.doc, .docx, .odt)
  - **Modern UI**: Dark/light mode support with drag & drop interface
  - **Batch Processing**: Convert multiple files simultaneously
  - **Real-time Progress**: File-by-file conversion feedback
  - **Recent Folders**: Quick access to output locations

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
sudo apt install pwdgen sumpdf
```

### Install Individual Applications

```bash
# Install only PwdGen
sudo apt install pwdgen

# Install only SumPDF
sudo apt install sumpdf
```

### Launching Applications

After installation, you can:

- Launch from Applications menu
- Run from terminal: `pwdgen` or `sumpdf`

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
sudo apt remove pwdgen
sudo apt remove sumpdf

# Remove all repository apps
sudo apt remove pwdgen sumpdf
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
- **GPG Key**: F6C1BB08C8138D234A54D3D30940F1449316DE37

## 📋 Application Requirements

### PwdGen

- Python 3.8+
- PyQt6

### SumPDF

- JRE 17 (automatically installed as dependency)
- For document conversion (.doc, .docx, .odt): LibreOffice (`sudo apt install libreoffice`)

## 📞 Support & Contact

- **GitHub**: [@zahid4kh](https://github.com/zahid4kh)
- **Email**: halilzahid@gmail.com
- **Issues**: Please report issues on the respective application's GitHub repository
  - [PwdGen Issues](https://github.com/zahid4kh/pwdgen/issues)
  - [SumPDF Issues](https://github.com/zahid4kh/sumpdf/issues)

## 📜 License

Individual applications maintain their own licenses. Check each application's documentation for specific license information.
