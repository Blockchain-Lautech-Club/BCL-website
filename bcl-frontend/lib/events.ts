import data from './data.json';

// Export events with dynamically calculated status based on endTimestamp
export const events = data.events.map(event => {
  let isPast = false;
  if (event.endTimestamp) {
    isPast = new Date(event.endTimestamp).getTime() < Date.now();
  }
  
  return {
    ...event,
    status: isPast ? "past" : "upcoming",
  };
});
