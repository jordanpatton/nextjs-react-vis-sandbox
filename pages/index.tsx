import React from 'react';

import EVENTS from '../fixtures/events';

const Index: React.FC = () => <pre>{JSON.stringify(EVENTS, null, 4)}</pre>;

export default Index;
