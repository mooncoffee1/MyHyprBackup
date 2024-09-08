import os
from PIL import Image

def get_color_from_file(file_path):
    """
    Get the 5th hex color from a file, ignoring comments and empty lines.
    """
    with open(file_path, 'r') as file:
        colors = []
        for line in file:
            # Strip whitespace and ignore comments
            stripped_line = line.strip()
            if stripped_line and stripped_line.startswith('#'):
                colors.append(stripped_line)
        if len(colors) >= 5:
            return colors[6]
        else:
            raise ValueError("Not enough valid colors in the file.")

def hex_to_rgb(hex_color):
    """
    Convert a hex color string to an RGB tuple.
    """
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def change_icon_color(icon_dir, new_color):
    """
    Change the color of all PNG icons in the icon_dir to the new_color.
    """
    for filename in os.listdir(icon_dir):
        if filename.endswith(".png"):
            img_path = os.path.join(icon_dir, filename)
            img = Image.open(img_path).convert("RGBA")

            # Create a new image to hold the colorized version
            new_img = Image.new("RGBA", img.size)
            for x in range(img.width):
                for y in range(img.height):
                    pixel = img.getpixel((x, y))
                    if pixel[3] > 0:  # Check if the pixel is not fully transparent
                        new_img.putpixel((x, y), new_color + (pixel[3],))
                    else:
                        new_img.putpixel((x, y), (0, 0, 0, 0))  # Fully transparent pixel remains unchanged

            # Save the new image, replacing the original one
            new_img.save(img_path)
            print(f"Replaced: {filename} with new color {new_color}")

if __name__ == "__main__":
    colors_file = os.path.expanduser("~/.cache/wal/colors")  # Path to the colors file
    icon_dir = os.path.expanduser("~/.config/wlogout/icons/")  # Path to the icons directory

    # Get the 5th color from the colors file
    try:
        color_hex = get_color_from_file(colors_file)
        new_color = hex_to_rgb(color_hex)
        print(f"Using color: {new_color}")
    except Exception as e:
        print(f"Error: {e}")
        exit(1)

    # Change the color of the icons
    change_icon_color(icon_dir, new_color)
