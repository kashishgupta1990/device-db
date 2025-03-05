import { Device, DeviceStatus } from "@/types/device.type";
import React from "react";

interface DeviceStatusProps {
    device: Pick<Device, "id" | "status">;
}
const DeviceStatusView = ({ device }: DeviceStatusProps) => {
    return (
        <div>
            {device.status === DeviceStatus.Available ? (
                <div className="text-gray-500">
                    <span className="text-green-500 font-bold">● </span>
                    Available
                </div>
            ) : (
                <span className="text-gray-500">{device.status}</span>
            )}
        </div>
    );
};

export default DeviceStatusView;
