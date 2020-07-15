export interface IObservation {
    color?: string;
    x: number;
    y: number;
}

export interface IEvent {
    eventDurationMs: number;
    eventStartTimeMs: number;
    id: string;
    leadInDurationMs: number;
    leadOutDurationMs: number;
}
