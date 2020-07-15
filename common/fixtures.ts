import { IEvent } from './types';

const ONE_DAY_MS = 86400000;
const ONE_HOUR_MS = 3600000;
const ONE_WEEK_MS = 604800000;
const START_DATE_MS = 1593630000000;

export const EVENTS: IEvent[] = [
    {
        eventDurationMs: ONE_WEEK_MS * 1,
        eventStartTimeMs: START_DATE_MS,
        id: 'Event A',
        leadInDurationMs: ONE_HOUR_MS * 1,
        leadOutDurationMs: ONE_HOUR_MS * 1,
    },
    {
        eventDurationMs: ONE_WEEK_MS * 1.5,
        eventStartTimeMs: START_DATE_MS + (ONE_DAY_MS * 1),
        id: 'Event B',
        leadInDurationMs: ONE_HOUR_MS * 36,
        leadOutDurationMs: ONE_HOUR_MS * 36,
    },
    {
        eventDurationMs: ONE_WEEK_MS * 2,
        eventStartTimeMs: START_DATE_MS + (ONE_DAY_MS * 2),
        id: 'Event C',
        leadInDurationMs: ONE_HOUR_MS * 3,
        leadOutDurationMs: ONE_HOUR_MS * 3,
    },
    {
        eventDurationMs: ONE_WEEK_MS * 2.5,
        eventStartTimeMs: START_DATE_MS + (ONE_DAY_MS * 3),
        id: 'Event D',
        leadInDurationMs: ONE_HOUR_MS * 48,
        leadOutDurationMs: ONE_HOUR_MS * 48,
    },
    {
        eventDurationMs: ONE_WEEK_MS * 3,
        eventStartTimeMs: START_DATE_MS + (ONE_DAY_MS * 4),
        id: 'Event E',
        leadInDurationMs: ONE_HOUR_MS * 0,
        leadOutDurationMs: ONE_HOUR_MS * 72,
    },
    {
        eventDurationMs: ONE_WEEK_MS * 1,
        eventStartTimeMs: START_DATE_MS + (ONE_DAY_MS * 5),
        id: 'Event F',
        leadInDurationMs: 0,
        leadOutDurationMs: 0,
    },
    {
        eventDurationMs: ONE_WEEK_MS * 1.5,
        eventStartTimeMs: START_DATE_MS + (ONE_DAY_MS * 6),
        id: 'Event G',
        leadInDurationMs: ONE_HOUR_MS * 12,
        leadOutDurationMs: ONE_HOUR_MS * 12,
    },
    {
        eventDurationMs: ONE_WEEK_MS * 2,
        eventStartTimeMs: START_DATE_MS + (ONE_DAY_MS * 7),
        id: 'Event H',
        leadInDurationMs: ONE_HOUR_MS * 2,
        leadOutDurationMs: ONE_HOUR_MS * 2,
    },
    {
        eventDurationMs: ONE_WEEK_MS * 2.5,
        eventStartTimeMs: START_DATE_MS + (ONE_DAY_MS * 8),
        id: 'Event I',
        leadInDurationMs: ONE_HOUR_MS * 6,
        leadOutDurationMs: ONE_HOUR_MS * 6,
    },
    {
        eventDurationMs: ONE_WEEK_MS * 3,
        eventStartTimeMs: START_DATE_MS + (ONE_DAY_MS * 9),
        id: 'Event J',
        leadInDurationMs: ONE_HOUR_MS * 12,
        leadOutDurationMs: ONE_HOUR_MS * 48,
    },
];
