import React, { useState, useEffect } from 'react';

const TimerComponent = ({ originalEstimateInSeconds }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [remainingEstimatedSeconds, setRemainingEstimatedSeconds] = useState(originalEstimateInSeconds);

    useEffect(() => {
        let intervalId = null;

        if (isRunning) {
            intervalId = setInterval(() => {
                setRemainingEstimatedSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const handlePlayClick = () => {
        setIsRunning(true);
    };

    const handlePauseClick = () => {
        setIsRunning(false);
    };

    const formatTime = seconds => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <div>Remaining: {formatTime(remainingEstimatedSeconds)}</div>
            <div>of {formatTime(originalEstimateInSeconds)}</div>
            <button onClick={handlePlayClick}>Play</button>
            <button onClick={handlePauseClick}>Pause</button>
        </div>
    );
};

export default TimerComponent;
