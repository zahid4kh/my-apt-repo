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
sudo apt install pwdgen
```

### Launching Applications

After installation, you can:

- Launch from Applications menu
- Run from terminal: `pwdgen`

## 📦 Manual Installation

You can also download `.deb` files directly from the [repository pool](https://zahid4kh.github.io/my-apt-repo/pool/main/) and install manually:

```bash
sudo dpkg -i package-name.deb
sudo apt install -f
```

## 🗑️ Uninstalling

### Remove specific applications

```bash
sudo apt remove pwdgen
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

## 📞 Support & Contact

- **GitHub**: [@zahid4kh](https://github.com/zahid4kh)
- **Email**: halilzahid@gmail.com
- **Issues**: Please report issues on the respective application's GitHub repository

## 📜 License

Individual applications maintain their own licenses. Check each application's documentation for specific license information.
