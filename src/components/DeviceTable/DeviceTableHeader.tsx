import React from "react";

const DeviceTableHeader = () => {
    return (
        <thead>
            <tr className="bg-gray-100 border-b">
                <th className="py-2 px-4 text-left"></th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Device</th>
                <th className="py-2 px-4 text-left">Path</th>
                <th className="py-2 px-4 text-left">Status</th>
            </tr>
        </thead>
    );
};

export default DeviceTableHeader;
