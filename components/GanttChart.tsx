import React from 'react';
import { HorizontalBarSeries, VerticalGridLines, XAxis, XYPlot } from 'react-vis';

import { IEvent, IObservation } from '../common/types';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

export class GanttChart extends React.Component<{ events: IEvent[] }> {
    /**
     * Splits data into transparent offset data and opaque actual data. Bar charts need
     * two stacked data series in order to display a bar that doesn't start at the axis.
     */
    private getHorizontalBarSeriesData() {
        const { events } = this.props;
        const actualData: IObservation[] = [];
        const offsetData: IObservation[] = [];

        // note: do not sort here; use order from provided data
        events.forEach((val, idx) => {
            const absoluteStart = val.eventStartTimeMs - val.leadInDurationMs;
            const absoluteEnd = val.eventStartTimeMs + val.eventDurationMs + val.leadOutDurationMs;
            const offsetX = absoluteStart;
            offsetData[idx] = {
                x: offsetX < 0 ? 0 : offsetX, // no negative offset
                y: idx, // 0...N (not for display)
            };
            const actualX = absoluteEnd - absoluteStart;
            actualData[idx] = {
                x: actualX < 1 ? 1 : actualX, // minimum bar width of 1
                y: idx, // 0...N (matches offset)
                color: COLORS[idx % COLORS.length],
            };
        });

        return { actualData, offsetData };
    }

    private getXDomainLower(): number {
        const { events } = this.props;
        return events.reduce(
            (acc, val) => {
                const absoluteStart = val.eventStartTimeMs - val.leadInDurationMs;
                return absoluteStart < acc ? absoluteStart : acc;
            },
            Date.now(),
        );
    }

    private getXDomainUpper(): number {
        const { events } = this.props;
        return events.reduce(
            (acc, val) => {
                const absoluteEnd = val.eventStartTimeMs + val.eventDurationMs + val.leadOutDurationMs;
                return absoluteEnd > acc ? absoluteEnd : acc;
            },
            0,
        );
    }

    render() {
        const { events } = this.props;
        const { actualData, offsetData } = this.getHorizontalBarSeriesData();
        return (
            <XYPlot
                height={500}
                margin={{ top: 10, right: 10, bottom: 40, left: 10 }}
                stackBy="x"
                xDomain={[this.getXDomainLower(), this.getXDomainUpper()]}
                xType="time"
                yDomain={[0, events.length]}
                yType="linear"
                width={500}
            >
                <XAxis tickFormat={(v: Date) => `${v.getMonth() + 1}/${v.getDate()}`} />
                <VerticalGridLines />
                {/* @ts-ignore: use `data` instead of `barWidth` */}
                <HorizontalBarSeries
                    color="transparent" // visually offsets actual data
                    data={offsetData}
                    stack
                />
                {/* @ts-ignore: use `data` instead of `barWidth` */}
                <HorizontalBarSeries
                    colorType="literal" // uses "color" from data itself
                    data={actualData}
                    stack
                />
            </XYPlot>
        );
    }
}

export default GanttChart;
