"use client";

import { defaultDeviceData } from "@/consts/device.consts";
import { Device } from "@/types/device.type";
import { useState } from "react";

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

    const toggleSelect = (name) => {
        setSelected((prev) =>
            prev.includes(name)
                ? prev.filter((item) => item !== name)
                : [...prev, name]
        );
    };

    return (
        <div className="p-4">
            <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700 font-medium">None Selected</span>
                <button
                    className="ml-4 bg-gray-300 text-gray-700 px-3 py-1 rounded cursor-not-allowed"
                    disabled
                >
                    ⬇ Download Selected
                </button>
            </div>
            <div className="overflow-x-auto border rounded-lg shadow">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="py-2 px-4 text-left">
                                <input type="checkbox" />
                            </th>
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Device</th>
                            <th className="py-2 px-4 text-left">Path</th>
                            <th className="py-2 px-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file) => (
                            <tr
                                key={file.name}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="py-2 px-4">
                                    <input
                                        type="checkbox"
                                        checked={devices.includes(file.name)}
                                        onChange={() => toggleSelect(file.name)}
                                    />
                                </td>
                                <td className="py-2 px-4">{file.name}</td>
                                <td className="py-2 px-4">{file.device}</td>
                                <td className="py-2 px-4 text-gray-600">
                                    {file.path}
                                </td>
                                <td className="py-2 px-4">
                                    {file.status === "Available" ? (
                                        <div className="text-gray-500">
                                            <span className="text-green-500 font-bold">
                                                ●{" "}
                                            </span>
                                            Available
                                        </div>
                                    ) : (
                                        <span className="text-gray-500">
                                            {file.status}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeviceTable;
