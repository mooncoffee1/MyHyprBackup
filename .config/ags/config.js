const hyprland = await Service.import("hyprland")
const mpris = await Service.import("mpris")
const audio = await Service.import("audio")
const battery = await Service.import("battery")
const systemtray = await Service.import("systemtray")
const powerProfiles = await Service.import('powerprofiles')


import { NotificationPopups } from "./notificationPopups.js"
import { applauncher } from "./applauncher.js"
import FocusedTitle from "./title.js";
import brightness from './brightness.js';

App.config({
    windows: [applauncher],
})

App.config({
    style: App.configDir + "/style.css",
    windows: [
        NotificationPopups(),
    ],
})

const date = Variable("", {
    poll: [1000, 'date "+%H:%M:%S %b %e."'],
})

// widgets can be only assigned as a child in one container
// so to make a reuseable widget, make it a function
// then you can simply instantiate one by calling it
async function PowerProfile() {
    const powerProfiles = await Service.import('powerprofiles');

    // Array of profiles
    const profiles = ['balanced', 'performance', 'power-saver'];

    // Custom labels for each profile
    const profileLabels = {
        'balanced': '󰈐',
        'performance': '󱑬',
        'power-saver': '󰠝'
    };

    // Initial state to keep track of the current profile index
    let currentProfileIndex = profiles.indexOf(powerProfiles.active_profile);

    // Function to determine the appropriate class based on the profile
    function getProfileClass(profile) {
        switch (profile) {
            case 'balanced':
                return 'profile-balanced';
            case 'performance':
                return 'profile-performance';
            case 'power-saver':
                return 'profile-powersaver';
            default:
                return ''; // Default class if needed
        }
    }

    // Create a label widget for the button
    const label = Widget.Label({
        label: profileLabels[powerProfiles.active_profile],
        class_name: getProfileClass(powerProfiles.active_profile) // Set initial class for color
    });

    const button = Widget.Button({
        on_clicked: () => {
            // Move to the next profile in the array, cycling back to the start if at the end
            currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
            powerProfiles.active_profile = profiles[currentProfileIndex];

            // Update the button label text and class for the new profile
            label.label = profileLabels[profiles[currentProfileIndex]];
            label.class_name = getProfileClass(profiles[currentProfileIndex]);
        },
        child: label
    });

    return Widget.Box({
        children: [button]
    });
}



function Workspaces() {
    const activeId = hyprland.active.workspace.bind("id");

    const workspaces = hyprland.bind("workspaces")
        .as(ws => {
            // Ensure workspaces are sorted by their ID or another sorting rule before mapping
            ws.sort((a, b) => parseInt(a.id) - parseInt(b.id));

            return ws.map(({ id, isUrgent }) => Widget.Button({
                on_clicked: () => hyprland.messageAsync(`dispatch workspace ${id}`),
                child: Widget.Label(`${id}`),
                class_name: activeId.as(i => {
                    // Determine class based on both focus and urgency
                    if (i === id) {
                        return "focused";
                    } else if (isUrgent) {
                        return "urgent";
                    } else {
                        return "";
                    }
                }),
            }));
        });

    return Widget.Box({
        class_name: "workspaces",
        children: workspaces,
    });
}



const timeVar = Variable("", {
    poll: [1000, ["date", "+%H:%M:%S"]]
  });
  const dateVar = Variable("", {
    poll: [5000, ["date", "+%a %m/%d"]]
  });
  const Clock = () => Widget.EventBox({
    child: Widget.Box({
      class_name: "clock-container",
      vertical: true,
      children: [
        Widget.Label({
          class_name: "clock-date",
          hpack: "end",
          label: dateVar.bind()
        }),
        Widget.Label({
          class_name: "clock-time",
          hpack: "end",
          label: timeVar.bind()
        }),
      ],
    })
  });
  


// we don't need dunst or any other notification daemon
// because the Notifications module is a notification daemon itself


function Media() {
    const label = Utils.watch("", mpris, "player-changed", () => {
        if (mpris.players[0]) {
            const { track_artists, track_title } = mpris.players[0]
            return `${track_artists.join(", ")} - ${track_title}`
        } else {
            return "Nothing is playing"
        }
    })

    return Widget.Button({
        class_name: "media",
        on_primary_click: () => mpris.getPlayer("")?.playPause(),
        on_scroll_up: () => mpris.getPlayer("")?.next(),
        on_scroll_down: () => mpris.getPlayer("")?.previous(),
        child: Widget.Label({ label }),
    })
}


const volumeIndicator = Widget.Button({
    on_clicked: () => audio.speaker.is_muted = !audio.speaker.is_muted,
    child: Widget.Icon().hook(audio.speaker, self => {
        const vol = audio.speaker.volume * 100;
        const icon = [
            [101, 'overamplified'],
            [67, 'high'],
            [34, 'medium'],
            [1, 'low'],
            [0, 'muted'],
        ].find(([threshold]) => threshold <= vol)?.[1];

        self.icon = `audio-volume-${icon}-symbolic`;
        self.tooltip_text = `Volume ${Math.floor(vol)}%`;
    }),
})

const batteryProgress = Widget.Box({
    visible: battery.bind('available'),
    class_name: battery.bind('charging').as(ch => ch ? 'charging' : ''),
    tooltip_text: battery.bind('percent').as(p => `Battery: ${p}%`), // Tooltip shows the percentage
    children: [
        Widget.Icon({
            icon: battery.bind('icon_name')
            
        }),
        // Removed the always visible percentage label
    ],
    css: "display: flex; align-items: center; gap: 5px;", // Ensures horizontal layout and center alignment
});


function SysTray() {
    const items = systemtray.bind("items")
        .as(items => items.map(item => Widget.Button({
            child: Widget.Icon({ icon: item.bind("icon") }),
            on_secondary_click: (_, event) => item.activate(event),
            on_primary_click: (_, event) => item.openMenu(event),
            tooltip_markup: item.bind("tooltip_markup"),
        })))

    return Widget.Box({
        children: items,
    })
}


// layout of the bar
function Left() {
    return Widget.Box({
        spacing: 8,
        children: [
            Workspaces(),
            FocusedTitle(),
        ],
    })
}

function Center() {
    return Widget.Box({
        spacing: 8,
        children: [
            Media(),
        ],
    })
}

async function Right() {
    const powerProfileWidget = await PowerProfile();  // Ensure this is resolved before using

    return Widget.Box({
        hpack: "end",
        spacing: 8,
        children: [
            SysTray(),
            powerProfileWidget,
            volumeIndicator,
            batteryProgress,
            Clock(),
        ],
    });
}


async function Bar(monitor = 0) {
    return Widget.Window({
        name: `bar-${monitor}`,
        class_name: "bar",
        monitor,
        anchor: ["top", "left", "right"],
        exclusivity: "exclusive",
        child: Widget.CenterBox({
            start_widget: await Left(),
            center_widget: await Center(),
            end_widget: await Right(),
        }),
    });
}


App.config({
    style: "./style.css",
    windows: [
        Bar(),

        // you can call it, for each monitor
        // Bar(0),
        // Bar(1)
    ],
})

export { }
