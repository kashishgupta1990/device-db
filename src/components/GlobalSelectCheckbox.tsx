import { Device } from "@/types/device.type";
import { useEffect, useState } from "react";

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
    const numberOfSelectedDevices = devices.filter(
        (d) => d.isSelected === true
    ).length;

    const [isChecked, setIsChecked] = useState<boolean>(numberOfSelectedDevices === devices.length ? true : false);

    useEffect(() => {
        setIsChecked(numberOfSelectedDevices === devices.length ? true : false)
    }, [numberOfSelectedDevices]);

    return (
        <div>
            <input
                type="checkbox"
                className="mr-2"
                checked={isChecked}
                onChange={(e) => e.target.checked ? setSelectAll() : setDeSelectAll()}
            />
            <span className="text-gray-700 font-medium">
                {numberOfSelectedDevices > 0 ? numberOfSelectedDevices : "None"}{" "}
                Selected
            </span>
        </div>
    );
};

export default GlobalSelectCheckbox;
