#!/bin/bash

# Function to display messages in color
color_echo() {
    local color=$1
    shift
    echo -e "\033[${color}m$*\033[0m"
}

# Color codes
RED="1;31"
GREEN="1;32"
YELLOW="1;33"

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
    color_echo $RED "paru is not installed."
    if confirm "Do you want to install paru?"; then
        color_echo $YELLOW "Installing paru..."
        git clone https://aur.archlinux.org/paru.git
        cd paru || exit
        makepkg -si
        cd ..
        rm -rf paru
    else
        color_echo $RED "Exiting."
        exit 1
    fi
else
    color_echo $GREEN "paru is already installed."
fi

# List of packages to install
packages=(
    hyprland-git waybar-git network-manager-applet blueman python rustup kitty zsh wofi
    xdg-desktop-portal-hyprland hyprlock-git grim slurp swaync wl-clipboard cliphist nwg-look
    swappy wofi-calc wofi-emoji ttf-material-design-icons-extended ttf-iosevka ttf-iosevka-nerd xdg-user-dirs
    noto-fonts-emoji polkit-gnome imagemagick hyprpicker-git hyprpaper-git hypridle gpick acpi acpi_call qview qt5ct
    kvantum-qt5 colloid-cursors-git lightdm lightdm-elephant-greeter-git spotify waybar-mpris-git
    brightnessctl pamixer papirus-icon-theme ttf-jetbrains-mono-nerd pipewire pipewire-jack
    pipewire-alsa pipewire-pulse thunar cava-git spicetify-cli atuin wlogout python-pywal gradience zsh-autosuggestions zsh-sudo zsh-syntax-highlighting adw-gtk3
)

# Ask for confirmation before installing packages with paru
if confirm $'\n'"Do you want to install the following packages with paru:"$'\n'"${packages[*]}"; then
    color_echo $YELLOW "Installing packages with paru..."
    for package in "${packages[@]}"; do
        if paru -Qi "$package" &> /dev/null; then
            color_echo $GREEN "$package is already installed, skipping."
        else
            color_echo $YELLOW "Installing $package..."
            if ! paru -S --noconfirm "$package"; then
                color_echo $RED "Error: Installation failed for package: $package"
            else
                color_echo $GREEN "Successfully installed package: $package"
            fi
        fi
    done
    color_echo $GREEN "Package installation process complete."
else
    color_echo $RED "Exiting without installing."
    exit 1
fi

# Link .config directory from current directory to ~/.config
if confirm "Do you want to link the .config directory from the current directory to ~/.config?"; then
    color_echo $YELLOW "Creating symbolic links for .config files..."
    mkdir -p ~/.config
    ln -s "$(pwd)/.config/"* ~/.config/
    color_echo $GREEN "Dotfiles linked."
else
    color_echo $RED "Exiting without linking dotfiles."
fi
