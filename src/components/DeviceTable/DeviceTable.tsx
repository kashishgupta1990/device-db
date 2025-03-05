"use client";

import { defaultDeviceData } from "@/consts/device.consts";
import { Device } from "@/types/device.type";
import { useState } from "react";
import DownloadSelected from "../DownloadSelected";
import GlobalSelectCheckbox from "../GlobalSelectCheckbox";
import DeviceTableHeader from "./DeviceTableHeader";
import DeviceTableRow from "./DeviceItem";

const files = [
    {
        name: "smss.exe",
        device: "Stark",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
        status: "Scheduled",
    },
    {
        name: "netsh.exe",
        device: "Targaryen",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
        status: "Available",
    },
    {
        name: "uxtheme.dll",
        device: "Lannister",
        path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
        status: "Available",
    },
    {
        name: "cryptbase.dll",
        device: "Martell",
        path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
        status: "Scheduled",
    },
    {
        name: "7za.exe",
        device: "Baratheon",
        path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
        status: "Scheduled",
    },
];

const DeviceTable = () => {
    const [devices, setDevices] = useState<Device[]>(defaultDeviceData);

    const setDeSelectAll = () => {
        setDevices((prev) => {
            return [
                ...prev.map((item) => ({
                    ...item,
                    isSelected: false,
                })),
            ];
        });
    };

    const setSelectAll = () => {
        setDevices((prev) => {
            return [
                ...prev.map((item) => ({
                    ...item,
                    isSelected: true,
                })),
            ];
        });
    };

    const toggleDeviceSelect = (id: string) => {
        setDevices((prev) => {
            return [
                ...prev.map((item) => ({
                    ...item,
                    isSelected: item.id === id ? !item.isSelected : item.isSelected,
                })),
            ];
        });
    };

    return (
        <div className="p-4">
            <div className="flex items-center mb-4">
                <GlobalSelectCheckbox
                    devices={devices}
                    setDeSelectAll={setDeSelectAll}
                    setSelectAll={setSelectAll}
                />
                <DownloadSelected devices={devices} />
            </div>
            <div className="overflow-x-auto border rounded-lg shadow">
                <table className="min-w-full bg-white">
                    <DeviceTableHeader/>
                    <tbody>
                        {devices.map((device) => (
                            <DeviceTableRow key={device.id} device={device} toggleDeviceSelect={toggleDeviceSelect}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeviceTable;
