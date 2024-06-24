#!/bin/bash

# Command to get monitor info
monitor_info=$(hyprctl monitors | grep -A 1 "Monitor eDP-1")

# Check if 144Hz mode is active
if echo "$monitor_info" | grep -q "1920x1080@144"; then
    echo "Current mode is 144Hz. Switching to 60Hz."
    # Switch to 60Hz mode
    hyprctl keyword monitor eDP-1,1920x1080@60,auto,1
    # Send notification
    notify-send "Monitor Refresh Rate Changed" "Switched to 60Hz mode."
else
    echo "Current mode is 60Hz. Switching to 144Hz."
    # Switch to 144Hz mode
    hyprctl keyword monitor eDP-1,1920x1080@144,auto,1
    # Send notification
    notify-send "Monitor Refresh Rate Changed" "Switched to 144Hz mode."
fi
