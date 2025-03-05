export enum DeviceStatus {
    Scheduled = "scheduled",
    Available = "available"
}

export type Device = {
    name: string;
    device: string;
    path: string;
    status: DeviceStatus;
}
