import React from 'react';
import { HorizontalBarSeries, VerticalGridLines, XAxis, XYPlot } from 'react-vis';

import { IEvent, IObservation } from '../common/types';

const DARK_COLORS = ['DarkRed', 'DarkOrange', 'DarkGreen', 'DarkBlue', 'DarkViolet'];
const LIGHT_COLORS = ['Red', 'Orange', 'Green', 'Blue', 'Violet'];

export class GanttChart extends React.Component<{ events: IEvent[] }> {
    /**
     * Splits data into transparent offset data and opaque actual data. Bar charts need
     * stacked data series in order to display bars that don't start at the axis.
     */
    private getHorizontalBarSeriesData() {
        const { events } = this.props;
        const eventData: IObservation[] = [];
        const leadInData: IObservation[] = [];
        const leadOutData: IObservation[] = [];
        const offsetData: IObservation[] = [];

        // note: do not sort here; use order from provided data
        events.forEach((val, idx) => {
            // offset
            const offsetX = val.eventStartTimeMs - val.leadInDurationMs;
            offsetData[idx] = {
                x: offsetX < 0 ? 0 : offsetX, // no negative offset
                y: idx, // 0...N (not for display)
            };
            // lead-in
            const leadInX = val.leadInDurationMs;
            leadInData[idx] = {
                x: leadInX < 1 ? 1 : leadInX, // minimum bar width of 1
                y: idx, // 0...N (matches offset)
                color: LIGHT_COLORS[idx % LIGHT_COLORS.length],
            };
            // event
            const eventX = val.eventDurationMs;
            eventData[idx] = {
                x: eventX < 1 ? 1 : eventX, // minimum bar width of 1
                y: idx, // 0...N (matches offset)
                color: DARK_COLORS[idx % DARK_COLORS.length],
            };
            // lead-out
            const leadOutX = val.leadOutDurationMs;
            leadOutData[idx] = {
                x: leadOutX < 1 ? 1 : leadOutX, // minimum bar width of 1
                y: idx, // 0...N (matches offset)
                color: LIGHT_COLORS[idx % LIGHT_COLORS.length],
            };
        });

        return { eventData, leadInData, leadOutData, offsetData };
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
        const { eventData, leadInData, leadOutData, offsetData } = this.getHorizontalBarSeriesData();
        return (
            <XYPlot
                height={500}
                margin={{ top: 40, right: 10, bottom: 10, left: 10 }}
                stackBy="x"
                xDomain={[this.getXDomainLower(), this.getXDomainUpper()]}
                xType="time"
                yDomain={[0, events.length]}
                yType="linear"
                width={500}
            >
                <XAxis
                    orientation="top"
                    tickFormat={(v: Date) => `${v.getMonth() + 1}/${v.getDate()}`}
                />
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
                    data={leadInData}
                    stack
                />
                {/* @ts-ignore: use `data` instead of `barWidth` */}
                <HorizontalBarSeries
                    colorType="literal" // uses "color" from data itself
                    data={eventData}
                    stack
                />
                {/* @ts-ignore: use `data` instead of `barWidth` */}
                <HorizontalBarSeries
                    colorType="literal" // uses "color" from data itself
                    data={leadOutData}
                    stack
                />
            </XYPlot>
        );
    }
}

export default GanttChart;
