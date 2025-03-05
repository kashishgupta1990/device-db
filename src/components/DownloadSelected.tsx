import { Device } from "@/types/device.type";
import React from "react";

interface DownloadSelectedProps {
    devices: Array<Pick<Device, "id" | "isSelected">>;
}
const DownloadSelected = ({ devices }: DownloadSelectedProps) => {
    return (
        <button
            className="ml-4 bg-gray-300 text-gray-700 px-3 py-1 rounded cursor-not-allowed"
            disabled
        >
            ⬇ Download Selected
        </button>
    );
};

export default DownloadSelected;
