const ONE_DAY_MS = 86400000;
const ONE_HOUR_MS = 3600000;
const ONE_WEEK_MS = 604800000;
const START_DATE_MS = 1593630000000;

const EVENTS = [
    {
        lead_in_duration_ms: ONE_HOUR_MS * 1,
        lead_out_duration_ms: ONE_HOUR_MS * 1,
        event_duration_ms: ONE_WEEK_MS * 1,
        event_start_time_ms: START_DATE_MS,
        id: 'Event A',
    },
    {
        lead_in_duration_ms: ONE_HOUR_MS * 2,
        lead_out_duration_ms: ONE_HOUR_MS * 2,
        event_duration_ms: ONE_WEEK_MS * 1.5,
        event_start_time_ms: START_DATE_MS + (ONE_DAY_MS * 1),
        id: 'Event B',
    },
    {
        lead_in_duration_ms: ONE_HOUR_MS * 3,
        lead_out_duration_ms: ONE_HOUR_MS * 3,
        event_duration_ms: ONE_WEEK_MS * 2,
        event_start_time_ms: START_DATE_MS + (ONE_DAY_MS * 2),
        id: 'Event C',
    },
    {
        lead_in_duration_ms: ONE_HOUR_MS * 1,
        lead_out_duration_ms: ONE_HOUR_MS * 1,
        event_duration_ms: ONE_WEEK_MS * 2.5,
        event_start_time_ms: START_DATE_MS + (ONE_DAY_MS * 3),
        id: 'Event D',
    },
    {
        lead_in_duration_ms: ONE_HOUR_MS * 2,
        lead_out_duration_ms: ONE_HOUR_MS * 2,
        event_duration_ms: ONE_WEEK_MS * 3,
        event_start_time_ms: START_DATE_MS + (ONE_DAY_MS * 4),
        id: 'Event E',
    },
    {
        lead_in_duration_ms: ONE_HOUR_MS * 3,
        lead_out_duration_ms: ONE_HOUR_MS * 3,
        event_duration_ms: ONE_WEEK_MS * 1,
        event_start_time_ms: START_DATE_MS + (ONE_DAY_MS * 5),
        id: 'Event F',
    },
    {
        lead_in_duration_ms: ONE_HOUR_MS * 1,
        lead_out_duration_ms: ONE_HOUR_MS * 1,
        event_duration_ms: ONE_WEEK_MS * 1.5,
        event_start_time_ms: START_DATE_MS + (ONE_DAY_MS * 6),
        id: 'Event G',
    },
    {
        lead_in_duration_ms: ONE_HOUR_MS * 2,
        lead_out_duration_ms: ONE_HOUR_MS * 2,
        event_duration_ms: ONE_WEEK_MS * 2,
        event_start_time_ms: START_DATE_MS + (ONE_DAY_MS * 7),
        id: 'Event H',
    },
    {
        lead_in_duration_ms: ONE_HOUR_MS * 3,
        lead_out_duration_ms: ONE_HOUR_MS * 3,
        event_duration_ms: ONE_WEEK_MS * 2.5,
        event_start_time_ms: START_DATE_MS + (ONE_DAY_MS * 8),
        id: 'Event I',
    },
    {
        lead_in_duration_ms: ONE_HOUR_MS * 1,
        lead_out_duration_ms: ONE_HOUR_MS * 1,
        event_duration_ms: ONE_WEEK_MS * 3,
        event_start_time_ms: START_DATE_MS + (ONE_DAY_MS * 9),
        id: 'Event J',
    },
];

export default EVENTS;
