import { Device } from "@/types/device.type";
import DeviceStatusView from "./DeviceStatusView";

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
                <DeviceStatusView device={device}/>
            </td>
        </tr>
    );
};

export default DeviceTableRow;
