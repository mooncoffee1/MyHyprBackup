#!/usr/bin/env python3

import json
import argparse
import os

def hex_to_rgb(color: str) -> tuple:
    """Convert a hex color to rgb."""
    return tuple(bytes.fromhex(color.strip("#")))

def rgb_to_hex(color: tuple) -> str:
    """Convert an rgb color to hex."""
    return "#%02x%02x%02x" % (*color,)

def darken_color(color: str, amount: int) -> str:
    """Darken a hex color."""
    ctup = hex_to_rgb(color)
    nctup = [max(0, int(col * (1 - (amount / 100)))) for col in ctup]
    return rgb_to_hex(nctup)

def lighten_color(color: str, amount: int) -> str:
    """Lighten a hex color."""
    ctup = hex_to_rgb(color)
    nctup = [min(255, int(col + (255 - col) * (amount / 100))) for col in ctup]
    return rgb_to_hex(nctup)

def blend_color(color1: str, color2: str) -> str:
    """Blend two colors together."""
    r1, g1, b1 = hex_to_rgb(color1)
    r2, g2, b2 = hex_to_rgb(color2)

    r3 = int(0.5 * r1 + 0.5 * r2)
    g3 = int(0.5 * g1 + 0.5 * g2)
    b3 = int(0.5 * b1 + 0.5 * b2)

    return rgb_to_hex((r3, g3, b3))

def add_transparency(color: str, alpha: float) -> str:
    """Add transparency to a hex color."""
    r, g, b = hex_to_rgb(color)
    return f"rgba({r}, {g}, {b}, {alpha})"

parser = argparse.ArgumentParser()
parser.add_argument("-d", "--debug", action='store_true', help="Show Debug Output")
parser.add_argument("-n", "--dry-run", dest='dryrun', action='store_true', help="Do not write output files")
parser.add_argument("--pwfox", dest='pwfox', action='store_true', help="Pywalfox matching colors")
args = parser.parse_args()

if args.debug:
    print("Displaying Debug Output of % s" % parser.prog)

username = os.environ['USER']
base_cache_dir = os.environ.get('XDG_CACHE_HOME', f'/home/{username}/.cache/')
wal_cache_file = f"{base_cache_dir}/wal/colors.json"

with open(wal_cache_file) as json_file:
    data = json.load(json_file)
    if args.debug:
        print("Data read from file:", wal_cache_file)
        for key, value in data["colors"].items():
            print(f"{key: >24}: {value}")

col = {f"col{i}": data["colors"][f"color{i}"] for i in range(16)}

if args.pwfox:
    pwf_l, pwf_e_l, pwf_e_e_l = 1.25, 1.85, 2.15

    bgt = hex_to_rgb(col["col0"])
    bglight = [min(255, int(bgt[i] + (bgt[i] * pwf_l))) for i in range(3)]
    bgexlight = [min(255, int(bgt[i] + (bgt[i] * pwf_e_l))) for i in range(3)]
    bgeexlight = [min(255, int(bgt[i] + (bgt[i] * pwf_e_e_l))) for i in range(3)]
    ec1, ec2, ec3 = map(rgb_to_hex, [bglight, bgexlight, bgeexlight])
else:
    ec1 = lighten_color(col["col0"], 1)
    ec2 = lighten_color(col["col0"], 2)
    ec3 = lighten_color(col["col0"], 3)

col["cole1"], col["cole2"], col["cole3"] = ec1, ec2, ec3

# Add transparency to background colors
transparent_background = add_transparency(col["col0"], 0.4)
transparent_view_bg = add_transparency(col["cole1"], 0.4)
transparent_dialog_bg = add_transparency(col["col0"], 0.4)
transparent_popover_bg = add_transparency(col["col0"], 0.4)
transparent_sidebar_bg = add_transparency(col["col0"], 0.4)

gradience_theme = {
    "name": "pywal",
    "variables": {
        "accent_color": col["col12"],
        "accent_bg_color": col["col12"],
        "accent_fg_color": lighten_color(col["col12"], 70),
        "destructive_color": col["col11"],
        "destructive_bg_color": col["col3"],
        "destructive_fg_color": lighten_color(col["col11"], 70),
        "success_color": col["col13"],
        "success_bg_color": col["col5"],
        "success_fg_color": col["col15"],
        "warning_color": col["col14"],
        "warning_bg_color": col["col6"],
        "warning_fg_color": col["col15"],
        "error_color": col["col11"],
        "error_bg_color": col["col3"],
        "error_fg_color": col["col15"],
        "window_bg_color": transparent_background,
        "window_fg_color": col["col15"],
        "view_bg_color": transparent_view_bg,
        "view_fg_color": col["col15"],
        "headerbar_bg_color": transparent_background,
        "headerbar_fg_color": col["col15"],
        "headerbar_border_color": col["cole3"],
        "headerbar_backdrop_color": col["cole3"],
        "headerbar_shade_color": col["cole2"],
        "card_bg_color": col["cole2"],
        "card_fg_color": col["col15"],
        "card_shade_color": col["cole1"],
        "dialog_bg_color": transparent_dialog_bg,
        "dialog_fg_color": col["col15"],
        "popover_bg_color": transparent_popover_bg,
        "popover_fg_color": col["col15"],
        "shade_color": col["cole3"],
        "scrollbar_outline_color": col["col12"],
        "sidebar_bg_color": transparent_sidebar_bg,
        "sidebar_fg_color": col["col15"],
        "sidebar_backdrop_color": col["cole1"],
        "sidebar_shade_color": col["cole2"],
    },
    "palette": {
        "blue_": {str(i): col[f"col{4 + i}"] for i in range(5)},
        "green_": {str(i): col[f"col{10 + i}"] for i in range(5)},
        "yellow_": {str(i): col[f"col{3 + i}"] for i in range(5)},
        "orange_": {str(i): col[f"col{9 + i}"] for i in range(5)},
        "red_": {str(i): col[f"col{1 + i}"] for i in range(5)},
        "purple_": {str(i): col[f"col{5 + i}"] for i in range(5)},
        "brown_": {str(i): col[f"col{6 + i}"] for i in range(5)},
        "light_": {str(i): col[f"col{7 + i}"] for i in range(5)},
        "dark_": {str(i): col[f"col{8 + i}"] for i in range(5)},
    },
    "custom_css": {
        "gtk4": "",
        "gtk3": ""
    },
    "plugins": {}
}

if args.debug:
    print("gradience theme values")
    for key, value in gradience_theme["variables"].items():
        print(f"{key: >24}: {value}")

home_dir = os.environ.get('HOME', f'/home/{username}')
gr_dir = ".config/presets/user"
out_dir = f"{home_dir}/{gr_dir}"
theme_file = "pywal.json"
o_file = f"{out_dir}/{theme_file}"

if not args.dryrun:
    if args.debug:
        print("writing", o_file)
    os.makedirs(out_dir, exist_ok=True)
    with open(o_file, "w") as outfile:
        json.dump(gradience_theme, outfile, indent=4)
else:
    if args.debug:
        print("dry run mode, no file written")
