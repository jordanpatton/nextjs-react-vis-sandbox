import React from 'react';

import GanttChart from '../components/GanttChart';
import EVENTS from '../fixtures/events';

const Index: React.FC = () => <GanttChart events={EVENTS} />;

export default Index;
