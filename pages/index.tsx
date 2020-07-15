import React from 'react';

import GanttChart from '../components/GanttChart';
import { EVENTS } from '../common/fixtures';

const Index: React.FC = () => {
    const [isReversed, setIsReversed] = React.useState<boolean>(false);
    const events = isReversed ? EVENTS : EVENTS.slice().reverse();
    return (
        <>
            <div>
                <button onClick={() => setIsReversed(!isReversed)} type="button">
                    Reverse Order
                </button>
            </div>
            <GanttChart events={events} />
        </>
    );
};

export default Index;
