import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import React from 'react';

interface TimeProps {
    date: Date | number
}
const Time = ({date}: TimeProps ) => <>{distanceInWordsToNow(date)}</>;

export default Time;