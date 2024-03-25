#!/bin/bash

# Function to ask for user confirmation
confirm() {
    read -r -p "$1 [Y/n] " response
    case "$response" in
        [yY][eE][sS]|[yY]|"") 
            true
            ;;
        *)
            false
            ;;
    esac
}

# Check if paru is already installed
if ! command -v paru &> /dev/null; then
    # Install paru
    echo "paru is not installed."
    if confirm "Do you want to install paru?"; then
        echo "Installing paru..."
        git clone https://aur.archlinux.org/paru.git
        cd paru || exit
        makepkg -si --noconfirm
        cd ..
        rm -rf paru
    else
        echo "Exiting."
        exit 1
    fi
else
    echo "paru is already installed."
fi

# List of packages to install
packages="hyprland-git waybar-git network-manager-applet blueman python rustup kitty zsh wofi xdg-desktop-portal-hyprland hyprlock-git grim slurp mako wl-clipboard cliphist nwg-look swappy wofi-calc wofi-emoji ttf-material-design-icons-extended ttf-iosevka xdg-user-dirs noto-fonts-emoji polkit-gnome imagemagick hyprpicker gpick acpi acpi_call qview qt5ct kvantum-qt5 colloid-cursors-git lightdm lightdm-elephant-greeter-git spotify waybar-mpris-git brightnessctl pamixer papirus-icon-theme ttf-jetbrains-mono-nerd pipewire pipewire-jack pipewire-alsa pipewire-pulse thunar cava-git spicetify-cli atuin pyprland-git"

# Ask for confirmation before installing packages with paru
if confirm $'\n'"Do you want to install the following packages with paru:"$'\n'"$packages"; then
    echo "Installing packages with paru..."
    if ! paru -S $packages --noconfirm; then
        echo "Error: Package installation failed."
        exit 1
    fi
    echo "Installation complete."
else
    echo "Exiting without installing."
    exit 1
fi

# Ask if the user wants to use dotfiles
if confirm "Do you want to use dotfiles from MyHyprBackup?"; then
    echo "Cloning MyHyprBackup dotfiles..."
    mkdir -p ~/GitHub
    git clone https://github.com/mooncoffee1/MyHyprBackup.git ~/GitHub/MyHyprBackup
    if [ -d "~/GitHub/MyHyprBackup/.config" ]; then
        echo "Creating symbolic links for .config files..."
        ln -s ~/GitHub/MyHyprBackup/.config/* ~/.config/
        echo "Dotfiles linked."
    else
        echo "Error: .config folder not found in MyHyprBackup."
    fi
else
    echo "Exiting without using dotfiles."
fi
