import { Device } from "@/types/device.type";

interface GlobalSelectCheckboxProps {
    devices: Array<Pick<Device, "id" | "isSelected">>;
    setSelectAll: () => void;
    setDeSelectAll: () => void;
}
const GlobalSelectCheckbox = ({
    devices,
    setDeSelectAll,
    setSelectAll,
}: GlobalSelectCheckboxProps) => {
    return (
        <div>
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-700 font-medium">None Selected</span>
        </div>
    );
};

export default GlobalSelectCheckbox;
