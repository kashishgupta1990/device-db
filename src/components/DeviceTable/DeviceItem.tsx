import { Device, DeviceStatus } from "@/types/device.type";
import React from "react";

interface DeviceTableRowProps {
    device: Device;
    toggleDeviceSelect: (id: string) => void;
}

const DeviceTableRow = ({
    device,
    toggleDeviceSelect
}: DeviceTableRowProps) => {
    return (
        <tr key={device.name} className="border-b hover:bg-gray-50">
            <td className="py-2 px-4">
                <input
                    type="checkbox"
                    checked={device.isSelected}
                    onChange={() => toggleDeviceSelect(device.id)}
                />
            </td>
            <td className="py-2 px-4">{device.name}</td>
            <td className="py-2 px-4">{device.device}</td>
            <td className="py-2 px-4 text-gray-600">{device.path}</td>
            <td className="py-2 px-4">
                {device.status === DeviceStatus.Available ? (
                    <div className="text-gray-500">
                        <span className="text-green-500 font-bold">● </span>
                        Available
                    </div>
                ) : (
                    <span className="text-gray-500">{device.status}</span>
                )}
            </td>
        </tr>
    );
};

export default DeviceTableRow;
