export enum DeviceStatus {
    Scheduled = "scheduled",
    Available = "available"
}

export type Device = {
    id: string;
    isSelected: boolean;
    name: string;
    device: string;
    path: string;
    status: DeviceStatus;
}
