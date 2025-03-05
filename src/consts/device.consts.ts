import {Device, DeviceStatus} from "@/types/device.type";

export const defaultDeviceData: Device[] = [
    {
        name: "smss.exe",
        device: "Stark",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
        status: DeviceStatus.Available,
    },
    {
        name: "netsh.exe",
        device: "Targaryen",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
        status: DeviceStatus.Available,
    },
    {
        name: "uxtheme.dll",
        device: "Lannister",
        path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
        status: DeviceStatus.Available,
    },
    {
        name: "cryptbase.dll",
        device: "Martell",
        path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
        status: DeviceStatus.Scheduled,
    },
    {
        name: "7za.exe",
        device: "Baratheon",
        path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
        status: DeviceStatus.Scheduled,
    },
];
