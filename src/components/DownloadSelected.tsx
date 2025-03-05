import { Device, DeviceStatus } from "@/types/device.type";

interface DownloadSelectedProps {
    devices: Device[];
}
const DownloadSelected = ({ devices }: DownloadSelectedProps) => {
    const selectedAndAvailableDevices = devices.filter((device) => {
        return device.isSelected && device.status === DeviceStatus.Available;
    });

    const isDownloadSelectedAvailable =
        selectedAndAvailableDevices.length ===
            devices.filter((device) => device.isSelected).length &&
        selectedAndAvailableDevices.length > 0;

    const download = () => {
        if (!isDownloadSelectedAvailable) {
            return;
        }

        const alertString = devices
            .filter((device) => {
                return (
                    device.isSelected &&
                    device.status === DeviceStatus.Available
                );
            })
            .map(
                (device) =>
                    `Name: ${device.name} Device: ${device.device} Path: ${device.path}`
            );

        alert(alertString.join("\n"));
    };

    return (
        <button
            className={`ml-4 text-gray-700 px-3 py-1 rounded ${
                isDownloadSelectedAvailable ? "bg-green-300" : "bg-gray-300"
            }`}
            disabled={false}
            onClick={download}
        >
            ⬇ Download Selected
        </button>
    );
};

export default DownloadSelected;
