export interface IEvent {
    eventDurationMs: number;
    eventStartTimeMs: number;
    id: string;
    leadInDurationMs: number;
    leadOutDurationMs: number;
}

export interface IGanttChartProps {
    events: IEvent[];
}

export interface IGanttChartState {
    crosshairValues: any[];
}
