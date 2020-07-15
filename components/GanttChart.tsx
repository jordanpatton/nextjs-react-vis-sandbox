import React from 'react';

import { IGanttChartProps, IGanttChartState } from '../types';

export class GanttChart extends React.Component<IGanttChartProps, IGanttChartState> {
    constructor(props: IGanttChartProps) {
        super(props);
        this.state = { crosshairValues: [] };
    }

    render() {
        const { events } = this.props;
        return <pre>{JSON.stringify(events, null, 4)}</pre>;
    }
}

export default GanttChart;
