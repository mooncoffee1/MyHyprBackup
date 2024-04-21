import GLib from "gi://GLib?version=2.0";
const hyprland = await Service.import("hyprland");

const substitutes = {
  "transmission-gtk": "transmission",
  "blueberry.py": "blueberry",
  Caprine: "facebook-messenger",
  "com.raggesilver.BlackBox-symbolic": "terminal-symbolic",
  "org.wezfurlong.wezterm-symbolic": "terminal-symbolic",
  "audio-headset-bluetooth": "audio-headphones-symbolic",
  "audio-card-analog-usb": "audio-speakers-symbolic",
  "audio-card-analog-pci": "audio-card-symbolic",
  "preferences-system": "emblem-system-symbolic",
  "com.github.Aylur.ags-symbolic": "controls-symbolic",
  "com.github.Aylur.ags": "controls-symbolic",
};

function icon(name, fallback = "image-missing-symbolic") {
  if (!name) return fallback || "";

  if (GLib.file_test(name, GLib.FileTest.EXISTS)) return name;

  const icon = substitutes[name] || name;
  if (Utils.lookUpIcon(icon)) return icon;

  return fallback;
}

 const sendBatch = (batch) => {
  const cmd = batch
    .filter((x) => !!x)
    .map((x) => `keyword ${x}`)
    .join("; ");

  hyprland.message(`[[BATCH]]/${cmd}`);
};

 async function sh(cmd) {
  return Utils.execAsync(cmd).catch((err) => {
    console.error(typeof cmd === "string" ? cmd : cmd.join(" "), err);
    return "";
  });
}
 async function bash(strings, ...values) {
  const cmd =
    typeof strings === "string"
      ? strings
      : strings.flatMap((str, i) => str + `${values[i] ?? ""}`).join("");

  return Utils.execAsync(["bash", "-c", cmd]).catch((err) => {
    console.error(cmd, err);
    return "";
  });
}

const get = (args) => Number(Utils.exec(`brightnessctl ${args}`));
const screen = await bash`ls -w1 /sys/class/backlight | head -1`;
const kbd = await bash`ls -w1 /sys/class/leds | head -1`;

class Brightness extends Service {
  static {
    Service.register(
      this,
      {},
      {
        screen: ["float", "rw"],
        kbd: ["int", "rw"],
      },
    );
  }

  #kbdMax = get(`--device ${kbd} max`);
  #kbd = get(`--device ${kbd} get`);
  #screenMax = get("max");
  #screen = get("get") / get("max");

  get kbd() {
    return this.#kbd;
  }
  get screen() {
    return this.#screen;
  }

  set kbd(value) {
    if (value < 0 || value > this.#kbdMax) return;

    sh(`brightnessctl -d ${kbd} s ${value} -q`).then(() => {
      this.#kbd = value;
      this.changed("kbd");
    });
  }

  set screen(percent) {
    if (percent < 0) percent = 0;

    if (percent > 1) percent = 1;

    sh(`brightnessctl set ${Math.floor(percent * 100)}% -q`).then(() => {
      this.#screen = percent;
      this.changed("screen");
    });
  }

  constructor() {
    super();

    const screenPath = `/sys/class/backlight/${screen}/brightness`;
    const kbdPath = `/sys/class/leds/${kbd}/brightness`;

    Utils.monitorFile(screenPath, async (f) => {
      const v = await Utils.readFileAsync(f);
      this.#screen = Number(v) / this.#screenMax;
      this.changed("screen");
    });

    Utils.monitorFile(kbdPath, async (f) => {
      const v = await Utils.readFileAsync(f);
      this.#kbd = Number(v) / this.#kbdMax;
      this.changed("kbd");
    });
  }
}

export default new Brightness();