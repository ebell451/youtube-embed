
//WIP

type Settings = {
    privacyMode: boolean
}

const defaultSettings: Settings = {
    privacyMode: false
}



let existing_settings = !!localStorage.getItem("youtube-embed-settings");
if (!existing_settings) {
    localStorage.setItem("youtube-embed-settings", JSON.stringify(defaultSettings));
}

const ls = localStorage.getItem("youtube-embed-settings") as string;


export const settings:Settings = JSON.parse(ls);

export function setSetting(key: keyof Settings, value: Settings[keyof Settings]) {
    settings[key] = value;
    localStorage.setItem("youtube-embed-settings", JSON.stringify(settings));
}

export function getSetting(key: keyof Settings) {
    return settings[key];
}
