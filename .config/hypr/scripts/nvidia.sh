#!/bin/bash

# Function to export environment variables
set_env_vars() {
    export LIBVA_DRIVER_NAME=nvidia
    export GBM_BACKEND=nvidia-drm
    export __GLX_VENDOR_LIBRARY_NAME=nvidia
    export WLR_NO_HARDWARE_CURSORS=1
    export __GL_GSYNC_ALLOWED=1
    export __VK_LAYER_NV_optimus=NVIDIA_only
    export NVD_BACKEND=direct
    notify-send "NVIDIA graphics card detected." "NVIDIA specific environmental variables loaded."
}

# Function to notify no NVIDIA card
notify_no_nvidia() {
    notify-send "No NVIDIA graphics card detected." "No actions will be taken."
}

# Main logic to check for NVIDIA GPU
if lspci | grep -Ei 'VGA|3D' | grep -iq 'NVIDIA'; then
    set_env_vars
else
    notify_no_nvidia
fi
