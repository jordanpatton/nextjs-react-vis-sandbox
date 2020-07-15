import React from 'react';

import GanttChart from '../components/GanttChart';
import { EVENTS } from '../common/fixtures';

const Index: React.FC = () => {
    const [isReversed, setIsReversed] = React.useState<boolean>(false);
    let sortedEvents = EVENTS.sort((a, b) => {
        const aAbsoluteStart = a.eventStartTimeMs - a.leadInDurationMs;
        const bAbsoluteStart = b.eventStartTimeMs - b.leadInDurationMs;
        return aAbsoluteStart - bAbsoluteStart;
    });
    return (
        <>
            <div>
                <button onClick={() => setIsReversed(!isReversed)} type="button">
                    Reverse Order
                </button>
            </div>
            <GanttChart events={isReversed ? sortedEvents : sortedEvents.reverse()} />
        </>
    );
};

export default Index;
